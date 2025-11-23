import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, ScrollView, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function ProfilStatique() {
  const [nom, setNom] = useState('Othmane');
  const [message, setMessage] = useState('Bonjour 👋');
  const [email, setEmail] = useState('othmane@example.com');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    Alert.alert('Succès ✅', 'Votre profil a été mis à jour avec succès!');
    setIsEditing(false);
  };

  const handleReset = () => {
    setNom('Othmane');
    setMessage('Bonjour 👋');
    setEmail('othmane@example.com');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerCard}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=4' }}
          style={styles.avatar}
        />
        <Text style={styles.title}>Profil utilisateur</Text>
        <Text style={styles.status}>En ligne 🟢</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Nom :</Text>
        <TextInput
          style={[styles.input, isEditing && styles.inputEditable]}
          placeholder="Entrez votre nom"
          editable={isEditing}
          value={nom}
          onChangeText={setNom}
        />

        <Text style={styles.label}>Email :</Text>
        <TextInput
          style={[styles.input, isEditing && styles.inputEditable]}
          placeholder="Entrez votre email"
          editable={isEditing}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Message :</Text>
        <TextInput
          style={[styles.input, styles.messageInput, isEditing && styles.inputEditable]}
          placeholder="Entrez un message"
          editable={isEditing}
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={3}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, isEditing ? styles.buttonDanger : styles.buttonPrimary]}
          onPress={() => isEditing ? handleReset() : setIsEditing(true)}
        >
          <Text style={styles.buttonText}>
            {isEditing ? '❌ Annuler' : '✏️ Modifier'}
          </Text>
        </TouchableOpacity>

        {isEditing && (
          <TouchableOpacity 
            style={[styles.button, styles.buttonSuccess]}
            onPress={handleSave}
          >
            <Text style={styles.buttonText}>💾 Enregistrer</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity 
        style={[styles.button, styles.buttonInfo]}
        onPress={() => {
          Alert.alert('Informations 📋', `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`);
        }}
      >
        <Text style={styles.buttonText}>📱 Afficher les infos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    minHeight: '100%',
  },
  headerCard: {
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
    marginTop: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333',
  },
  inputEditable: {
    backgroundColor: '#fff',
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  messageInput: {
    height: 80,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonPrimary: {
    backgroundColor: '#007AFF',
  },
  buttonSuccess: {
    backgroundColor: '#34C759',
  },
  buttonDanger: {
    backgroundColor: '#FF3B30',
  },
  buttonInfo: {
    backgroundColor: '#5AC8FA',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
