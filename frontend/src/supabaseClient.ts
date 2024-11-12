// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lkfzpfsdbbafjhqeijpk.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZnpwZnNkYmJhZmpocWVpanBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5ODEzOTMsImV4cCI6MjA0NjU1NzM5M30.4pn848-sw9gIUa8Fo-SnXrKCoaoTAU8BMXp2T98O8iY'; 
export const supabase = createClient(supabaseUrl, supabaseKey);