import { Text, TextInput, TouchableOpacity, KeyboardTypeOptions, TouchableWithoutFeedback } from 'react-native';
import { borderColorInterpolation, fadeToggle, verticalTranslation } from '@animations/Forms';
import { labelStyle, placeholderStyle, inputStyle, inputStyleData } from '@styles/Forms';
import Animated, { useSharedValue } from 'react-native-reanimated';
import React, { useState, RefObject } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

type InputTypes = 'email' | 'password' | 'text';

type Props = {
  id: RefObject<TextInput>;
  label: string;
  placeholder: string;
  type: InputTypes;
  value: string;
  setValue: (value: string) => void;
  sendTo?: RefObject<TextInput>;
  hint: string;
};

const keyboardTypeMap: Record<InputTypes, KeyboardTypeOptions> = {
  email: 'email-address',
  password: 'default',
  text: 'default',
};

const Input: React.FC<Props> = ({ id, label, placeholder, type, value, setValue, sendTo, hint }) => {
  const [secure, setSecure] = useState(true);
  const focused = useSharedValue(0);

  const fade = fadeToggle(focused, 0, 1, focused && value !== '', 0);
  const borderColor = borderColorInterpolation(
    focused,
    inputStyleData.default.borderColor,
    inputStyleData.focused.borderColor
  );
  const top = verticalTranslation(
    focused,
    0,
    inputStyleData.focused.top,
    focused && value !== '',
    inputStyleData.focused.top
  );

  return (
    <>
      <Animated.View style={[labelStyle.area, top]}>
        <TouchableWithoutFeedback onPress={() => id.current?.focus()}>
          <Text style={[labelStyle.content]}>{label}</Text>
        </TouchableWithoutFeedback>
      </Animated.View>

      <Animated.View style={[placeholderStyle.area, fade]}>
        <Text style={[placeholderStyle.content]}>{placeholder}</Text>
      </Animated.View>

      <Animated.View style={[inputStyle.area, borderColor]}>
        <TextInput
          accessible
          accessibilityLabel={label}
          accessibilityHint={hint}
          ref={id}
          style={[inputStyle.content]}
          value={value}
          keyboardType={keyboardTypeMap[type]}
          secureTextEntry={type === 'password' ? secure : false}
          submitBehavior={sendTo ? 'submit' : 'blurAndSubmit'}
          returnKeyType={sendTo ? 'next' : 'send'}
          onSubmitEditing={() => (sendTo ? sendTo.current?.focus() : null)}
          onChangeText={(text) => setValue(text)}
          onFocus={() => (focused.value = 1)}
          onBlur={() => (focused.value = 0)}
        />

        {type === 'password' && (
          <TouchableOpacity
            accessible
            accessibilityRole='button'
            accessibilityLabel='Alternar visibilidade da senha'
            accessibilityHint={secure ? 'Toque para mostrar o texto da senha.' : 'Toque para ocultar o texto da senha.'}
            style={[inputStyle.iconArea]}
            onPress={() => setSecure(!secure)}
          >
            {secure ? (
              <Ionicons style={[inputStyle.icon]} name='eye-off-outline' />
            ) : (
              <Ionicons style={[inputStyle.icon]} name='eye-outline' />
            )}
          </TouchableOpacity>
        )}
      </Animated.View>
    </>
  );
};

export default Input;
