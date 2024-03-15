import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import logo from '../assets/logo.png'
const Landing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View><Image source={logo} styles={styles.logoheader}/></View>
           <Text style={styles.title}>Let Get's Started </Text>
            <View style={styles.buttonsContainer}>
                <Button
                    icon="login"
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Login
                </Button>
                <Button
                    icon="account-plus"
                    mode="contained"
                    onPress={() => navigation.navigate('Registration')}
                    style={styles.signupButton}
                    labelStyle={styles.buttonLabel}
                >
                    Sign-up
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 5
       
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonsContainer: {
        width: '40%',
    },
    button: {
        marginTop: 1,
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: '#C4A484',
    },
    
    signupButton: {
        marginTop: 5,
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: '#765038',
    },
    buttonLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    logoheader: {
        height: 50,
        width: 50,
        flex: 1,
    }
});

export default Landing