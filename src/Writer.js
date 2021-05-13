var fs = require('fs')
var util = require('util')
var pdf = require('html-pdf')

class Writer {

    async writeHTML(filename, data){

        const writer = util.promisify(fs.writeFile)
        
        try{
            await writer(filename, data)
            return true
        }catch(error){
            return false
        }   
    }

    writePDF(filename, data){
        pdf.create(data,{}).toFile(filename, (err) => {})
    }
}

module.exports = Writer