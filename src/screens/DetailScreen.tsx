import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../navigation/RootNavigator';

type DetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

export default function DetailScreen() {
  const navigation = useNavigation<DetailScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta é a tela de detalhes.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
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
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
