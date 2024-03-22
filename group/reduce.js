const array = [1, 2, 3, 4, 5]

const reduce = (ar) => ar.reduce( (ret, item) => {
    return ret + item
})

console.log(reduce(array))
