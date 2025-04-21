import 'dotenv/config';
import pkg from 'pg';
const { Client } = pkg;

const databaseUrl = process.env.SUPABASE_DATABASE_URL;

const client = new Client({
  connectionString: databaseUrl,
});

const createTables = async () => {
  try {
    await client.connect();

    //Users Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'seeker',
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    //    Properties Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS properties (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        price NUMERIC NOT NULL,
        location VARCHAR(255) NOT NULL,
        owner_id INT REFERENCES users(id),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log('Tables created successfully!');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    await client.end();
  }
};

const testConnection = async () => {
  try {
    await client.connect();
    console.log('Database connection successful!');
  } catch (error) {
    console.error('Database connection failed:', error);
  } finally {
    await client.end();
  }
};

testConnection();

createTables();