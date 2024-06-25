import {StyleSheet, Text, View, Image} from 'react-native';


const Header = () =>  {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <Image 
        source={require('../profile.png')}
        style={styles.image}
        /> 
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.boldName}> Nana Kyei</Text>
        </View>
       <Image 
        source={require('../search.png')}
        style={styles.searchimage}
        />
        
      </View>
      <View style={styles.cardView}>
        <Image 
          source={require('../Card.png')}
          style={styles.cardImage}
      />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boldName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between'
  },
  searchimage: {
    padding: 15,
    overflow: 'hidden',
    borderRadius: 10,
    width: 20,
    heigh: 10,
    backgroundColor: '#3333',
  },
  welcomeText: {
    marginRight: 100 ,
  },
  cardView: {
    flex: 1,
    
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  cardImage: {
    
    resizeMode: 'contain',
    height: 160,
    width: 500,
  }
});
export default Header;