import React from 'react'
import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/LIGHT.png";
import { Link } from "expo-router";

//themed components
import { ThemedView } from "../components/ThemedView";
const index = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title} title={true}>
        Todo list app
      </Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        Home page of the app
      </Text>
      <Link href="/TList" style={styles.link}>
        Task-List page
      </Link>
    </ThemedView>
  )
}

export default index
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 50,
  },
  img: {
    marginVertical: 20,
    width: 150,
    height: 200,
  },
  link: {
    marginVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
});