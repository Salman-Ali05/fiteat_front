import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import TopMenu from '../components/TopMenu';
import BotMenu from '../components/BotMenu';

const activities = [
    { id: '1', title: 'Poids de corps' },
    { id: '2', title: 'Étirement' },
    { id: '3', title: 'Maison / Salle de sport' },
];

const Activities = () => {
    return (
        <View style={styles.container}>

            <TopMenu />

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

            <BotMenu />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 20,
        justifyContent: 'center',
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 7
    },
    activityCard: {
        flex: 1,
        backgroundColor: '#FFB340',
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
        color: '#1E1E1E',
        fontSize: 14,
        marginTop: 5,
    }
});

export default Activities;