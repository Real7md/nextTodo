import { StyleSheet, Text, View,TextInput, Button, FlatList , useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from "../constants/Colors";

const Contact = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View style={[styles.container ]}>
      <Text style={styles.title}>Task-List</Text>

<Link href= "/" style={styles.link}>Back to Home</Link>
<Link href="/AE" style={styles.link}>Add & Edit page</Link>
<Link href="/contact" style={styles.link}>Details page</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    },
  title :{
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
  },
    link:{
    marginVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
})