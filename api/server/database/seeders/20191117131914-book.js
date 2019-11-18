const userId1 = '122a0d86-8b78-4bb8-b28f-8e5f7811c456';
const userId2 = '11fb0350-5b46-4ace-9a5b-e3b788167915';

export const up = (queryInterface) => queryInterface.bulkInsert(
  'Books',
  [
    {
      id: 'd54d5aaa-f843-4cb1-b725-8cf6b9ea1a39',
      userId: userId1,
      title: 'leadership',
      author: 'david oyedepo',
      description: 'book that give insight on leadership',
      quantity: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '8bd8c0ec-3b50-4228-bb71-e617c7b8d3b5',
      userId: userId1,
      title: 'grace',
      author: 'samuel victor',
      description: 'book that give insight on grace',
      quantity: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '8487ef08-2ac2-4387-8bd6-738b12c75dff',
      userId: userId2,
      title: 'empowerment',
      author: 'moses ode',
      description: 'book that give insight on empowerment',
      quantity: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  {}
);

export const down = (queryInterface) => queryInterface.bulkDelete('Users', null, {});
