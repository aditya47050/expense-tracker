import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import SafeScreen from '../components/SafeScreen'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'

export default function RootLayout() {
  const publishableKey = Constants.expoConfig.extra.clerkPublishableKey;

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
      <StatusBar style="dark"/>
    </ClerkProvider>
  )
}
