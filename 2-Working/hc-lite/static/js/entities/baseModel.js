class BaseModel{
    constructor(code){
        this.code = code;
    }

    log(msg){
        console.log(`${this.code}: ${msg}`);
    }
}