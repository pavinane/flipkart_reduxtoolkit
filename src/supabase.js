import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://oebsyntapcebemikfcgk.supabase.co',
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lYnN5bnRhcGNlYmVtaWtmY2drIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODg2NDY0OSwiZXhwIjoyMDE0NDQwNjQ5fQ.iLlCw82wrDXLDvqwz0QZuHXYkeVWGbw_MbKKWofqRvM"
);
export default supabase