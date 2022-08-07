async function newProduct(e) {
    e.preventDefault()
    const { name, amout, price, min_amout } = document.querySelector('form#newProduct')
    console.log(name.value, amout.value, price.value, min_amout.value)

    const newProduct = await axios.post("/products", {
        name: name.value,
        amout: amout.value,
        price: price.value,
        min_amout: min_amout.value
    })

    console.log(newProduct)
}

$("form#newProduct").submit(newProduct)