class BaseModel extends Base{

    constructor(logMode) {
        super(logMode);
        this.log('BaseModel constructor..');
    }


    // async syncData(objectCode,url) {
    //     let data = await this.getJsonData(url);
    //     let db = new IndexDBUtil('HC-lite','1.0.0',objectCode);
    //     this.log(`BaseModel.syncData data: `,data);
    //     data.forEach(item => {
    //         db.add(item)
    //     });
    //     this.log(`BaseModel.syncData ${objectCode} done!`);

    // }

    // async getJsonData(dataUrl) {
    //     return fetch(dataUrl)
    //         .then(function (response) {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             return response.json();
    //         })
    //         .catch(function (error) {
    //             this.log('ERR getJsonData: \n', error);
    //         });
    // }

    addEvents(){
        //document.addEventListener("DOMContentLoaded", this.syncData());
    }

}