import express from 'express';
import cors from 'cors';
import { supabase } from './config/supabaseClient.js';

const app = express();
const PORT = 5000;

//   Middleware
app.use(cors());
app.use(express.json());

//   API Endpoint to fetch users
app.get('/api/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
});

//Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});