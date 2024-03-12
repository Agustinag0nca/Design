const products = [
{
    id:"1",
    name: "Diseño de Aplicación movil",
    price: 10.000,
    category: "Diseño",
    img: 'https://arrobasystem.com/cdn/shop/articles/diseno-web-todo-lo-que-debes-saber_1200x1200.jpg?v=1598655949',
    description:"Diseño de una Pagina Web",
},

{id: 2,
name:"Reparacion de errores web",
price: 30.000,
category: "reparación",
img:'https://www.dreamhost.com/blog/wp-content/uploads/2021/02/8ceddb98-ff01-4c7c-9ecb-4cbbff6387bc_How20to20Fix20the20Error20Establishing20Database20Connection20opt-730x470.jpg' },

{id:3,
title : "Maquetacion web",
category:"Creacion de Pagina Web",
price: 50.000,
img: 'https://blog.sinapsis.agency/wp-content/uploads/2022/01/web-design-online-technology-content-concept-1000x580.jpg'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
                    resolve(products);
                }, 2000)
            });
}

export const getProductById= (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
                    resolve(products.find(product => product.id === productId));
                }, 2000)
            })
        
}