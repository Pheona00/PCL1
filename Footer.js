import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        Copyright © 2024 PCL. All rights reserved.
        Founder & Co-founder : Pheona O. Fabro, Cheramie D. Perocho and Loraine Kate A. Baslao 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    padding: 3,
    paddingBottom: 15,
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
});

export default Footer