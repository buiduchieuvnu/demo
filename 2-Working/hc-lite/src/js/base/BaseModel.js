class BaseModel extends Base{


    constructor(code,dataUrl, logMode) {
        super(logMode);
        this.CODE = code;
        this.DATA_URL = dataUrl;
        Base.HCDB = new IndexDBUtil(CFG.DB_NAME,this.CODE,'id',['id']);
        this.log(`BaseModel DB_NAME: ${CFG.DB_NAME}; ObjectName: ${this.CODE}`);
    }

    /**
     * Func fetch
     */
    async fetchData() {
        let data = await this.getJsonData(this.DATA_URL);
        this.log(`BaseModel.syncData data: `,data);
        data.forEach(item => {
            this.DB.add(item)
        });
        this.log(`BaseModel.fetchData ${this.CODE} done. (${data.length}) records`);


    }

    getAll() {
        return new Promise((resolve, reject) => {
            const transaction = this.DB.transaction(this.CODE, "readonly");
            const objectStore = transaction.objectStore(this.CODE);
            const results = [];

            objectStore.openCursor().onsuccess = function (event) {
                const cursor = event.target.result;
                if (cursor) {
                    results.push(cursor.value);
                    cursor.continue();
                } else {
                    resolve(results);
                }
            };

            transaction.onerror = function (event) {
                reject(event.target.error);
            };
        });
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
                this.log('ERR getJsonData: \n', error);
            });
    }

    addEvents(){
        //document.addEventListener("DOMContentLoaded", this.syncData());
    }

}