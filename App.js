import React from 'react';
import { View, Text, Image, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native';

export default function ProfilStatique() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=4' }}
        style={styles.avatar}
      />
      <Text style={styles.title}>Profil utilisateur</Text>
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom non modifiable"
        editable={false}
        value="Othmane"
      />
      <Text style={styles.label}>Message :</Text>
      <Text style={styles.message}>Bonjour 👋</Text>
      <Button title="Action désactivée" onPress={() => {}} disabled />
      
      <Button 
        title="Afficher une alerte" 
        onPress={() => {
          Alert.alert('Bonjour !', 'Vous avez appuyé sur le bouton 👍');
        }} 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  message: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
});
