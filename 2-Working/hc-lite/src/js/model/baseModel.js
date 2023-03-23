class BaseModel {
    constructor(code) {
        this.code = code;
        console.log('BaseModel constructor..');
        this.addEvents();
    }

    async syncData(objectCode,url) {
        let data = await this.getJsonData(url);
        let db = new IndexDBUtil('HC-lite','1.0.0',objectCode);
        console.log(`BaseModel.syncData data: `,data);
        data.forEach(item => {
            db.add(item)
        });
        console.log(`BaseModel.syncData ${objectCode} done!`);

    }

    async getJsonData(dataUrl) {
        return fetch(dataUrl)
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .catch(function (error) {
                console.log('ERR getJsonData: \n', error);
            });
    }

    addEvents(){
        //document.addEventListener("DOMContentLoaded", this.syncData());
    }

}