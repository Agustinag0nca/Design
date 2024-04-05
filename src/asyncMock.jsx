const products = [
    {
        id: "1",
        name: "Diseño de Aplicación móvil",
        price: 10000,
        category: "Diseño",
        img: 'https://arrobasystem.com/cdn/shop/articles/diseno-web-todo-lo-que-debes-saber_1200x1200.jpg?v=1598655949',
        description: "Diseño de una Página Web",
    },
    {
        id: "2",
        name: "Reparación de errores web",
        price: 30000,
        category: "Reparación",
        img: 'https://www.dreamhost.com/blog/wp-content/uploads/2021/02/8ceddb98-ff01-4c7c-9ecb-4cbbff6387bc_How20to20Fix20the20Error20Establishing20Database20Connection20opt-730x470.jpg',
    },
    {
        id: "3",
        name: "Maquetación web",
        price: 50000,
        category: "Creación de Página Web",
        img: 'https://blog.sinapsis.agency/wp-content/uploads/2022/01/web-design-online-technology-content-concept-1000x580.jpg',
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId));
        }, 2000);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === category));
        }, 2000);
    });
};
