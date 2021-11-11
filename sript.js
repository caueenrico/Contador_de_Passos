function verificar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passos = document.getElementById('txtpassos')
    var res = document.getElementById('res')
    
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
}
