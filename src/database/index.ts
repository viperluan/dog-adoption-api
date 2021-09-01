import { createConnection } from 'typeorm';

const connection = async () => {
  await createConnection();
  console.log('Connection with the database successfully! 💾');
};

connection();
