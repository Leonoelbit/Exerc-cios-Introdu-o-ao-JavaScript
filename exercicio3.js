
// 1. Crie uma variável phrase com o valor "JavaScript is fun!".
let phrase = "JavaScript is fun!"

// 2. Use um loop for para imprimir cada caractere de phrase individualmente no console.
for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i])
}

// 3. Crie uma variável counter para contar quantas vezes a letra 'a' aparece em phrase e imprima esse valor ao final do loop.
let counter = 0
for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === 'a') {
        counter++
    }
}
console.log("Número de vezes que a letra 'a' aparece:", counter);

// 4. Utilize um loop while que imprime números de 1 a 10 no console.
let number = 1
while (number <= 10) {
    console.log(number)
    number++;
}