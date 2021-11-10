const names = ["oi","ola", "ndsjdd", "sda", "sdd", "sds", 'dw', 'swdds']
console.table(names)

names.splice(2,1, "hello")
console.table(names)
names.splice(2,1)
console.table(names)
names.splice(2,0,"hdha")
console.table(names)