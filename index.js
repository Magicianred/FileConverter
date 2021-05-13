var Reader = require("./src/Reader.js")
var Writer = require("./src/Writer.js")
var Processor = require("./src/Processor.js")
const Table = require("./src/Table.js")

var reader = new Reader
var writer = new Writer

async function main(){
    
    //Carregando o arquivo
    var fileData = await reader.readFile("./public/csvFiles/File.csv")

    //Colocando os dados em um array
    var processedData = Processor.process(fileData)

    //Criando objeto table(linhas e colunas)
    var table = new Table(processedData)

    //Carregando arquivo table.ejs
    var tableHtml = await table.genTableHTML()
    
    //Gerar .html
    writer.writeHTML("./public/htmlFiles/File.html", tableHtml)

    //Gerar .pdf
    writer.writePDF("./public/pdfFiles/File.pdf", tableHtml)

}

main()