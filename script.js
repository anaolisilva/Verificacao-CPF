//Escrito por Ana Oliveira Silva - 14/08/21
//Explorando melhor funções nativas do JavaScript.

function validacao() {

    let cpf = document.getElementById('cpf').value

    document.getElementById('success').style.display = 'none';
    document.getElementById('fail').style.display = 'none';

    resultValidacao = validaCPF(cpf)
    
    if (resultValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('fail').style.display = 'block';
    }
}

function validaCPF(cpf) {

    if (cpf.length != 11){
        return false
    }

    let dv1
    let dv2
    let verificadorDv1
    let verificadorDv2
    let cpfNumeros = cpf.substring(0,9) //Pega incluindo a posição 0 e excluindo a 9 (vai até a 8)
    console.log(cpfNumeros)
    
    dv2 = cpf.charAt(10)
    dv1 = cpf.charAt(9)
    console.log(dv1)
    console.log(dv2)

    let soma = 0

    for (let i = 10; i >= 2; i--) {
        soma += cpfNumeros.charAt(10 - i) * (11 - i)
    }
    
    //operador ternário
    verificadorDv1 = (soma % 11) == 10 ? 0 : soma % 11
    

    soma = 0

    for (let i = 10; i >= 2; i--) {
        soma += cpfNumeros.charAt(10 - i) * (10 - i)
    }

    soma = soma + (verificadorDv1 * 9)
    verificadorDv2 = (soma % 11) == 10 ? 0 : soma % 11

    if (verificadorDv1 == dv1 && verificadorDv2 == dv2) {
        return true
    } else {
        return false
    }
    
}
