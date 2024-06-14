// components/UserModal.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const UserModal = ({ isVisible,
    onClose, onSubmit,
    nombre, setNombre,
    apellido, setApellido,
    correo, setCorreo,
    alias, setAlias,
    clave, setClave,
    confirmarClave, setConfirmarClave,
    modalType }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={styles.modalContent}>
                {modalType === 'create' && <Text style={styles.modalTitle}>Crear Usuario</Text>}
                {modalType === 'edit' && <Text style={styles.modalTitle}>Editar Usuario</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={text => setNombre(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellido"
                    value={apellido}
                    onChangeText={text => setApellido(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Correo"
                    value={correo}
                    onChangeText={text => setCorreo(text)}
                />
                {modalType === 'create' && (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Alias"
                            value={alias}
                            onChangeText={text => setAlias(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Contraseña"
                            secureTextEntry
                            value={clave}
                            onChangeText={text => setClave(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmar Contraseña"
                            secureTextEntry
                            value={confirmarClave}
                            onChangeText={text => setConfirmarClave(text)}
                        />
                    </>
                )}
                <TouchableOpacity
                    style={styles.button}
                    onPress={onSubmit}
                >
                    <Text style={styles.buttonText}>{modalType === 'create' ? 'Crear' : 'Editar'} Usuario</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#5C3D2E',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
    },
    button: {
        backgroundColor: '#AF8260',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default UserModal;
