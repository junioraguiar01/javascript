function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var d = new Date()
    var hora = d.getHours()

    msg.innerText = 'Agora são ' +hora+ ' horas'
    if(hora >= 0 && hora < 12){
        
        msg.innerText += ' da manha'
        document.body.style.background = '#fbe67b'
        img.src = 'dia.jpg'
    }
    else if(hora >= 12 && hora <= 18){
        msg.innerText += ' da tarde'
        document.body.style.background = '#6e89a6'
        img.src = 'tarde.jpg'
    }
    else {
        msg.innerText += ' da noite'
        document.body.style.background = '#442922'
        img.src = 'noite.jpg'
    }
   
}