const url = 'https://my-json-server.typicode.com/singh233/JSON-Server'

// fetch products from url
export const getProducts = () => {
    return fetch(`${url}/products`).then(res => res.json())
}
