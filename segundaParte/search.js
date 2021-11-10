const room1 = ["ola", "salve", "eai"]

const numbers = [10,02,32]

let array2D = [room1, numbers]

const showItem = (item) => {
    if(array2D[0].includes(item)){
        let indice = array2D[0].indexOf(item)
        return array2D[0][indice] + " " + array2D[1][indice]
    } else {
        return "nem tem"
    }
}

console.log(showItem("ol"))