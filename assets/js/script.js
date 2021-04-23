let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome= document.querySelector("#txtNome")
    if(nome.value.length <3){
     txtNome.innerHTML = "Nome invalido"
     txtNome.style.color = "gray"

} 
else{
    txtNome.innerHTML = "ok"
    txtNome.style.color = "blue"
    nomeOk = true
}
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color ="gray"
    }
    else {
        txtEmail.innerHTML = "ok"
        txtEmail.style.color = "blue"
        emailOk = true

    }
}
function validaAssunto (){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "limite de caracter atingido "
        txtAssunto.style.color = "gray"
    }
    else{
        txtAssunto.innerHTML = "Você tem um limite de 100 caracter"
        txtAssunto.style.color = "blue"
        assuntoOk = true
    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true ){
        alert ("Formulario enviado com sucesso!")
    }
    else{
        alert("Preencha o formulario corretamente antes de enviar... ")
    }
}
function mapaZoom(){
 mapa.style.width = "800px"
 mapa.style.heigth = "600px"

}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.heigth = "300px"
    
}