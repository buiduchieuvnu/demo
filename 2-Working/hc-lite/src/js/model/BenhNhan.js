class BenhNhan extends BaseModel {

    constructor(name) {
        super("BENHNHAN");
        this.name = name;
        this.syncData('benhnhan','data/sample/benhnhan.json');
        
    }

    search(key){
        
    }

}
