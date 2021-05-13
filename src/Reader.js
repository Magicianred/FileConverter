var fs = require("fs")
var util = require("util")

class Reader{

    //fs.readFile foi transformada para promisse para trabalhar de forma asyncrona
    constructor(){
        this.reader = util.promisify(fs.readFile)
    }
    
    async readFile(filepath){
        try{
            return await this.reader(filepath, "utf8")
        }catch(error){
            return undefined
        }
    }
}

module.exports = Reader