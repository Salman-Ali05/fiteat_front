import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const TopMenu = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const isOrdersActive = route.name === 'OrdersHome';
    const isTrainingActive = route.name === 'TrainHome';

    return (
        <View style={styles.buttonRow}>
            <TouchableOpacity
                style={[styles.button, styles.secondaryButton, isTrainingActive && styles.activeButton]}
                onPress={() => navigation.navigate('Adm_Home')}
            >
                <Text style={[styles.secondaryButtonText, isTrainingActive && styles.activeButtonText]}>S’entraîner</Text>
                {isTrainingActive && <View style={styles.underline} />}
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, isOrdersActive && styles.activeButton]}
                onPress={() => navigation.navigate('Adm_Orders')}
            >
                <Text style={[styles.buttonText, isOrdersActive && styles.activeButtonText]}>Commander</Text>
                {isOrdersActive && <View style={styles.underline} />}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonRow: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: '#FFB340',
        borderRadius: 8,
        padding: 5,
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
        position: 'relative',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
    },
    secondaryButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    activeButton: {
        backgroundColor: '#FFB340',
    },
    activeButtonText: {
        fontWeight: 'bold',
    },
    underline: {
        position: 'absolute',
        bottom: 2,
        width: '60%',
        height: 2,
        backgroundColor: '#000',
    },
});

export default TopMenu;
