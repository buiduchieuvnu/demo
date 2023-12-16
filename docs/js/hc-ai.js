(function () {
  "use strict";

  const GG = new GoogleCloudService();

  // Trợ lý ảo AI by hieubd
  const btnSendMessage = document.getElementById("btnSendMessage");
  const btnMicrofone = document.getElementById("btnRecording");
  const sendMessage = document.getElementById("txtMessage");
  
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
        input: msg + " nếu câu bạn không đủ kiến thức hoặc không biết thì hãy trả về đúng 1 từ là 'TRA GOOGLE' không trả về cái gì hết ngoài từ đó",
      });

      if (!response.data.toString().includes('TRA GOOGLE')) {
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
    }, 2000);
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
    }

    

    
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