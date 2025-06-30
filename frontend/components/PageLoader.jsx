import { View, ActivityIndicator } from "react-native";
import { styles } from "../assets/styles/home.styles"; // Assuming the path
import { COLORS } from "../constants/colors"; // Assuming the path

export const PageLoader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

