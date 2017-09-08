const users = [
  {
    id: 'd75c6e1d-243b-4825-a48c-740eb164f04e',
    name: 'Brandon',
  },
  {
    id: '13b5ce44-7b7c-4e5d-aa9f-4e20d55da302',
    name: 'Chris',
  },
  {
    id: 'd40a8038-eac8-46e8-a3c2-caeff6fb78d4',
    name: 'Danielle',
  },
  {
    id: '6541ef3b-6f3a-4b06-b845-f57857086d1c',
    name: 'George',
  },
  {
    id: 'fd732187-2718-431d-a640-b6bdc0f961ac',
    name: 'Matt',
  },
];

const User = {
  findAll() {
    return users;
  },

  findById(id) {
    return users.find(user => user.id === id);
  },
};

export default User;
