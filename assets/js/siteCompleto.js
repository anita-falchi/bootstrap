/* 
javascript é case sensitive 

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementeByName()
por Classe: getElementeByClassName()
por Seletor: querySelector()
*/

let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    if (nome.value.length < 3) {
        nome.style.border = "3px solid darkorange"
    } else {
        nome.style.border = "3px solid green"
        nomeOk = true
    }

}

function validaEmail() {
    if (email.value.indexOf("@") == - 1 || email.value.indexOf(".") == - 1) {
        email.style.border = "3px solid darkorange"
    } else {
        email.style.border = "3px solid green"
        emailOk = true
    } Ï

}

function validaAssunto() {
    if (assunto.value.length <= 30) {
        assunto.style.border = "3px solid darkorange"
    } else {
        assunto.style.border = "3px solid green"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso :)")
    } else {
        alert("Preencha o formulário corretamente antes de enviar .-.")
    }
}


