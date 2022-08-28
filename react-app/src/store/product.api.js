const data = {
  products: [
    {
      id: 10,
      name: 'Strawberries',
      description: '16oz package of fresh organic strawberries',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Sliced bread',
      description: 'Loaf of fresh sliced sourdough bread',
      quantity: 2,
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
    },
    {
      id: 40,
      name: 'Ice Cream',
      description: 'Chocolate and peanut ice cream',
      quantity: 1,
    },
    {
      id: 50,
      name: 'Potatoes',
      description: 'Bag of 5lb',
      quantity: 1,
    },   
  ],
};

export const loadProductsApi = async () => {
  return data.products;
};
