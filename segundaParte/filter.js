const names = ["Renan", "Luany", "Nunes"]
const task = [10,4.5,7.5]

const fail = names.filter( (_,indice) => task[indice] < 5)
console.log(fail)