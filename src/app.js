document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Kopi Hitam', img: 'kopi-hitam-p.jpg', price: 7000 },
            { id: 2, name: 'Matcha Greentea Prafe', img: 'matcha-p.jpg', price: 17000 },
            { id: 3, name: 'Milkshake oreo blends Coklat dan Vanila', img: 'unggulan.png', price: 17000 },
            { id: 4, name: 'Cappucino Cincau Blends', img: 'cappucino-cincau-p.png', price: 17000 },
            { id: 5, name: 'Es Teh Manis', img: 'es-teh-p.png', price: 7000 },
            { id: 6, name: 'Es Jeruk Segar', img: 'es-jeruk-p.png', price: 10000 },
            { id: 7, name: 'Milo Blends', img: 'milo-p.png', price: 17000 },
            { id: 8, name: 'Caramel Machiato', img: 'caramel-p.png', price: 20000 },
            { id: 9, name: 'Coklat Original', img: 'chocolate-p.png', price: 15000 },
            { id: 10, name: 'Teh Tarik Blends', img: 'teh-tarik-p.png', price: 17000 },
            { id: 11, name: 'Hot Cappucino', img: 'hot-cappucino-p.jpg', price: 10000 },
            { id: 12, name: 'Thai Tea', img: 'thai-tea-p.png', price: 15000 },
            { id: 13, name: 'Lemon Tea', img: 'lemon-tea-p.png', price: 17000 },
            { id: 14, name: 'Red Velvet', img: 'red-velvet-p.png', price: 12000 },
            { id: 15, name: 'Pop Ice Blends', img: 'pop-ice-p.png', price: 12000 },
            { id: 16, name: 'Soda Susu Ceria', img: 'soda-p.png', price: 17000 },
            { id: 17, name: 'Nutrisari Salju Blends', img: 'nutrisari-p.png', price: 15000 },
            { id: 18, name: 'Josua', img: 'extrajoss-p.png', price: 10000 },

        ],


       
    }));
});