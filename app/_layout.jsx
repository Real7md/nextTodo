import { StyleSheet , useColorScheme  , Text , View } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
const colorScheme = useColorScheme()
const theme = Colors[colorScheme] ?? Colors.light

return (
<>
    <StatusBar value="auto" />
<Stack screenOptions={{
    headerStyle: { backgroundColor: theme.navBackground },
    headerTintColor : theme.title,
}}> 
    <Stack.Screen name="index" options={{ title:'Home'}}/>
    <Stack.Screen name="TList" options={{ title:'Task List'}}/>
    <Stack.Screen name="AE" options={{ title:'Add & Edit'}}/>
    <Stack.Screen name="contact" options={{ title:'Details'}}/> 
</Stack>
</>

)
}

export default RootLayout

const styles = StyleSheet.create({})