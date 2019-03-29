export const products = [
    {
        id: 'product-1',
        name: 'Broccoli',
        price: '80'
    },
    {
        id: 'product-2',
        name: 'Apples',
        price: '45'
    },
    {
        id: 'product-3',
        name: 'Bananas',
        price: '30'
    },
    {
        id: 'product-4',
        name: 'Oranges',
        price: '120'
    },
    {
        id: 'product-5',
        name: 'Carrots',
        price: '38'
    },
    {
        id: 'product-6',
        name: 'Pineapple',
        price: '49'
    }
].map((product, i) => {
    return ({
        ...product,
        imgSrc: `https://picsum.photos/150?random${i}`
    })
} )
