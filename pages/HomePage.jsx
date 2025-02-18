import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

const activities = [
    { id: '1', title: 'Warmup' },
    { id: '2', title: 'Training' },
    { id: '3', title: 'Warmup' },
    { id: '4', title: 'Stretching' },
];

const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-EU', options).toUpperCase();
};


const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Commander</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
                    <Text style={styles.secondaryButtonText}>S’entraîner</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.date}>{getCurrentDate()}</Text>
            <Text style={styles.welcomeText}>Bonjour, <Text style={styles.boldText}>Kate</Text> 👋</Text>

            <View style={styles.card}>
                <Text style={styles.cardText}>Protéines, graisses et glucides</Text>
                <ProgressBar progress={0.5} color="#4169E1" style={styles.progressBar} />
            </View>

            {/* Activités */}
            <Text style={styles.sectionTitle}>Activités d’aujourd’hui</Text>
            <FlatList
                data={activities}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.activityCard}>
                        <Image source={item.image} style={styles.activityImage} />
                        <Text style={styles.activityText}>{item.title}</Text>
                    </View>
                )}
            />

            {/* Barre de navigation */}
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="home" size={24} color="#FFB340" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="barbell" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="cart" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="person" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 20,
    },
    buttonRow: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        flex: 1,
        backgroundColor: '#FFB340',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 10,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderColor: '#FFB340',
        borderWidth: 2,
    },
    secondaryButtonText: {
        color: '#FFB340',
        fontSize: 16,
        fontWeight: 'bold',
    },
    date: {
        color: '#bbb',
        fontSize: 14,
        marginBottom: 5,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    boldText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#FFB340',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    cardText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    progressBar: {
        height: 5,
        borderRadius: 5,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft : 7
    },
    activityCard: {
        flex: 1,
        backgroundColor: '#2E2E2E',
        borderRadius: 8,
        padding: 10,
        margin: 5,
        alignItems: 'center',
    },
    activityImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    activityText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 5,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#141414',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    navItem: {
        alignItems: 'center',
    },
});
