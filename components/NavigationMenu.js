
import React from 'react';
import { View, Button, StyleSheet,Text, Image } from 'react-native';

const NavigationMenu = () => {
  return (
    <View style={styles.navMenu}>
    <View style={styles.cover}>
          <View style={styles.menuOptions}>
            <Image 
              source={require('../send.png')}
              style={styles.menu}
            />
          </View>
            <Text> Sent</Text>
        </View>

        <View>
          <View style={styles.menuOptions}>
            <Image 
              source={require('../recieve.png')}
              style={styles.menu}
            /> 
          </View> 
            <Text>Recieve</Text>
        </View>

        <View>
          <View style={styles.menuOptions}>
            <Image
              source={require('../loan.png')}
              style={styles.menu}
            />
          </View>
          <Text>Loan</Text>
        </View>

        <View>
          <View style={styles.menuOptions}>
            <Image 
              source={require('../topUp.png')}
              style={styles.menu}
            />
          </View> 
          <Text>TopUp</Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  navMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  menuOptions: {
    flex: 1,
    
  },
  menu: {
    flex: 1,
    resizeMode: 'contain',
    width: 50,
    height: 50,
    overflow: 'hidden',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#2222',
    
  }
});

export default NavigationMenu;
