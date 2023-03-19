var BenhNhanView  = function(){

    var that = this;
    this.oBenhNhan = new BenhNhan();
    this.arrBenhNhan = [];
     
	this.init = function(){
        console.log('BenhNhanView init...');
    }

    this.search = async function(){
        that.arrBenhNhan = await that.oBenhNhan.getSampleData();
        console.log(that.arrBenhNhan);
    }


    document.addEventListener("DOMContentLoaded", function(event) { 
        that.init();
        that.search();
    });
}