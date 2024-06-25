import {StyleSheet, Text, View,ScrollView, StatusBar} from 'react-native';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import Transaction from './components/Transaction';
import ThemeChange from './components/themeChange';

export default function App(){
  

  
  return(
    
    <ScrollView style={styles.container}>
      <View>
      <Header />
      </View>
      <NavigationMenu />
      <Transaction />
      <ThemeChange />
    </ScrollView>
    
  )
}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    
  }
})

