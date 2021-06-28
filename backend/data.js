import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Islam',
      email: 'alyshbekov96@gmail.com',
      password: bcrypt.hashSync('123', 8),
      isAdmin: true,
    },
    {
      name: 'Mike',
      email: 'Mike@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'HENDERSOn',
      category: 'classic suit',
      image: '/images/s1.jpg',
      price: 123,
      brand: 'HENDERSON',
      rating: 3.6,
      numReviews: 10,
      countInStock: 14,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
    },
    {
      name: 'T-Shirt',
      category: 'Shirts',
      image: '/images/s2.jpg',
      price: 40,
      brand: 'Reda',
      rating: 4.5,
      numReviews: 10,
      countInStock: 13,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
    },
    {
      name: 'Slim Shirt',
      category: 'Shirts',
      image: '/images/s3.jpg',
      price: 150,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock: 12,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
    },
    {
      name: 'Shirts',
      category: 'Shirts',
      image: '/images/s4.jpg',
      price: 20,
      brand: 'Adidas',
      rating: 5,
      numReviews: 10,
      countInStock: 11,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
    },
    {
      name: 'B-Shirts',
      category: 'classic suit',
      image: '/images/s5.jpg',
      price: 22,
      brand: 'Lacoste',
      rating: 4.5,
      numReviews: 10,
      countInStock: 6,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
    },
    {
      name: 'C-Shirts',
      category: 'classic suit',
      image: '/images/s6.jpg',
      price: 28,
      brand: 'Lacoste',
      rating: 4.5,
      numReviews: 10,
      countInStock: 15,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
    },
    {
      name: 'F-Shirts',
      category: 'classic suit',
      image: '/images/s7.jpg',
      price: 32,
      brand: 'Lacoste',
      rating: 4.5,
      numReviews: 10,
      countInStock: 9,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
    },
    {
      name: 'Dlim Shirt',
      category: 'Shirts',
      image: '/images/s2.jpg',
      price: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock: 10,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
    },
  ],
};

export default data;
