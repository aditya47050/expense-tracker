import { styles } from "../constants/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { Alert, TouchableOpacity } from "react-native";
import { useClerk } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

export const SignOutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { 
        text: "Logout", 
        style: "destructive", 
        onPress: async () => {
          try {
            await signOut();
            router.replace("/sign-in"); // Use replace to prevent going back
          } catch (error) {
            console.error("Error signing out:", error);
          }
        } 
      },
    ]);
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
    </TouchableOpacity>
  );
};