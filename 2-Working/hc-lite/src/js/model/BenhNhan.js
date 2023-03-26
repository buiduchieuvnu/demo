class BenhNhan extends BaseModel {
    static CODE = 'BENHNHAN';
    static DATA_SOURCE_URL = 'data/sample/benhnhan.json';


    constructor() {
        super(1);
        this.DB = new IndexDBUtil(CFG.DB_NAME,this.CODE,'id');

        //this.syncData('benhnhan','data/sample/benhnhan.json');
    }

    initSample(){
        const bn = { id: 1, name: 'John Doe', age: 30 };
        this.DB.addRecord(bn);
    }



}
