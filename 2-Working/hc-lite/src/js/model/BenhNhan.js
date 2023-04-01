class BenhNhan extends BaseModel {
    static CODE = 'BENHNHAN';
    static DATA_SOURCE_URL = 'data/sample/benhnhan.json';



    constructor() {
        super(BenhNhan.CODE,BenhNhan.DATA_SOURCE_URL,1);
        
    }

    initSample(){
        this.fetchData();
    }




}
