function verificador(){
    var anoAtual = new Date()
    anoAtual = anoAtual.getFullYear()
    var AnoNascimento = document.getElementById('AnoNascimento').value
    var tela = document.getElementById('resultadoTela')
    var idadeAtual = anoAtual - AnoNascimento
    sexo = document.querySelector('input[name="sexo"]:checked')
    foto = document.getElementById('foto')
    if(AnoNascimento.length > 0 && AnoNascimento < anoAtual && sexo != null)
    {
        sexo = sexo.value
        if(sexo == 'M')
        {
            sexo = 'Homem'
            foto.src = '/aula12/homemJovem.jpg'
        }
        else if(idadeAtual < 50 && sexo == 'F'){
            sexo = 'Mulher'
            foto.src = '/aula12/mulherJovem.jpg'
        }
        else{
            sexo = 'Mulher'
            foto.src = '/aula12/mulheridosa.jpg' 
        }
        tela.innerHTML = `<strong>Detectamos ${sexo} com ${idadeAtual} anos</strong>`                 
    }
   else
   {
    alert('[ERRO] dados inválidos')
   }

}

