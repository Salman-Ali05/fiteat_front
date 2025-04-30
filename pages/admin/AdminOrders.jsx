import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AdmintopMenu from '../../components/admin/AdminTopMenu';
import AdminBotMenu from '../../components/admin/AdminBotMenu';
import MealCard from '../../components/MealCard';

const meals = [
    { id: '1', title: 'Poulet Campagnard aux Pommes de Terre et Sauce Maison', discount: null },
    { id: '2', title: 'Filet de Poisson Pané aux Saveurs Méditerranéennes', discount: null },
    { id: '3', title: 'Mijoté de Bœuf aux Saveurs Rustiques', discount: null },
    { id: '4', title: 'Trios savoureux', discount: '-25%' },
];

const OrdersHome = () => {
    return (
        <View style={styles.container}>
            <AdmintopMenu />

            <View style={styles.content}>

                <FlatList
                    data={meals}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({ item }) => <MealCard title={item.title} discount={item.discount} />}
                    contentContainerStyle={styles.listContainer}
                />

            </View>

            <AdminBotMenu />
        </View>
    );
};

export default OrdersHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 20,
    },
    content: {
        flex: 1,
        marginBottom: 60,
    },
    listContainer: {
        paddingBottom: 20,
    },
});
