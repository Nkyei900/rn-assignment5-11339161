import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';


const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.settingsView}>
        <Text style={styles.settingsTexts}>Settings</Text>
      </View>
      
        
      <TouchableOpacity style={styles.buttonView}>
        <View style={styles.arrowView}>
          <Text style={styles.buttons}>Language</Text>
          <Text style={styles.arrow}>></Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView}>
        <View style={styles.arrowView}>
          <Text style={styles.buttons}>My Profile</Text>
           <Text style={styles.arrow}>></Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView}>
        <View style={styles.arrowView}>
          <Text style={styles.buttons}>Contact Us</Text>
          <Text style={styles.arrow}>></Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView}>
        <View style={styles.arrowView}>
          <Text style={styles.buttons}>Change Password </Text>
          <Text style={styles.arrow}>></Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView}>
        <View style={styles.arrowView}>
          <Text style={styles.buttons}>Privacy Policy</Text>
          <Text style={styles.arrow}>></Text>
        </View>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'ffff',
  },
  settingsView: {
    flex: 1,
    
  },
  arrowView: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  arrow: {
    fontSize: 30,
  },
  settingsTexts: {
    fontSize: 30,
    fontFamily: 'San-serif',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttons: {
    padding: 20,
    fontSize: 17,
    fontFamily: 'Sans-serif'
  },
  buttonView: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomColor: 'grey',
    
  }

});
export default Settings;