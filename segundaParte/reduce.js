const room1 = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const room2 = [6, 5, 8, 9, 5, 6]
const room3 = [7, 3.5, 8, 9.5]

function averageRoom(tasks){
    const plusTasks = tasks.reduce((save, current) =>  current + save,0)
    return plusTasks/tasks.length
}

console.log(averageRoom(room1))
console.log(averageRoom(room2))
console.log(averageRoom(room3))

const tasks = [10, 6.5, 8, 7]
const average = tasks.reduce((save, current) => current + save, 0)/tasks.length

console.log(average)