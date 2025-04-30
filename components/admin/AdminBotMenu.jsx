import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const BotMenu = () => {
    const navigation = useNavigation();
    const route = useRoute();

    // Définition des onglets et de leurs routes
    const tabs = [
        { name: 'Adm_Home', icon: 'home' },
        { name: 'Logout', icon: 'log-out' },
    ];

    return (
        <View style={styles.navBar}>
            {tabs.map((tab) => {
                const isSelected = route.name === tab.name;

                return (
                    <TouchableOpacity
                        key={tab.name}
                        style={[styles.navItem, isSelected && styles.navItemSelected]}
                        onPress={() => navigation.navigate(tab.name)}
                    >
                        <View style={[styles.iconWrapper, isSelected && styles.iconWrapperSelected]}>
                            <Ionicons
                                name={tab.icon}
                                size={isSelected ? 22 : 20} // Taille plus petite pour un menu compact
                                style={[styles.icons, isSelected && styles.iconsSelected]}
                            />
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 55, // Réduit la hauteur du menu
        backgroundColor: '#FFB340',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 10, // Ajoute un peu d'espace
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    navItemSelected: {
        transform: [{ translateY: -30 }], 
    },
    iconWrapper: {
        backgroundColor: 'transparent',
        borderRadius: 30,
        padding: 6, 
    },
    iconWrapperSelected: {
        backgroundColor: '#FFB340',
        borderRadius: 30,
        padding: 8, 
        borderWidth: 2,
        borderColor: "#FFB340",
    },
    icons: {
        color: "#1E1E1E",
    },
    iconsSelected: {
        color: "#1E1E1E",
    },
});

export default BotMenu;
