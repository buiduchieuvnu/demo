class DsBenhNhanView{
    
    constructor(){
        this.BenhNhan = new BenhNhan('Hieu');
        this.init();
        
    }

    init(){
        document.addEventListener('DOMContentLoaded', function() {
            console.log(`DsBenhNhanView: init...`);
        });
    }

    

}