import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { globalStyles } from "../styles/globalStyles.js";

export default function Formulario() {

  const [nome, setNome] = useState("");
  const [nomeError, setNomeError] = useState("");

  const [dataNascimento, setDataNascimento] = useState("");
  const [dataNascimentoError, setDataNascimentoError] = useState("");

  const [cpf, setCpf] = useState("");
  const [cpfError, setCpfError] = useState("");

  const [telefoneFixo, setTelefoneFixo] = useState("");
  const [telefoneFixoError, setTelefoneFixoError] = useState("");

  const [celular, setCelular] = useState("");
  const [celularError, setCelularError] = useState("");

  const [pai, setPai] = useState("");
  const [paiError, setPaiError] = useState("");

  const [mae, setMae] = useState("");
  const [maeError, setMaeError] = useState("");

  const [cep, setCep] = useState("");
  const [cepError, setCepError] = useState("");

  const [endereco, setEndereco] = useState("");
  const [enderecoError, setEnderecoError] = useState("");

  const [numero, setNumero] = useState("");
  const [numeroError, setNumeroError] = useState("");

  const [complemento, setComplemento] = useState("");

  const [cidade, setCidade] = useState("");
  const [cidadeError, setCidadeError] = useState("");

  const [estado, setEstado] = useState("");
  const [estadoError, setEstadoError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [senha, setSenha] = useState("");
  const [senhaError, setSenhaError] = useState("");

  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [confirmarSenhaError, setConfirmarSenhaError] = useState("");


  const validateForm = () => {
    let isValid = true;

    if (!nome.trim()) {
      setNomeError("Nome é obrigatório");
      isValid = false;
    } else {
      setNomeError("");
    }

    if (!dataNascimento.trim()) {
      setDataNascimentoError("Data de nascimento é obrigatória");
      isValid = false;
    } else {
      setDataNascimentoError("");
    }

    if (!cpf.trim()) {
      setCpfError("CPF é obrigatório");
      isValid = false;
    } else {
      setCpfError("");
    }

    if (!telefoneFixo.trim()) {
      setTelefoneFixoError("Telefone fixo é obrigatório");
      isValid = false;
    } else {
      setTelefoneFixoError("");
    }

    if (!celular.trim()) {
      setCelularError("Celular é obrigatório");
      isValid = false;
    } else {
      setCelularError("");
    }

    if (!cep.trim()) {
      setCepError("CEP é obrigatório");
      isValid = false;
    } else {
      setCepError("");
    }

    if (!endereco.trim()) {
      setEnderecoError("Endereço é obrigatório");
      isValid = false;
    } else {
      setEnderecoError("");
    }

    if (!numero.trim()) {
      setNumeroError("Número é obrigatório");
      isValid = false;
    } else {
      setNumeroError("");
    }

    if (!cidade.trim()) {
      setCidadeError("Cidade é obrigatória");
      isValid = false;
    } else {
      setCidadeError("");
    }

    if (!estado.trim()) {
      setEstadoError("Estado é obrigatório");
      isValid = false;
    } else {
      setEstadoError("");
    }

    if (!email.trim()) {
      setEmailError("Email é obrigatório");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!senha.trim()) {
      setSenhaError("Senha é obrigatória");
      isValid = false;
    } else {
      setSenhaError("");
    }

    if (senha !== confirmarSenha) {
      setConfirmarSenhaError("Senhas não conferem");
      isValid = false;
    } else {
      setConfirmarSenhaError("");
    }

    return isValid;
  };


  const handleSubmit = () => {
    if (validateForm()) {
      const dados = {
        nome,
        dataNascimento,
        cpf,
        telefoneFixo,
        celular,
        pai,
        mae,
        cep,
        endereco,
        numero,
        complemento,
        cidade,
        estado,
        email,
        senha,
      };

      console.log("Dados do formulário:", dados);
      Alert.alert("Sucesso", "Formulário enviado com sucesso!");


      setNome("");
      setDataNascimento("");
      setCpf("");
      setTelefoneFixo("");
      setCelular("");
      setPai("");
      setMae("");
      setCep("");
      setEndereco("");
      setNumero("");
      setComplemento("");
      setCidade("");
      setEstado("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");
    } else {
      Alert.alert("Erro", "Preencha os campos obrigatórios");
    }
  };


  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.scrollContent}>
        <Text style={globalStyles.title}>Formulário</Text>

       
        <Text style={globalStyles.sectionTitle}>Informações Pessoais</Text>
        <TextInput style={globalStyles.input} placeholder="Nome completo" value={nome} onChangeText={setNome} />
        {nomeError ? <Text style={globalStyles.errorText}>{nomeError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="Data de Nascimento" value={dataNascimento} onChangeText={setDataNascimento} />
        {dataNascimentoError ? <Text style={globalStyles.errorText}>{dataNascimentoError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="CPF" value={cpf} onChangeText={setCpf} />
        {cpfError ? <Text style={globalStyles.errorText}>{cpfError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="Telefone Fixo" value={telefoneFixo} onChangeText={setTelefoneFixo} />
        {telefoneFixoError ? <Text style={globalStyles.errorText}>{telefoneFixoError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="Celular" value={celular} onChangeText={setCelular} />
        {celularError ? <Text style={globalStyles.errorText}>{celularError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="Nome do Pai" value={pai} onChangeText={setPai} />
        {paiError ? <Text style={globalStyles.errorText}>{paiError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="Nome da Mãe" value={mae} onChangeText={setMae} />
        {maeError ? <Text style={globalStyles.errorText}>{maeError}</Text> : null}

        <Text style={globalStyles.sectionTitle}>Endereço</Text>
        <TextInput style={globalStyles.input} placeholder="CEP" value={cep} onChangeText={setCep} />
        {cepError ? <Text style={globalStyles.errorText}>{cepError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
        {enderecoError ? <Text style={globalStyles.errorText}>{enderecoError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="Número" value={numero} onChangeText={setNumero} />
        {numeroError ? <Text style={globalStyles.errorText}>{numeroError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="Complemento (opcional)" value={complemento} onChangeText={setComplemento} />

        <TextInput style={globalStyles.input} placeholder="Cidade" value={cidade} onChangeText={setCidade} />
        {cidadeError ? <Text style={globalStyles.errorText}>{cidadeError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="Estado" value={estado} onChangeText={setEstado} />
        {estadoError ? <Text style={globalStyles.errorText}>{estadoError}</Text> : null}

        {/* Conta */}
        <Text style={globalStyles.sectionTitle}>Informações da Conta</Text>
        <TextInput style={globalStyles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        {emailError ? <Text style={globalStyles.errorText}>{emailError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
        {senhaError ? <Text style={globalStyles.errorText}>{senhaError}</Text> : null}

        <TextInput style={globalStyles.input} placeholder="Confirmar Senha" value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry />
        {confirmarSenhaError ? <Text style={globalStyles.errorText}>{confirmarSenhaError}</Text> : null}

        <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
          <Text style={globalStyles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
