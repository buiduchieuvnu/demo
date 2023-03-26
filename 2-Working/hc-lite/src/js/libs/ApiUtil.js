class ApiUtil {

    static async getJsonData(dataUrl) {
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
}