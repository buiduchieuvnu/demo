(function () {
  "use strict";

  // Trợ lý ảo AI by hieubd
  const btnSendMessage = document.getElementById("btnSendMessage");
  const sendMessage = document.getElementById("txtMessage");
  
  // const microphone = document.querySelector('.va-microfone');

  btnSendMessage.addEventListener("click", function () {
     var msg = sendMessage.value;
     //alert(msg);
     addUserChat(msg);
     questionAI(msg);
     sendMessage.value = "";
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
    + '<div class="user-avatar mt-1">                                                                                                                                                  '
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

  const questionAI = (msg) => {
    var myHeaders = new Headers();
    myHeaders.append("authority", "qna-openai.netlify.app");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("origin", "https://qna-openai.netlify.app");
    myHeaders.append("referer", "https://qna-openai.netlify.app/?fbclid=IwAR1jUgdl8HYQBcg_aC6nSVBBAGbAHh-8LTOao2_5TJjs8MbnCUD1KHs6sm0");
    myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36");

    var raw = JSON.stringify({
      "prompt": "AI Y tế",
      "input": msg
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://qna-openai.netlify.app/api/chat", requestOptions)
      .then(response => response.text())
      .then(result => addBOTChat(result))
      .catch(error => console.log('error', error));

  }


})();