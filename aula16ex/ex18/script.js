
     var vet = [] 
     var resultado = document.getElementById('outputRsultado')
     
function Adicionar(){
     resultado.innerText = ''
     var numero = document.getElementById('numero').value
     numero = Number(numero)
     if(numero < 1 || numero > 100){
          alert('Valor inválido: Digite valores entre 1 e 100')
     }else{
          if(validador(numero) == true){ // chamada para validador
               alert('Valor inválido ou ja encontrado na lista')
          }else{
               var cont = vet.length
               vet[cont] = numero
               var ValoresOutput = document.getElementById('ValoresOutput')
          
               let opcao = document.createElement('option')
               opcao.text = `Valor ${numero} adicionado.`
               ValoresOutput.appendChild(opcao)

          }   

     }
    
}
function validador(x){ // verificar se existe numeros iguais no vetor array
     cont = vet.length
     for(cont; cont >= 0; cont--){
          if(x == vet[cont]){
               return true
          }
     }
}

function Finalizar(){ //faz a varredura no vetor para trazer os resultados finais
     
     if(vet.length == 0){
          alert('Adicione valores antes de finalizar!')
     }else{
          resultado.innerText = ""
          vet.sort()
          var soma = 0
          var max = 0
          var menor = vet[0]
          for(c = 0; c < vet.length; c++){  
              soma += vet[c]
              if(max < vet[c]){
               temp = max
               max = vet[c]
            } 
           }
             menor=vet[0]
            for(c = 0; c < vet.length; c++){    
             if(menor > vet[c]){
                temp = menor
                menor = vet[c]
            } 
         }
           
           var media = soma/vet.length
           resultado.innerHTML += `<br> Ao todo, temos ${vet.length} números cadastrados. </br>`  
           resultado.innerHTML += `<br> O maior número informado foi ${max}. </br>`
           resultado.innerHTML += `<br> O menor número informado foi ${menor}. </br>`
           resultado.innerHTML += `<br> Somando todos os valores, temos ${soma}.</br>` 
           resultado.innerHTML += `<br> A média dos valores digitadas, é ${media}.</br>`
     }

}





     
    





/*
1º Validacao de numeros entre 1 e 100*
2º Validacao não permitir numeros ja adicionados*
3º validação não permitir um campo vazio*

3.1 mostrar na tela quantidade de numeros cadrastrados,*
3.2 informar o maior numero,*
3.3 informar o menor numero,* 
3.4 somar todos os valores cadastrados,* 
3.5 informar a media de dos valores cadastrados*
4º quando inserir um novo valor sumir tela com os valores totais*
5º Não permitir finalizar com a tabela(array/vetor) vazia
*/