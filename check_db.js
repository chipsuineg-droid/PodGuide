const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Read env manually since dotenv isn't installed natively
const envFile = fs.readFileSync('.env.local', 'utf8');
const supabaseUrl = envFile.match(/NEXT_PUBLIC_SUPABASE_URL=(.*)/)[1].trim();
const supabaseKey = envFile.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.*)/)[1].trim();

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDatabase() {
  try {
    const { data, error } = await supabase.from('student_profiles').select('*').limit(1);
    
    if (error) {
      console.error("Database connection failed or table missing:", error.message);
      process.exit(1);
    }
    
    console.log("SUCCESS: Database is ready and 'student_profiles' table exists!");
  } catch (err) {
    console.error("Unexpected error:", err);
    process.exit(1);
  }
}

checkDatabase();
