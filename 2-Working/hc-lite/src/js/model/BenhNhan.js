class BenhNhan extends BaseModel {

    constructor(name) {
        super("BENHNHAN");
        this.name = name;
    }

    async getSampleData() {
        return this.getJsonData('data/sample/benhnhan.json');
    }
}
