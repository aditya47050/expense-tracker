import * as React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { styles } from '../../constants/auth.styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
    } catch (err) {
      const code = err.errors?.[0]?.code;

      if (code === "form_identifier_exists") {
        setError("This email is already registered. Try signing in.");
      } else if (code === "form_param_format_invalid") {
        setError("Please enter a valid email address.");
      } else if (code === "form_param_length_too_short") {
        setError("Password must be at least 8 characters long.");
      } else if (code === "form_password_pwned") {
        setError("Choose a stronger password. This one has been exposed in a data breach.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const onVerifyPress = async () => {
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({ code });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace('/');
      } else {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err) {
      console.log("Verification error:", err);

      const codeError = err?.errors?.find(
        (e) => e.code === "form_code_incorrect"
      );

      if (codeError) {
        Alert.alert("Invalid Code", "The verification code you entered is incorrect.");
      } else {
        setError(err?.errors?.[0]?.longMessage || "Something went wrong.");
      }
    }
  };

  // ✅ Verification View
  if (pendingVerification) {
    return (
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 25 }}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
      >
        <Image
          source={require('../../assets/images/verificationScreen.png')}
          style={styles.illustration}
        />

        <Text style={styles.title}>Verify Your Email</Text>

        <Text style={{ color: COLORS.textLight, fontSize: 16, textAlign: "center", marginBottom: 20, maxWidth: 300 }}>
          We’ve sent a 6-digit verification code to{" "}
          <Text style={{ fontWeight: "600", color: COLORS.text }}>{emailAddress}</Text>. Enter it below to continue.
        </Text>

        {error ? (
          <View style={styles.errorBox}>
            <Ionicons name="alert-circle" size={20} color={COLORS.expense} />
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity onPress={() => setError("")}>
              <Ionicons name="close" size={20} color={COLORS.textLight} />
            </TouchableOpacity>
          </View>
        ) : null}

        <TextInput
          style={[styles.input, error && styles.errorInput]}
          value={code}
          placeholder="Enter verification code"
          placeholderTextColor={COLORS.textLight}
          onChangeText={(text) => setCode(text)}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={onVerifyPress}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }

  // ✅ Sign Up Form View
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
    >
      <View style={styles.container}>
        <Image source={require('../../assets/images/signUpScreen.png')} style={styles.illustration} />

        <Text style={styles.title}>Start Your Journey</Text>

        {error ? (
          <View style={styles.errorBox}>
            <Ionicons name="alert-circle" size={20} color={COLORS.expense} />
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity onPress={() => setError("")}>
              <Ionicons name="close" size={20} color={COLORS.textLight} />
            </TouchableOpacity>
          </View>
        ) : null}

        <TextInput
          style={[styles.input, error && styles.errorInput]}
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Your email address"
          placeholderTextColor={COLORS.textLight}
          onChangeText={(email) => setEmailAddress(email)}
        />

        <TextInput
          style={[styles.input, error && styles.errorInput]}
          value={password}
          placeholder="Your password"
          placeholderTextColor={COLORS.textLight}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

        <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.linkText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
