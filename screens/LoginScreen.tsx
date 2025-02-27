import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StripedBackground } from '@components/Background';
import { buttonStyle, formStyle } from '@styles/Forms';
import googleLogo from '@assets/logos/google.png';
import { useState, useRef } from 'react';
import Input from '@components/Input';
import { Image } from 'expo-image';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const emailRef = useRef<TextInput>(null);

  const [password, setPassword] = useState('');
  const passwordRef = useRef<TextInput>(null);

  return (
    <View style={{ flex: 1 }}>
      <StripedBackground />

      <ScrollView
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps='always'
        style={[formStyle.scroll]}
        contentContainerStyle={[formStyle.scrollContent]}
      >
        <View style={[formStyle.area]}>
          <Text style={[formStyle.title, formStyle.space]}>LOGIN</Text>

          <View style={[formStyle.field, formStyle.space]}>
            <Input
              id={emailRef}
              type='email'
              label='Email'
              placeholder='usuario@exemplo.com'
              value={email}
              setValue={setEmail}
              sendTo={passwordRef}
            />
          </View>

          <View style={[formStyle.field, formStyle.space]}>
            <Input
              id={passwordRef}
              type='password'
              value={password}
              label='Senha'
              placeholder='********************'
              setValue={setPassword}
            />
            <TouchableOpacity style={[formStyle.forgetPasswordArea]}>
              <Text style={[formStyle.highlightedText]}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[buttonStyle.area, buttonStyle.main, formStyle.littleSpace]}>
            <Text style={[buttonStyle.text]}>Entrar</Text>
          </TouchableOpacity>

          <View style={[formStyle.littleSpace]}>
            <Text style={[formStyle.text]}>ou</Text>
          </View>

          <TouchableOpacity style={[buttonStyle.area, buttonStyle.alternative, formStyle.bigSpace]}>
            <Image
              source={googleLogo}
              style={[buttonStyle.logo]}
              contentFit='cover'
            />
            <Text style={[buttonStyle.text]}>Continuar com o google</Text>
          </TouchableOpacity>

          <View style={[formStyle.bottomTextArea]}>
            <Text style={[formStyle.text]}>Não possui conta?</Text>
            <TouchableOpacity>
              <Text style={[formStyle.highlightedText, formStyle.bottomText]}> Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
