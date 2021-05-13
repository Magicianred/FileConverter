var ejs = require('ejs')

class Table {

    constructor(array){

        //Classificando arrays em colunas e linhas
        this.header = array[0]
        array.shift()
        this.rows = array

    }

    //Carregar linhas e colunas no arquivo table.ejs 
    async genTableHTML(){

        return await ejs.renderFile("./src/table.ejs",{
            header: this.header, rows: this.rows})
    
    }

}
module.exports = Table