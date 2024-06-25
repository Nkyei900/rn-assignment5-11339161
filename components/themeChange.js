import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';

const ThemeChange = () => {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; 
    setTheme(newTheme);
  };

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
      <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
        <Text style={styles.toggleText}>{theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  darkContainer: {
    backgroundColor: '#333', 
  },
  toggleButton: {
    backgroundColor: '#3498db', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  toggleText: {
    color: '#fff', 
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ThemeChange;
