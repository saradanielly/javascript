function carregar() {
 var msg = window.document.getElementById(`msg`)
var img = window.document.getElementById(`imagem`)   
var data = new Date()
// var hora = data.getHours()
var hora = 22
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    // BOM DIA!
    img.src = 'foto manha.png'
    document.body.style.background = '#71c0f8'
} else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = 'foto tarde.png'
    document.body.style.background = '#fbe806'
} else {
    // BOA NOITE!
    img.src = 'foto noite.png'
    document.body.style.background = '#a081bc'
}
}
