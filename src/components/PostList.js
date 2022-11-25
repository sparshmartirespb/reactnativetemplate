import React, { Component,useEffect,useState } from 'react'
import { TouchableOpacity, Text, View, ScrollView } from 'react-native'
import { createClient } from "@supabase/supabase-js";
import { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostList = () => {
  const [, setLoading] = useState(false);
  const [text, setText] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const supabaseUrl = NEXT_PUBLIC_SUPABASE_URL ;
    const supabaseKey = NEXT_PUBLIC_SUPABASE_ANON_KEY ;
    const options = {
      auth: {
        storage: AsyncStorage,
      },
    }
    const supabase= createClient(supabaseUrl, supabaseKey, options);
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("dummy")
        .select("id, text");
      if (error && status !== 406) {
        throw new Error("error");
      }

      if (data) {
        console.log(data)
        setText(data);
      }
    } catch (error) {
      throw new Error("error");
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <ScrollView>
      <Text>{text[0]?.text}</Text>
    </ScrollView>
  )
}

export default PostList
