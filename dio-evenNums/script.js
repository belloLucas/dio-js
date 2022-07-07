let pi = [];

/* While para captar inputs do usuário e armazená-los em uma array */

while(true){
    let input = prompt("Digite seus valores: ");
    if(input === "q" || input === null){
        break;
    }
    pi.push(Number(input));
}

/* Função responsável pela lógica da diferenciação entre par e impar */

function returnEvens(pi) {
    let nums = [];
    for(let i = 0; i < pi.length; i++){
        if(pi[i] % 2 === 0){
            nums.push(pi[i]);
        }
        else{
            console.log("Os números impares são: ", `${pi[i]}`);
        }
    }
    console.log("Os números pares são: ", nums);
}

returnEvens(pi);