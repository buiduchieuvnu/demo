var BenhNhanView  = function(){

    var that = this;
    this.oBenhNhan = new BenhNhan();
    this.arrBenhNhan = [];
    this.dsBenhNhanMoi = document.getElementById('DsBenhNhanMoi');
     
	this.init = function(){
        console.log('BenhNhanView init...');
    }

    this.bindDsBenhNhanMoi = function(){
        console.log(that.dsBenhNhanMoi);
        var ds = '';
        that.arrBenhNhan.forEach(bn => {
            ds +=`<div>
              <div class="user-status-slide"><a href="#"><img src="img/bg-img/user1.png" alt="">
                  <div class="active-status"></div>
                  <p class="mb-0 mt-2 text-truncate">${bn.hoten}</p></a></div>
            </div>`;
        });
        that.dsBenhNhanMoi.innerHTML = ds;

    }

    this.search = async function(){
        that.arrBenhNhan = await that.oBenhNhan.getSampleData();
        that.bindDsBenhNhanMoi();
        console.log(that.arrBenhNhan);
    }


    document.addEventListener("DOMContentLoaded", function(event) { 
        that.init();
        that.search();
    });
}