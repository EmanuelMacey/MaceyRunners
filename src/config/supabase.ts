
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

// Get Supabase credentials from multiple sources with fallbacks
const supabaseUrl = 
  Constants.expoConfig?.extra?.supabaseUrl || 
  process.env.EXPO_PUBLIC_SUPABASE_URL || 
  'https://sytixskkgfvjjjemmoav.supabase.co';

const supabaseAnonKey = 
  Constants.expoConfig?.extra?.supabaseAnonKey || 
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

console.log('🔧 Initializing Supabase client...');
console.log('📍 Supabase URL:', supabaseUrl);
console.log('🔑 Supabase Anon Key:', supabaseAnonKey ? '✅ Present' : '❌ Missing');

// Validate credentials
if (!supabaseUrl || supabaseUrl === 'undefined' || supabaseUrl === 'null') {
  console.error('❌ CRITICAL: Supabase URL is missing or invalid!');
  throw new Error('Supabase URL is required. Please check your .env file or app.json configuration.');
}

if (!supabaseAnonKey || supabaseAnonKey === 'undefined' || supabaseAnonKey === 'null') {
  console.error('❌ CRITICAL: Supabase Anon Key is missing or invalid!');
  throw new Error('Supabase Anon Key is required. Please check your .env file or app.json configuration.');
}

console.log('✅ Supabase credentials validated successfully');

// Create a custom storage adapter with enhanced error handling
const customStorage = {
  getItem: async (key: string): Promise<string | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      console.log(`📦 Storage GET: ${key} = ${value ? 'found' : 'not found'}`);
      return value;
    } catch (error) {
      console.error('❌ Error getting item from storage:', error);
      // Return null instead of throwing to prevent app crash
      return null;
    }
  },
  setItem: async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log(`📦 Storage SET: ${key}`);
    } catch (error) {
      console.error('❌ Error setting item in storage:', error);
      // Don't throw, just log the error
    }
  },
  removeItem: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`📦 Storage REMOVE: ${key}`);
    } catch (error) {
      console.error('❌ Error removing item from storage:', error);
      // Don't throw, just log the error
    }
  },
};

// Create Supabase client with error handling
let supabase;
try {
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      storage: customStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
    realtime: {
      params: {
        log_level: 'info',
      },
    },
  });
  console.log('✅ Supabase client created successfully');
} catch (error) {
  console.error('❌ CRITICAL: Failed to create Supabase client:', error);
  throw new Error(`Failed to initialize Supabase: ${error instanceof Error ? error.message : 'Unknown error'}`);
}

// Export the client
export { supabase };
