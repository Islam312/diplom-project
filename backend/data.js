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
      countInStoke: 12,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
      tags: ['suit', 'classic suit'],
    },
    {
      name: 'T-Shirt',
      category: 'Shirts',
      image: '/images/s2.jpg',
      price: 40,
      brand: 'Reda',
      rating: 4.5,
      numReviews: 10,
      countInStoke: 10,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
      tags: ['suit', 'classic suit'],
    },
    {
      name: 'Slim Shirt',
      category: 'Shirts',
      image: '/images/s3.jpg',
      price: 150,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStoke: 10,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
      tags: ['suit', 'classic suit'],
    },
    {
      name: 'Shirts',
      category: 'Shirts',
      image: '/images/s4.jpg',
      price: 20,
      brand: 'Adidas',
      rating: 5,
      numReviews: 10,
      countInStoke: 10,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
      tags: ['suit', 'classic suit'],
    },
    {
      name: 'T-Shirts',
      category: 'classic suit',
      image: '/images/s5.jpg',
      price: 22,
      brand: 'Lacoste',
      rating: 4.5,
      numReviews: 10,
      countInStoke: 6,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
      tags: ['suit', 'classic suit'],
    },
    {
      name: 'T-Shirts',
      category: 'classic suit',
      image: '/images/s6.jpg',
      price: 28,
      brand: 'Lacoste',
      rating: 4.5,
      numReviews: 10,
      countInStoke: 15,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
      tags: ['suit', 'classic suit'],
    },
    {
      name: 'T-Shirts',
      category: 'classic suit',
      image: '/images/s7.jpg',
      price: 32,
      brand: 'Lacoste',
      rating: 4.5,
      numReviews: 10,
      countInStoke: 8,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
      tags: ['suit', 'classic suit'],
    },
    {
      name: 'Slim Shirt',
      category: 'Shirts',
      image: '/images/s2.jpg',
      price: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStoke: 20,
      description:
        'Lorem ipsum dolor sit amet, ex usu deserunt inciderint, quis accusam accusamus ea nec. Duo placerat mandamus ne, per eu tollit salutatus vituperata. Vix partem quaestio assueverit an.',
      tags: ['suit', 'classic suit'],
    },
  ],
};

export default data;
