(function () {
  "use strict";

  const GG = new GoogleCloudService();

  // Trợ lý ảo AI by hieubd
  const btnSendMessage = document.getElementById("btnSendMessage");
  const btnMicrofone = document.getElementById("btnRecording");
  const sendMessage = document.getElementById("txtMessage");
  const MSG_VA_UNKNOWN = "Xin lỗi HC không hiểu mệnh lệnh trên.";
  var listThanhPho = [];
  let datLichKham = false;
  // const microphone = document.querySelector('.va-microfone');

  btnSendMessage.addEventListener("click", function () {
     var msg = sendMessage.value;
     //alert(msg);
     addUserChat(msg);
     sendMessage.value = "";
     questionAI(msg);
     
  });

  const addUserChat = (msg) => {
    const chatBox = document.getElementById("chatBox");
    const chatMsg = '<!-- Single Chat Item -->                                                                                                                                                      '
    + '<div class="single-chat-item outgoing">                                                                                                                                        '
    + '	<!-- User Avatar -->                                                                                                                                                        '
    + '	<div class="user-avatar mt-1">                                                                                                                                              '
    + '	</div>                                                                                                                                                                      '
    + '	<!-- User Message -->                                                                                                                                                       '
    + '	<div class="user-message">                                                                                                                                                  '
    + '	  <div class="message-content">                                                                                                                                             '
    + '		<div class="single-message">                                                                                                                                            '
    + '		  <p>'+msg+'</p>                                                                                                                                       '
    + '		</div>                                                                                                                                                                  '
    + '		<!-- Options -->                                                                                                                                                        '
    + '		<div class="dropstart">                                                                                                                                                 '
    + '		  <button class="btn btn-options dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></button>      '
    + '		  <ul class="dropdown-menu">                                                                                                                                            '
    + '			<li><a href="#"><i class="bi bi-reply"></i>Reply</a></li>                                                                                                           '
    + '			<li><a href="#"><i class="bi bi-forward"></i>Forward</a></li>                                                                                                       '
    + '			<li><a href="#"><i class="bi bi-trash"></i>Remove</a></li>                                                                                                          '
    + '		  </ul>                                                                                                                                                                 '
    + '		</div>                                                                                                                                                                  '
    + '	  </div>                                                                                                                                                                    '
    + '	  <!-- Time and Status -->                                                                                                                                                  '
    + '	  <div class="message-time-status">                                                                                                                                         '
    + '		<div class="sent-time">'+getCurrentDateTime()+'</div>                                                                                                                                   '
    + '		<div class="sent-status seen"><i class="bi bi-check-lg" aria-hidden="true"></i></div>                                                                                   '
    + '	  </div>                                                                                                                                                                    '
    + '	</div>                                                                                                                                                                      '
    + '</div>                                                                                                                                                                         ';
    chatBox.innerHTML += chatMsg;
    
  }

  const addBOTChat = (msg) => {
    const chatBox = document.getElementById("chatBox");
    const chatMsg = '<!-- Single Chat Item -->                                                                                                                                                       '
    + '<div class="single-chat-item">                                                                                                                                                  '
    + '<!-- User Avatar -->                                                                                                                                                            '
    + '<div class="user-avatar mt-1"> <span class="name-first-letter">A</span><img src="img/demo-img/trolyao.png" alt="">                                                                                                                                                 '
    + '</div>                                                                                                                                                                          '
    + '<!-- User Message -->                                                                                                                                                           '
    + '<div class="user-message">                                                                                                                                                      '
    + '  <div class="message-content">                                                                                                                                                 '
    + '	<div class="single-message">                                                                                                                                                 '
    + '	  <p>'+msg+'</p>                                                                                                                                                                       '
    + '	</div>                                                                                                                                                                       '
    + '	<!-- Options -->                                                                                                                                                             '
    + '	<div class="dropstart">                                                                                                                                                      '
    + '	  <button class="btn btn-options dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></button>           '
    + '	  <ul class="dropdown-menu">                                                                                                                                                 '
    + '		<li><a href="#"><i class="bi bi-reply"></i>Reply</a></li>                                                                                                                '
    + '		<li><a href="#"><i class="bi bi-forward"></i>Forward</a></li>                                                                                                            '
    + '		<li><a href="#"><i class="bi bi-trash"></i>Remove</a></li>                                                                                                               '
    + '	  </ul>                                                                                                                                                                      '
    + '	</div>                                                                                                                                                                       '
    + '  </div>                                                                                                                                                                        '
    + '  <!-- Time and Status -->                                                                                                                                                      '
    + '  <div class="message-time-status">                                                                                                                                             '
    + '	<div class="sent-time">11:39 AM</div>                                                                                                                                        '
    + '  </div>                                                                                                                                                                        '
    + '</div>                                                                                                                                                                          '
    + '</div>                                                                                                                                                                          ';
    chatBox.innerHTML += chatMsg;
  }

  const getCurrentDateTime = (msg) => {
    var currentDate = new Date();
    // Lấy ngày
    var day = currentDate.getDate();
    // Lấy tháng (lưu ý rằng tháng trong JavaScript bắt đầu từ 0)
    var month = currentDate.getMonth() + 1;
    // Lấy năm
    var year = currentDate.getFullYear();
    // Lấy giờ
    var hours = currentDate.getHours();
    // Lấy phút
    var minutes = currentDate.getMinutes();
    // Lấy giây
    var seconds = currentDate.getSeconds();
    var datetime = "Giờ: " + hours + ":" + minutes + ":" + seconds + " " + day + "/" + month + "/" + year
    return datetime;

  }

  const questionAI = async (msg) => {
    console.log('AI question: ' + msg);
    try {
      const response = await  axios.post('https://qna-openai.netlify.app/api/chat', {
        input: msg + " nếu câu bạn không đủ kiến thức hoặc không biết thì hãy trả về đúng 1 từ là 'TRAGOOGLE' không trả về cái gì hết ngoài từ đó",
      });

      if (!response.data.toString().includes('TRAGOOGLE')) {
        addBOTChat(response.data);
        await GG.speech(response.data, 1);
      } else {
        const data = JSON.stringify({
          q: msg,
          gl: 'vn',
          hl: 'vi',
        });

        const googleResponse = await axios.post(
          'https://google.serper.dev/search',
          data,
          {
            headers: {
              'X-API-KEY': '445e4a16e4972f5654108187b91c6d7f9c73e47e',
              'Content-Type': 'application/json',
            },
          }
        );

        const answerResponse = await axios.post('https://qna-openai.netlify.app/api/chat', {
          input: `câu hỏi của tôi là "${msg}" và trả lời là "${googleResponse.data?.organic[0]?.snippet}" tạo thành câu hoàn chỉnh dựa trên câu hỏi và câu trả lời`,
        });

        addBOTChat(answerResponse.data);
        await GG.speech(answerResponse.data, 1);
        //outputText.innerText = 'Trả lời: ' + answerResponse.data;
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Xong!');
    }

  }

  // ======================== TRO LY AO ====================================
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


  btnMicrofone.addEventListener('click', (e) => {
    GG.speech("Trợ lý ảo HC mời bạn ra lệnh", 1);
    e.preventDefault();
    setTimeout(() => {
      recognition.start();
    }, 4000);
  });

  const handleVoice = (text) => {
    var handledText = text.toLowerCase();
    console.log('text: ', handledText);
    addUserChat(handledText);

    if (handledText.startsWith('hc')) {
      handledText = handledText.substring(2);
      questionAI(handledText);
    } else {
      if (handledText.includes('mấy giờ')) {
        const textToSpeech = `Bây giờ là ${moment().hours()} giờ ${moment().minutes()} phút`;
        GG.speech(textToSpeech, 1);
        //speak(textToSpeech);
        return;
      }

      if (handledText.includes('đăng xuất')) {
        
        GG.speech("Trợ lý ảo HC sẽ đăng xuất tài khoản của bạn khỏi phần mềm. Xin chào tạm biệt", 1);
        setTimeout(() => {
          window.location.href = 'hc-login.html';
        }, 8000);

        
        //speak(textToSpeech);
        return;
      }

      if (handledText.includes('thống kê') && handledText.includes('tổng số') && handledText.includes('bệnh nhân') && handledText.includes('trong ngày')) {
        const textToSpeech = `Tổng số bệnh nhân trong ngày phòng khám tiếp nhận là: 175 bệnh nhân`;
        addBOTChat(textToSpeech);
        GG.speech(textToSpeech, 1);
        //speak(textToSpeech);
        return;
      }

      if (handledText.includes('thống kê') && handledText.includes('tổng số') && handledText.includes('bệnh nhân') && handledText.includes('đang khám')) {
        const textToSpeech = `Tổng số bệnh nhân đang khám là: 30 bệnh nhân`;
        addBOTChat(textToSpeech);
        GG.speech(textToSpeech, 1);
        //speak(textToSpeech);
        return;
      }


      if (handledText.includes('đặt lịch khám') || handledText.includes('đặt lịch')){
        datLichKham = true;
        console.log('Đặt Lịch Khám');
        const textToSpeech = `Chào bạn, bạn muốn đặt lịch khám tại phòng khám nào?`;
        addBOTChat(textToSpeech);
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
          addBOTChat(textToSpeech);
        }
      }
    }

    

    
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
      addBOTChat(textToSpeech);
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
                  const textToSpeech = `Trợ lý ảo xin phép chuyển quý khách tới địa chỉ đặt lịch khám.`
                  addBOTChat(textToSpeech);
                  GG.speech(textToSpeech, 0.9);
                  setTimeout(() => {openUrl(selectThanhPho, obj.data[i])}, 7000);
                  return;
                }
              }
              if(!check){
                const textToSpeech = `Xin lỗi, Trợ lý ảo không tìm thấy phòng khám tại ` + selectThanhPho.tenDiaPhuong + `. Vui lòng thử lại`;
                addBOTChat(textToSpeech);
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
  }

  recognition.onerror = (err) => {
      console.error(err);
  }

  recognition.onresult = (e) => {
    console.log('onresult', e);
    const text = e.results[0][0].transcript;
    handleVoice(text);
}

})();