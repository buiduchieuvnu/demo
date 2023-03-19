class BaseModel {
    constructor(code) {
        this.code = code;
    }

    log(msg) {
        console.log(`${this.code}: ${msg}`);
    }

    xinchao() {
        alert('Xin chào!');
    }

    getJsonData(dataUrl) {
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

}