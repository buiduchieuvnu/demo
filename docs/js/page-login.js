(function () {
  "use strict";

  
  const btnLogin = document.getElementById("btnLogin");
  const txtPass = document.getElementById("txtPass");
  const txtUser = document.getElementById("txtUser");

  btnLogin.addEventListener("click", function () {

    const user = txtUser.value;
    const pass = txtPass.value;

    if (!user || !pass) {
      alert('Xin lỗi, không được để trống tài khoản hoặc mật khẩu');
      txtUser.focus();
      txtUser.select();
    }

    if (user=='admin' && pass=='Admin@123') {
      window.location.href = '/hc-page-home.html';
    }else{
      alert('Tài khoản hoặc mật khẩu không hợp lệ!');
      clearForm();
    }

    

    
 });

  const clearForm = () => {
    txtUser.value = "";
    txtPass.value = "";
    txtUser.focus();
  }


})();