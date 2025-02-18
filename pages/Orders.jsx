import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TopMenu from '../components/TopMenu';
import BotMenu from '../components/BotMenu';
import MealCard from '../components/MealCard';

const meals = [
    { id: '1', title: 'Poulet Campagnard aux Pommes de Terre et Sauce Maison', discount: null },
    { id: '2', title: 'Filet de Poisson Pané aux Saveurs Méditerranéennes', discount: null },
    { id: '3', title: 'Mijoté de Bœuf aux Saveurs Rustiques', discount: null },
    { id: '4', title: 'Trios savoureux', discount: '-25%' },
];

const Orders = () => {
    return (
        <View style={styles.container}>
            <TopMenu />

            <FlatList
                data={meals}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => <MealCard title={item.title} discount={item.discount} />}
                contentContainerStyle={styles.listContainer}
            />

            <BotMenu />
        </View>
    );
};

export default Orders;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 20,
    },
    listContainer: {
        paddingBottom: 20,
    },
});
