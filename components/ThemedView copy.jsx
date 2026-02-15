import { View , useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

  const ThemedView = ({ style , children}) => {
    const colorScheme = useColorScheme()
    const theme = Colors [colorScheme] ?? Colors.light

  return (
    <View
    style = {[{backgroundColor : theme.background}, style ]}>
    {children}
  </View>
  )
}

export default ThemedView