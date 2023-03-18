class BenhNhan extends BaseModel{
   
    constructor(name){
        super("BENHNHAN"); 
        this.name = name;
    }
    
    hello(){
        alert(`${this.code}: Hello ${this.name}`);
    }
}
