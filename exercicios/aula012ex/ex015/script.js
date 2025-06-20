function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os Dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            }
           else if (idade < 21){
                    //jovem
                    img.setAttribute('src', 'imagens/homem.png')
            }
            else if (idade < 50) {
                //
                img.setAttribute('src', 'imagens/homem.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'imagens/homem.png')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
              if (idade >=0 && idade < 10) {
                //criança
            }
                else if (idade < 21){
                    //jovem
            }
            else if (idade < 50) {
                //Adulto
            }
            else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Você tem '+idade+ ' Anos. você é '+gênero
    }
}