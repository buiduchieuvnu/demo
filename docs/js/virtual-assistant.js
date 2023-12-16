(function () {
  "use strict";

  // Virtual Assistant by hieubd
  var toggleSwitch = document.getElementById("vaSwitch");
  var currentVa = localStorage.getItem("virtual-assistant");
  const btnVa = document.getElementById("btnVa");
  const microphone = document.querySelector('.va-microfone');
  const GG = new GoogleCloudService();
  const MSG_VA_HELLO = "Trợ lý ảo HC xin hân hạnh phục vụ quý khách.";
  const MSG_VA_BYE = "Trợ lý ảo HC xin tạm biệt quý khách. Hẹn gặp lại";
  const MSG_VA_UNKNOWN = "Xin lỗi HC không hiểu mệnh lệnh trên.";
  var listThanhPho = [];
  let datLichKham = false;

  if (currentVa) {
    document.documentElement.setAttribute("data-va", currentVa);
    if (currentVa === "on") {
      if (toggleSwitch) {
        toggleSwitch.checked = true;
        btnVa.style.display='block';
      }
    }
  }

  function switchVa(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-va", "on");
      localStorage.setItem("virtual-assistant", "on");
      btnVa.style.display='block';
      GG.speech(MSG_VA_HELLO, 1);
      console.log('virtual-assistant | on');
    } else {
      document.documentElement.setAttribute("data-va", "off");
      localStorage.setItem("virtual-assistant", "off");
      btnVa.style.display='none';
      GG.speech(MSG_VA_BYE, 1);
      console.log('virtual-assistant | off');
    }
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener("change", switchVa, false);

    toggleSwitch.addEventListener("click", function () {
      console.log('virtual-assistant | click');
    });
  }

  // Tro ly ao
  //var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  const synth = window.speechSynthesis;
  recognition.lang = 'vi-VI';
  recognition.continuous = false;

  const speak = (text) => {
      if (synth.speaking) {
          console.error('Busy. Speaking...');
          return;
      }

      const utter = new SpeechSynthesisUtterance(text);

      utter.onend = () => {
          console.log('SpeechSynthesisUtterance.onend');
      }
      utter.onerror = (err) => {
          console.error('SpeechSynthesisUtterance.onerror', err);
      }

      synth.speak(utter);
  };

  microphone.addEventListener('click', (e) => {
    e.preventDefault();

    recognition.start();
    microphone.classList.add('recording');
  });

  const handleVoice = (text) => {
    const handledText = text.toLowerCase();
    console.log('text: ', handledText);

    if (handledText.includes('mấy giờ')) {
        const textToSpeech = `Bây giờ là ${moment().hours()} giờ ${moment().minutes()} phút`;
        GG.speech(textToSpeech, 1);
        //speak(textToSpeech);
        return;
    }

    if (handledText.includes('ở đấy không')) {
        const textToSpeech = `Em vẫn đang đợi yêu cầu từ quý khách.`;
        GG.speech(textToSpeech, 1);
        //speak(textToSpeech);
        return;
    }

    if (handledText.includes('thống kê') && handledText.includes('tổng số') && handledText.includes('bệnh nhân') && handledText.includes('trong ngày')) {
        const textToSpeech = `Tổng số bệnh nhân trong ngày phòng khám tiếp nhận là: 175 bệnh nhân`;
        GG.speech(textToSpeech, 1);
        //speak(textToSpeech);
        return;
    }

    if (handledText.includes('thống kê') && handledText.includes('tổng số') && handledText.includes('bệnh nhân') && handledText.includes('trong tuần')) {
        const textToSpeech = `Tổng số bệnh nhân trong tuần phòng khám tiếp nhận là: 1870 bệnh nhân`;
        GG.speech(textToSpeech, 1);
        //speak(textToSpeech);
        return;
    }

    if (handledText.includes('thống kê') && handledText.includes('tổng số') && handledText.includes('bệnh nhân') && handledText.includes('đang khám')) {
        const textToSpeech = `Tổng số bệnh nhân đang khám là: 30 bệnh nhân`;
        GG.speech(textToSpeech, 1);
        //speak(textToSpeech);
        return;
    }

    if (handledText.includes('đi đến') && handledText.includes('danh sách khám')) {
        window.location.href = 'hc-ds-kham.html';;
        //speak(textToSpeech);
        return;
    }

    if (handledText.includes('đi đến') && handledText.includes('kho thuốc')) {
        window.location.href = 'hc-page-medicine.html';;
        //speak(textToSpeech);
        return;
    }

    if (handledText.includes('đăng xuất')) {
        window.location.href = 'hc-login.html';;
        //speak(textToSpeech);
        return;
    }

    if (handledText.includes('đặt lịch khám')){
      datLichKham = true;
      console.log('Đặt Lịch Khám');
      const textToSpeech = `Chào bạn, bạn muốn đặt lịch khám tại phòng khám nào?`;
      GG.speech(textToSpeech, 1);
      return;
    }

    if (datLichKham){
      let thanhPho = '';
      let phongKham = '';
      phongKham = handledText.substring(handledText.indexOf('phòng khám') + 'phòng khám'.length + 1,handledText.indexOf('ở')-1);
      if(handledText.includes('thành phố')){
        thanhPho = handledText.substring(handledText.indexOf('thành phố') + 'thành phố'.length + 1);
      } else if(handledText.includes('tỉnh')){
        thanhPho = handledText.substring(handledText.indexOf('tỉnh') + 'tỉnh'.length + 1);
      }
      else {
        thanhPho = handledText.substring(handledText.indexOf('ở') + 'ở'.length + 1);
      }
      console.log(phongKham);
      console.log(thanhPho);
      if(thanhPho.length && phongKham.length){
        findThanhPho(thanhPho, phongKham);
        return;
      }
      else{
        GG.speech(MSG_VA_UNKNOWN, 1);
      }
    }

    GG.speech(MSG_VA_UNKNOWN, 1);
  }

  function getThanhPho(){
    if(localStorage.getItem("listThanhPho")){
      listThanhPho = JSON.parse(localStorage.getItem("listThanhPho"));
    }else{
      const request_ = new XMLHttpRequest();
      request_.open('GET', 'https://homeclinic-gw.vncare.vn/api/common/tinhthanh/public/search?page=0&size=1000&filter=cap==1&sort=id&sort=desc', true);
      // request_.setRequestHeader('Authorization', 'Bearer ' + token);
      request_.send();
      request_.onreadystatechange = function() {
        if (request_.readyState === 4 && request_.status === 200) {
          const response = request_.responseText;
          const obj = JSON.parse(response);
          if (obj) {
            if (obj.code === '0') {
              console.log(obj.data);
              listThanhPho = obj.data.content;
              localStorage.setItem("listThanhPho", JSON.stringify(listThanhPho));
            }
          } 
        }
      };
    }
  }
  getThanhPho();

  function findThanhPho(textThanhPho, textPhongKham){
    var check = false;
    for(let i = 0; i < listThanhPho.length; i++){
      const a = textThanhPho.toUpperCase();
      const b = listThanhPho[i].tenDiaPhuong.toUpperCase();
      if(b.includes(a)){
        console.log(listThanhPho[i]);
        findPhongKham(textPhongKham, listThanhPho[i]);
        check = true;
        return;
      }
    }
    if(!check){
      const textToSpeech = `Xin lỗi, Trợ lý ảo không tìm thấy tỉnh thành phố của bạn. Vui lòng thử lại`;
      console.log(textToSpeech);
      GG.speech(textToSpeech, 1);
    }
  }

  function findPhongKham(textPhongKham, selectThanhPho){
    const request_ = new XMLHttpRequest();
      request_.open('GET', 'https://homeclinic-gw.vncare.vn/api/common/benhvien/public/search?maTinh=' + selectThanhPho.maDiaPhuong, true);
      // request_.setRequestHeader('Authorization', 'Bearer ' + token);
      request_.send();
      request_.onreadystatechange = function() {
        if (request_.readyState === 4 && request_.status === 200) {
          const response = request_.responseText;
          const obj = JSON.parse(response);
          if (obj) {
            if (obj.code === '0') {
              console.log(obj.data);
              var check = false;
              for(let i = 0; i < obj.data.length; i++){
                const a = textPhongKham.toUpperCase();
                const b = obj.data[i].tenPhongKham.toUpperCase();
                if(b.includes(a)){
                  check = true;
                  const textToSpeech = `Xin cảm ơn, Trợ lý ảo sẽ chuyển quý khách tới địa chỉ đặt lịch phòng khám ` + obj.data[i].tenPhongKham;
                  GG.speech(textToSpeech, 1);
                  setTimeout(() => {openUrl(selectThanhPho, obj.data[i])}, 7000);
                  return;
                }
              }
              if(!check){
                const textToSpeech = `Xin lỗi, Trợ lý ảo không tìm thấy phòng khám `+ textPhongKham + ` tại ` + selectThanhPho.tenDiaPhuong + `. Vui lòng thử lại`;
                console.log(textToSpeech);
                GG.speech(textToSpeech, 1);
              }
            }
          } 
        }
      };
  }

  function openUrl(selectThanhPho, selectPhongKham){
    const url = "https://homeclinic.vncare.vn/hen-kham?thanhpho="+selectThanhPho.maDiaPhuong+"&phongkham="+selectPhongKham.ma+"";
    console.log(url);
    window.location.href = url;
    datLichKham = false; 
  }

  recognition.onspeechend = () => {
      recognition.stop();
      microphone.classList.remove('recording');
  }

  recognition.onerror = (err) => {
      console.error(err);
      microphone.classList.remove('recording');
  }

  recognition.onresult = (e) => {
    console.log('onresult', e);
    const text = e.results[0][0].transcript;
    handleVoice(text);
}


})();