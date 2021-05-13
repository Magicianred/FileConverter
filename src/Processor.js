class Processor {
    
    static process(fileData){
        var processedData = []

        fileData.split("\r\n").forEach(row => { 
            processedData.push(row.split(","))
        })
        
        return processedData
    }
}

module.exports = Processor