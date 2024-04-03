
function Contar(){
    var tela = document.getElementById('output')
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value 
    var passo = document.getElementById('passo').value
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        //verificacao de erro
        tela.innerText = `Impossivel contar!`
    }
    else{
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
    if(passo == 0){
        alert('Passo inválido! Considerando PASSO 1')
         passo = 1
    }
    tela.innerText = " "
    if(inicio < fim){
        tela.innerHTML += 'Contando: </br>'
        for(inicio; inicio <= fim; inicio+=passo)
        {
            tela.innerHTML += ` \u{f0a4} ${inicio} `
        }   
    }
        else{
            tela.innerHTML += 'Contando: </br>'
            for(inicio; inicio >= fim; inicio-=passo){
                tela.innerHTML += ` \u{f0a4} ${inicio} `
              }
        }
        tela.innerHTML += `\u{f0a4} \u{1F3c1}` 
    } 
      
         
}
           
    
    
    
