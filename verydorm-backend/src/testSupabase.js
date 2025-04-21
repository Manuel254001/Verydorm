import { supabase } from './config/supabaseClient.js';

const testSupabase = async () => {
  const { data, error } = await supabase.from('users').select('*'); // Replace 'users' with any table name
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data fetched successfully:', data);
  }
};

testSupabase();