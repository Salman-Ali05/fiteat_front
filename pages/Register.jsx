import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={require('../assets/logo.png')} style={styles.logo} />

            {/* Champs de saisie */}
            <Text style={styles.label}>Adresse email</Text>
            <TextInput style={styles.input} placeholder="Entrez votre email" placeholderTextColor="#bbb" />

            <Text style={styles.label}>Mot de passe</Text>
            <TextInput style={styles.input} placeholder="Entrez votre mot de passe" placeholderTextColor="#bbb" secureTextEntry />

            <Text style={styles.label}>Confirmer mot de passe</Text>
            <TextInput style={styles.input} placeholder="Confirmez votre mot de passe" placeholderTextColor="#bbb" secureTextEntry />

            {/* Bouton d'inscription */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TrainHome')}>
                <Text style={styles.buttonText}>INSCRIPTION</Text>
            </TouchableOpacity>

            {/* Lien de connexion */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.registerText}>
                    Déjà inscrit ? <Text style={styles.registerLink}>Connecte toi ici</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 40,
        borderRadius: 100,
    },
    label: {
        color: '#fff',
        alignSelf: 'flex-start',
        marginBottom: 5,
        fontSize: 16,
    },
    input: {
        width: '100%',
        height: 45,
        backgroundColor: '#d3d3d3',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        width: '100%',
        backgroundColor: '#FFB340',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerText: {
        color: '#fff',
        marginTop: 20,
        fontSize: 14,
    },
    registerLink: {
        color: '#FFB340',
        fontWeight: 'bold',
    },
});
