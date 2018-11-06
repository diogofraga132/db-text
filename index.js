const fs = require("fs");
var prompt = require('prompt');
//optimist = require('optimist') 
const file = 'lista.txt'
//const data = 'Lucas | 22    |Torres-RS\n'
const encoding = 'utf8'

function add(data) {
    fs.writeFile(file, data, { enconding: 'utf-8', flag: 'a' }, function (err) {
        if (err) throw err;
        console.log("Arquivo Salvo \n");
    });
}
var done = false;
var resp = ""
prompt.start();


function adicionar() {
    prompt.get(['nome', 'cpf', 'endereco'], function (err, result) {

        console.log('Command-line input received:');
        console.log('  nome: ' + result.nome);
        console.log('  cpf: ' + result.cpf);
        console.log('endereco:' + result.endereco);

        let nome = result.nome;
        let cpf = result.cpf;
        let endereco = result.endereco;
        let id = 0;
        id++;

        let data = "|" + (id) + "|" + (nome) + "|" + (cpf) + "|" + (endereco) + "| \n"
        add(data);
    })
}
/*prompt.get(['continuar'], function (err, result) {
    resp = result.continuar
    if (resp === 'sim') {
        done = true;
    }
});
while (done != true) {
    add();
}*/