const fs = require("fs");
var prompt = require('prompt');
//optimist = require('optimist') 
const file = 'lista.txt'
//const data = 'Lucas | 22    |Torres-RS\n'
const encoding = 'utf8'

prompt.start();


function add(data) {
    fs.writeFileSync(file, data, { enconding: 'utf-8', flag: 'a' }, function (err) {
        if (err) throw err;
        console.log("Arquivo Salvo \n");
    });
}


function adicionar() {
    console.log('\n');
    prompt.get(['nome', 'cpf', 'endereco'], function (err, result) {

        console.log('\nDados inseridos:');
        console.log('   nome: ' + result.nome);
        console.log('   cpf: ' + result.cpf);
        console.log('   endereco:' + result.endereco);

        let nome = result.nome;
        let cpf = result.cpf;
        let endereco = result.endereco;
        let id =0;
        let data = "|" + (id) + "|" + (nome) + "|" + (cpf) + "|" + (endereco) + "| \n"
        add(data);

        console.log('\n Deseja continuar? 1-para sim')
        prompt.get(['resposta'], function (err, result) {
            if (result.resposta == 1) {
                adicionar();
            }
        });
    });
}

function pegarUltimoId() {
    fs.readFileSync('lista.txt', function (err, data) {
        if (err) {
            console.error("Could not open file: %s", err);
            process.exit(1);
        }
        //
        var dados= data.toString('utf8');
        console.log(dados);
        //console.log(data.toString('utf8'));
    });

}
adicionar();
pegarUltimoId();