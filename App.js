import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, ScrollView, StyleSheet, Alert, TouchableOpacity, Switch } from 'react-native';

export default function ProfilStatique() {
  const [nom, setNom] = useState('Othmane');
  const [message, setMessage] = useState('Bonjour 👋');
  const [email, setEmail] = useState('othmane@example.com');
  const [telephone, setTelephone] = useState('+33 6 12 34 56 78');
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [saveCount, setSaveCount] = useState(0);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSave = () => {
    if (!nom.trim()) {
      Alert.alert('Erreur ❌', 'Le nom ne peut pas être vide');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Erreur ❌', 'Email invalide');
      return;
    }
    setSaveCount(saveCount + 1);
    Alert.alert('Succès ✅', 'Votre profil a été mis à jour avec succès!');
    setIsEditing(false);
  };

  const handleReset = () => {
    setNom('Othmane');
    setMessage('Bonjour 👋');
    setEmail('othmane@example.com');
    setTelephone('+33 6 12 34 56 78');
  };

  const themeColors = isDarkMode ? {
    background: '#1a1a1a',
    cardBg: '#2d2d2d',
    text: '#fff',
    subText: '#aaa',
    border: '#444',
    inputBg: '#333',
  } : {
    background: '#f5f5f5',
    cardBg: '#fff',
    text: '#333',
    subText: '#666',
    border: '#ddd',
    inputBg: '#f9f9f9',
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: themeColors.background }]}>
      <View style={[styles.themeToggle, { backgroundColor: themeColors.cardBg }]}>
        <Text style={[styles.themeLabel, { color: themeColors.text }]}>🌙 Mode sombre</Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ false: '#767577', true: '#007AFF' }}
          thumbColor={isDarkMode ? '#007AFF' : '#f4f3f4'}
        />
      </View>

      <View style={[styles.headerCard, { backgroundColor: themeColors.cardBg }]}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=4' }}
          style={styles.avatar}
        />
        <Text style={[styles.title, { color: themeColors.text }]}>Profil utilisateur</Text>
        <Text style={[styles.status, { color: themeColors.subText }]}>En ligne 🟢</Text>
        <Text style={[styles.saveCounter, { color: themeColors.subText }]}>Modifications: {saveCount}</Text>
      </View>

      <View style={[styles.card, { backgroundColor: themeColors.cardBg }]}>
        <Text style={[styles.label, { color: themeColors.text }]}>Nom :</Text>
        <TextInput
          style={[styles.input, { backgroundColor: themeColors.inputBg, borderColor: themeColors.border, color: themeColors.text }, isEditing && styles.inputEditable]}
          placeholder="Entrez votre nom"
          placeholderTextColor={themeColors.subText}
          editable={isEditing}
          value={nom}
          onChangeText={setNom}
        />

        <Text style={[styles.label, { color: themeColors.text }]}>Email :</Text>
        <TextInput
          style={[styles.input, { backgroundColor: themeColors.inputBg, borderColor: themeColors.border, color: themeColors.text }, isEditing && styles.inputEditable]}
          placeholder="Entrez votre email"
          placeholderTextColor={themeColors.subText}
          editable={isEditing}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={[styles.label, { color: themeColors.text }]}>Téléphone :</Text>
        <TextInput
          style={[styles.input, { backgroundColor: themeColors.inputBg, borderColor: themeColors.border, color: themeColors.text }, isEditing && styles.inputEditable]}
          placeholder="Entrez votre téléphone"
          placeholderTextColor={themeColors.subText}
          editable={isEditing}
          value={telephone}
          onChangeText={setTelephone}
          keyboardType="phone-pad"
        />

        <Text style={[styles.label, { color: themeColors.text }]}>Message :</Text>
        <TextInput
          style={[styles.input, styles.messageInput, { backgroundColor: themeColors.inputBg, borderColor: themeColors.border, color: themeColors.text }, isEditing && styles.inputEditable]}
          placeholder="Entrez un message"
          placeholderTextColor={themeColors.subText}
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
          Alert.alert('Informations 📋', `Nom: ${nom}\nEmail: ${email}\nTéléphone: ${telephone}\nMessage: ${message}`);
        }}
      >
        <Text style={styles.buttonText}>📱 Afficher les infos</Text>
      </TouchableOpacity>

      <View style={[styles.card, { backgroundColor: themeColors.cardBg, marginTop: 15 }]}>
        <Text style={[styles.infoTitle, { color: themeColors.text }]}>📊 Statistiques</Text>
        <Text style={[styles.infoText, { color: themeColors.subText }]}>Modifications sauvegardées: {saveCount}</Text>
        <Text style={[styles.infoText, { color: themeColors.subText }]}>Profil complété: {nom && email && telephone && message ? '✅ 100%' : '⚠️ Incomplet'}</Text>
      </View>
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
  themeToggle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  themeLabel: {
    fontSize: 16,
    fontWeight: '600',
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
  saveCounter: {
    fontSize: 12,
    marginTop: 10,
    fontStyle: 'italic',
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
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666',
  },
});
