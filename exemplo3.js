//Tabuada` | Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. |

function fazTabuada(n) {
    let x = 0 
    
    do {
        x++,
        mult = x * n,
        console.log(`${n} x ${x} é ${mult}`)
    }
        while (x < 10)

        
    }
    console.log(fazTabuada(6))