// 1. Crie um array chamado numbers com os valores [10, 20, 30, 40, 50].
let numbers = [10, 20, 30, 40, 50]
console.log("Array:", numbers)

// 2. Use o método .push() para adicionar o número 60 ao final do array e imprima o array atualizado no console.
numbers.push(60)
console.log("Após adicionar 60:", numbers)

// 3. Utilize o método .pop() para remover o último elemento do array e imprima o resultado no console.
numbers.pop()
console.log("Após remover o último elemento:", numbers)

// 4. Use o método .indexOf() para encontrar a posição do número 30 e imprima essa posição no console.
let index = numbers.indexOf(30);
console.log("Posição do número 30:", index)