class BenhNhan extends BaseModel {
    static DATA_SOURCE_URL = 'data/sample/benhnhan.json';



    constructor() {
        super('BENHNHAN',1);
        //this.syncData('benhnhan','data/sample/benhnhan.json');
    }

    initSample(){
        const bn = { id: 1, name: 'John Doe', age: 30 };
        this.DB.add(bn);
    }



}
