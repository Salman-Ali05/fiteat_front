import { View, Text, StyleSheet, FlatList, Pressable, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AdmintopMenu from '../../components/admin/AdminTopMenu';
import AdminBotMenu from '../../components/admin/AdminBotMenu';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

const coaches = [
    { id: '1', name: 'Coach Sophia' },
    { id: '2', name: 'Diététicien Alex' },
    { id: '3', name: 'Coach Leo' },
    { id: '4', name: 'Diététicien Emma' },
    { id: '5', name: 'Coach Max' },
    { id: '6', name: 'Diététicien Sarah' },
    { id: '7', name: 'Coach Mia' },
    { id: '8', name: 'Diététicien Noah' },
    { id: '9', name: 'Coach Ava' },
    { id: '10', name: 'Diététicien Lucas' },
];

const adherents = [
    { id: '1', name: 'Adhérent Marie' },
    { id: '2', name: 'Adhérent Thomas' },
    { id: '3', name: 'Adhérent Nora' },
    { id: '4', name: 'Adhérent Hugo' },
    { id: '5', name: 'Adhérent Clara' },
    { id: '6', name: 'Adhérent Leo' },
    { id: '7', name: 'Adhérent Chloé' },
    { id: '8', name: 'Adhérent Paul' },
    { id: '9', name: 'Adhérent Zoé' },
    { id: '10', name: 'Adhérent Lucas' },
];

const dropdownItems = [
    { label: 'Coach', value: 'coach' },
    { label: 'Diététicien', value: 'diet' },
    { label: 'Adhérent', value: 'adherent' },
];

const AdminHome = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState(''); // 'coach' ou 'adherent'
    const [selectedValue, setSelectedValue] = useState(null);

    const openModal = (type) => {
        setModalType(type);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <AdmintopMenu />

            <View style={styles.content}>
                <Text style={styles.title}>Bienvenue dans le côté admin</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Coachs / Diététiciens</Text>
                    <Ionicons
                        name="add-circle"
                        style={styles.addIcon}
                        onPress={() => openModal('coach')}
                    />
                </View>
                <FlatList
                    data={coaches}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.list}
                />

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Adhérents</Text>
                    <Ionicons
                        name="add-circle"
                        style={styles.addIcon}
                        onPress={() => openModal('adherent')}
                    />
                </View>
                <FlatList
                    data={adherents}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.list}
                />
            </View>

            <AdminBotMenu />

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            Ajouter un {modalType === 'coach' ? 'coach / diététicien' : 'adhérent'}
                        </Text>
                        <View style={styles.form}>
                            <TextInput style={styles.inputs} placeholder='Email' />
                            <TextInput style={styles.inputs} placeholder='Nom' />
                            <TextInput style={styles.inputs} placeholder='Prénom' />
                            <RNPickerSelect
                                onValueChange={(value) => setSelectedValue(value)}
                                placeholder={{
                                    label: 'Sélectionner un type',
                                    value: null,
                                    color: "#FFB340"
                                }}
                                items={dropdownItems}
                                value={selectedValue}
                                useNativeAndroidPickerStyle={false}
                                style={pickerSelectStyles}
                                Icon={() => <Ionicons name="chevron-down" size={18} color="#FFB340" style={{ marginRight: 10 }} />}
                            />


                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.closeButtonText}>Valider</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.closeButtonText}>Fermer</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>

        </View>
    );
};

export default AdminHome;

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
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    sectionTitle: {
        color: '#FFB340',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    addIcon: {
        color: '#FFB340',
        fontSize: 30,
        marginTop: 5,
    },
    list: {
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#2E2E2E',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
    },
    cardText: {
        color: '#fff',
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#2E2E2E',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        color: '#FFB340',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#FFB340',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    closeButtonText: {
        color: '#1E1E1E',
        fontWeight: 'bold',
        fontSize: 16,
    },

    form: {
        width: '90%',
    },
    inputs: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        borderColor: '#FFB340',
        borderWidth: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
});

const pickerSelectStyles = {
    inputIOS: {
        backgroundColor: '#2E2E2E',
        color: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    inputAndroid: {
        backgroundColor: '#2E2E2E',
        color: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    iconContainer: {
        top: 18,
        right: 15,
    },
    placeholder: {
        color: '#FFB340',
    },
};

