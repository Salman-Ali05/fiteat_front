import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const BotMenu = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TrainHome')}>
                <Ionicons name="home" size={24} style={styles.iconsSelected} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Activities')}>
                <Ionicons name="barbell" size={24} color="#fff" style={styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="cart" size={24} color="#fff" style={styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Login')}>
                <Ionicons name="person" size={24} color="#fff" style={styles.icons}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#FFB340',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    navItem: {
        alignItems: 'center',
        justifyContent : 'center',
    },
    icons :{
        color:"#1E1E1E"
    },
    iconsSelected :{
        color:"#1E1E1E",
        borderRadius: 100,
        padding: 5,
        borderWidth : 2,
        borderBlockColor : "#1E1E1E",
    }
})

export default BotMenu