(function () {
  "use strict";

  // Virtual Assistant by hieubd
  var toggleSwitch = document.getElementById("vaSwitch");
  var currentVa = localStorage.getItem("virtual-assistant");
  const btnVa = document.getElementById("btnVa");
  const microphone = document.querySelector('.va-microfone');

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
      console.log('virtual-assistant | on');
    } else {
      document.documentElement.setAttribute("data-va", "off");
      localStorage.setItem("virtual-assistant", "off");
      btnVa.style.display='none';
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
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

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
      console.log('text', text);
      
      if (handledText.includes('mấy giờ')) {
          const textToSpeech = `${moment().hours()} hours ${moment().minutes()} minutes`;
          speak(textToSpeech);
          return;
      }
      speak('Try again');
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