import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkaWJtenBmcXNkd2x5emdtdGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwNTA0NTksImV4cCI6MTk5NjYyNjQ1OX0.7BAwSgZzAf8bq-VwFURosKZlH4jqeq8HKjrBzEd-t-Y";
const SUPABASE_URL = "https://adibmzpfqsdwlyzgmtjf.supabase.co";

const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  return {
    supabase,
  };
};

export default useSupabase;
