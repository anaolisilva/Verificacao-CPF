//Escrito por Ana Oliveira Silva - 14/08/21

function validacao() {
    let cpf = document.getElementById('cpf').value

    let resultValidacao
    let dv1
    let dv2
    let verificadorDv1
    let verificadorDv2

    if (cpf.length != 11){
        resultValidacao = false
    } else {

        let cpfCopia = cpf
    
        resultValidacao
    
        dv2 = cpf % 10
        dv1 = parseInt((cpf % 100)/10)
    
        //com substring:
        // dvs = cpf.substring(0,9)
    
        let intermediario
        let soma = 0
        let j = 1 //j é o número do dígito
    
        for (let i = 10; i >= 2; i--) {
            intermediario = parseInt(cpfCopia / Math.pow(10, i))
            cpfCopia = cpfCopia - (intermediario * Math.pow(10, i))
            intermediario = intermediario * j
            soma = soma + intermediario
            j++
        }
    
        verificadorDv1 = soma % 11
    
        if (verificadorDv1 == 10){
            verificadorDv1 = 0
        }
    
        soma = 0
        j = 0
        cpfCopia = cpf
    
        for (let i = 10; i >= 2; i--) {
            intermediario = parseInt(cpfCopia / Math.pow(10, i))
            cpfCopia = cpfCopia - (intermediario * Math.pow(10, i))
            intermediario = intermediario * j
            soma = soma + intermediario
            j++
        }
    
        soma = soma + (verificadorDv1 * 9)
        verificadorDv2 = soma % 11
    
        if (verificadorDv2 == 10){
            verificadorDv2 = 0
        }
    }


    if (verificadorDv1 == dv1 && verificadorDv2 == dv2) {
        resultValidacao = true
    } else {
        resultValidacao = false
    }

    if (resultValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('fail').style.display = 'block';
    }
}