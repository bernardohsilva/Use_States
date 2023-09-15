import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    genero: '',
    dataNascimento: '',
    usuario: '',
    senha: '',
    email: '',
    confirmarEmail: '',
    cpf: '',
    idioma: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegistration = () => {
    setSubmittedData(formData);
    console.log('Dados enviados:', formData); // Adicione essa linha para imprimir os dados no console
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastre-se</Text>

      {/* Renderiza os dados após o clique no botão */}

      {/* Campos de entrada do formulário */}
      <View style={styles.containerInput}>
        <Icon name="user" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Nome Completo'
          value={formData.nome}
          onChangeText={(text) => handleChange('nome', text)}
        />
      </View>
      <View style={styles.containerInput}>
        <Icon name="transgender" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Gênero'
          value={formData.genero}
          onChangeText={(text) => handleChange('genero', text)}
        />
      </View>
      <View style={styles.containerInput}>
        <Icon name="calendar" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Data de nascimento'
          value={formData.dataNascimento}
          onChangeText={(text) => handleChange('dataNascimento', text)}
        />
      </View>
      <View style={styles.containerInput}>
        <Icon name="users" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Usuário'
          value={formData.usuario}
          onChangeText={(text) => handleChange('usuario', text)}
        />
      </View>
      <View style={styles.containerInput}>
        <Icon name="unlock-alt" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry
          value={formData.senha}
          onChangeText={(text) => handleChange('senha', text)}
        />
      </View>
      <View style={styles.containerInput}>
        <Iconn name="email" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
        />
      </View>
      <View style={styles.containerInput}>
        <Iconn name="email" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Confirme seu email'
          value={formData.confirmarEmail}
          onChangeText={(text) => handleChange('confirmarEmail', text)}
        />
      </View>
      <View style={styles.containerInput}>
        <Iconn name="v-card" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='CPF'
          value={formData.cpf}
          onChangeText={(text) => handleChange('cpf', text)}
        />
      </View>
      <View style={styles.containerInput}>
        <Icon name="language" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Idioma do currículo'
          value={formData.idioma}
          onChangeText={(text) => handleChange('idioma', text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      {submittedData && (
        <View style={styles.submittedDataContainer}>
          <Text style={styles.submittedDataText}>Dados enviados:</Text>
          <Text style={styles.submittedDataText}>Nome: {submittedData.nome}</Text>
          <Text style={styles.submittedDataText}>Gênero: {submittedData.genero}</Text>
          <Text style={styles.submittedDataText}>Data de Nascimento: {submittedData.dataNascimento}</Text>
          <Text style={styles.submittedDataText}>Usuário: {submittedData.usuario}</Text>
          <Text style={styles.submittedDataText}>Email: {submittedData.email}</Text>
          <Text style={styles.submittedDataText}>CPF: {submittedData.cpf}</Text>
          <Text style={styles.submittedDataText}>Idioma: {submittedData.idioma}</Text>
        </View>
      )}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginBottom: 40,
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 30,
  },
  containerInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginLeft: 5,
    width: '80%',
  },
  button: {
    backgroundColor: 'black',
    width: '30%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  submittedDataContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  submittedDataText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
