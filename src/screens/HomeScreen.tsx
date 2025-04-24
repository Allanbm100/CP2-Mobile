import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  onNavigateToPerfil?: () => void;
  onNavigateToDetalhes?: () => void;
}

export const HomeScreen: React.FC<Props> = ({ onNavigateToPerfil, onNavigateToDetalhes }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Home!</Text>
      <TouchableOpacity style={styles.button} onPress={onNavigateToPerfil}>
        <Text style={styles.buttonText}>Ir para Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onNavigateToDetalhes}>
        <Text style={styles.buttonText}>Ir para Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B3621',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#DAA520',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
