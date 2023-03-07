const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: 'Vinicius', avaliable: true},
    {name: 'Pedro', avaliable: false},
    {name: 'João', avaliable: false},
    {name: 'Eduardo', avaliable: true},
]

const avaliableUsers = users.filter((user) => user.avaliable)
const notAvaliableUsers = users.filter((user) => !user.avaliable)
console.log(avaliableUsers)
console.log(notAvaliableUsers)