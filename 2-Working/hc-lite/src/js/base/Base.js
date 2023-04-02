class Base{

    static HCDB;

    constructor(log) {
        this.logMode = log === undefined?0:log;

    }

    /**
     * Hàm show log
     * @param {*} msg: Nội dung log
     * @param {*} level: Level log. 0: INFO; 1: Warning; 2: Error
     * @returns void
     */
    log(msg,level){
        if (this.logMode == 0) {
            return;
        }

        var lv = level === undefined?0:level;
        
        switch (lv) {
            case 0: console.log('INFO: ',msg); break;
            case 1: console.log('WARNING: ',msg); break;
            case 2: console.log('ERROR: ',msg); break;
            default: console.log('INFO: ',msg);break;
        }
        
    }
}