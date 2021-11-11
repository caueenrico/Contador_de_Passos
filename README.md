# Contador_de_Passos
<h1>Contador de Passos</h1>
<p>Teste o projeto na sua maquina, clicando neste link: https://caueenrico.github.io/Contador_de_Passos/</p>
<p>Neste projeto foi desenvolvido após algumas aulas gratuitas do CURSO EM VIDEO focado em JavaScript. Com o intuito de aplicar minhas habilidades utilizando<br>
   estruturas de repetições com testes Lógicos
</p>

```
 if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        window.alert('[ERRO] Digite os valores dentro de todos os campos')
    }else{
        res.innerHTML = `Contando: `
        
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        
        if(i < f){ //ordem crescente
            for(var c = i ; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F4CD} `
            }
        }else{//ordem decresente
            for (var c = i; c>= f; c -= p)
            res.innerHTML += ` ${c} \u{1F4CD}`
        }res.innerHTML += `\u{26D4}`
    }
```

<h2>funcionamento do Projeto</h2>

<img src="https://github.com/caueenrico/Contador_de_Passos/blob/main/Anima%C3%A7%C3%A3o.gif">
