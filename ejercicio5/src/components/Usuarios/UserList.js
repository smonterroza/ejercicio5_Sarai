// components/UserList.js
import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <FlatList
            data={users}
            keyExtractor={(item) => item.id_administrador.toString()}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Text style={styles.textTitle}>{item.nombre_administrador} {item.apellido_administrador}</Text>
                    <Text style={styles.text}>{item.correo_administrador}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => onEdit(item)}>
                            <Text style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonDelete]} onPress={() => onDelete(item.id_administrador)}>
                            <Text style={styles.buttonText}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
    textTitle: {
        fontSize: 18,
        marginBottom: 8,
        fontWeight: '700',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#AF8260',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonDelete: {
        backgroundColor: '#C63E3E',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default UserList;
