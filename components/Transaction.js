
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const transactions = [
  { amount: '-$5,99', description: 'Apple Store', image: require('../apple.png') },
  { amount: '- $12,99', description: 'Spotify', image: require('../spotify.png') },
  { amount: '- $300', description: 'Money Transfer', image: require('../moneyTransfer.png') },
  { amount: '- $88', description: 'Grocery', image: require('../grocery.png') },
  
];

const TransactionList = () => {
  return (
      
    <View style={styles.transactionList}>
    
      <View style={styles.cover}>
        <Text style={{fontFamily: 'sans-serif',fontWeight: 'bold', fontSize: 15, }}> Transaction</Text>
        <TouchableOpacity style={styles.seeAll}> See all</TouchableOpacity>
      </View>

      {transactions.map((transaction, index) => (
        <View key={index} style={styles.transaction}>
          <Image source={transaction.image} style={styles.transactionImage} />
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionAmount}>{transaction.amount}</Text>
            <Text style={styles.transactionDescription}>{transaction.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  transactionList: {
    padding: 20,
  },
  cover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAll: {
    color: 'blue',
    fontFamily: 'sans-serif'
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionImage: {
    width: 20,
    resizeMode: 'contain',
    height: 20,
    marginTop: 20,
    marginRight: 20,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  transactionDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default TransactionList;
