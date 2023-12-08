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
      console.log('Dat lich kham');
      const textToSpeech = `Chào bạn, bạn muốn đặt lịch khám tại phòng khám nào?`;
      GG.speech(textToSpeech, 1);
      return;
    }

    if (datLichKham){
      let thanhPho = '';
      let phongKham = '';
      phongKham = handledText.substring(handledText.indexOf('phòng khám') + 'phòng khám'.length + 1,handledText.indexOf('ở'));
      console.log(phongKham);
      if(handledText.includes('thành phố')){
        thanhPho = handledText.substring(handledText.indexOf('thành phố') + 'thành phố'.length + 1);
        console.log(thanhPho);
      } else if(handledText.includes('tỉnh')){
        thanhPho = handledText.substring(handledText.indexOf('tỉnh') + 'tỉnh'.length + 1);
        console.log(thanhPho)
      }
      else {
        thanhPho = handledText.substring(handledText.indexOf('ở') + 'ở'.length + 1);
        console.log(thanhPho)
      }
      const textToSpeech = `Trợ lý ảo sẽ chuyển quý khách tới địa chỉ đặt lịch phòng khám`;
      GG.speech(textToSpeech, 1);
      url = 'https://homeclinic.vncare.vn/hen-kham?THANHPHO='+thanhPho+'&PHONGKHAM='+phongKham;
      console.log(url);
      window.location.href = 'https://homeclinic.vncare.vn/hen-kham';
      datLichKham = false;
      return;
    }

    GG.speech(MSG_VA_UNKNOWN, 1);
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