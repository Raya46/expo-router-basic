import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";

export default function Setting() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setdata(response.data);
  };

  const { name, password } = useLocalSearchParams();
  return (
    <ScrollView>
      <Text>Setting</Text>
      <Text>{name}</Text>
      <Text>{password}</Text>
      {data.map((item, index) => (
        <Text key={index}>{item.title}</Text>
      ))}
    </ScrollView>
  );
}
