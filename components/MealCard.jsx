import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MealCard = ({ title, discount }) => {
    return (
        <View style={[styles.card, discount && styles.cardDiscount]}>
            {/* Icône Favoris */}
            <Ionicons name="heart" size={18} color="red" style={styles.favoriteIcon} />

            {/* Titre du plat */}
            <Text style={styles.mealTitle}>{title}</Text>

            {/* Réduction si disponible */}
            {discount && (
                <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{discount}</Text>
                </View>
            )}

            {/* Icône panier */}
            <TouchableOpacity style={styles.cartButton}>
                <Ionicons name="cart" size={18} color="green" />
            </TouchableOpacity>
        </View>
    );
};

export default MealCard;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#FFB340',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        minHeight: 120,
        position: 'relative',
        justifyContent: 'flex-end',
    },
    cardDiscount: {
        // borderTopRightRadius: 40, 
    },
    favoriteIcon: {
        position: 'absolute',
        top: 5,
        left: 5,
    },
    mealTitle: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    discountBadge: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#000',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
    },
    discountText: {
        color: '#FFB340',
        fontSize: 12,
        fontWeight: 'bold',
    },
    cartButton: {
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
});
