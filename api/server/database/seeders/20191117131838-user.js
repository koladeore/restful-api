export const up = (queryInterface) => queryInterface.bulkInsert(
  'Users',
  [
    {
      id: '122a0d86-8b78-4bb8-b28f-8e5f7811c456',
      name: 'Eden',
      username: 'favour',
      email: 'kingsley@gmail.com',
      password: 'password123',
      verified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '11fb0350-5b46-4ace-9a5b-e3b788167915',
      name: 'daniel',
      username: 'matthew',
      email: 'victor@gmail.com',
      password: 'password123',
      verified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  {}
);

export const down = (queryInterface) => queryInterface.bulkDelete('Users', null, {});
