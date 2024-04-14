import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import logo from '../assets/logo.png';
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
             <View><Image source={logo} styles={styles.logoheader}/></View>
           <Text style={styles.title}>Welcome to PCL!</Text>
            <View style={styles.buttonsContainer}>
                <Button
                    icon="logout"
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Logout
                </Button>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'black'
    },
    buttonsContainer: {
        width: '60%'
    },
    button: {
        marginTop: 10,
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: '#C4A484'
    },
    buttonLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },
});

export default Home