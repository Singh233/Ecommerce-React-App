const url = 'https://my-json-server.typicode.com/singh233/JSON-Server'

// fetch products from url
export const getProducts = async () => {
    const res = await fetch(`${url}/products`)
    return await res.json()
}

// post product to url
export const postProduct = async (product) => {
    const res = await fetch(`${url}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    return await res.json()
}
