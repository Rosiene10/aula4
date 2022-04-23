//Exemplo 05 | Descrição |
//`Fatorial`| Crie uma fu
//nção que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6 |

let array = [];
function fatorial(num) {
    for (i = 2; i<= num; i++) {
    array.push(i);
    }
    return array.reduce(function(a, b
 ) {
     return a* b;
})
};

console.log(fatorial(3));