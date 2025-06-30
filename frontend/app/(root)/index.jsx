import { useRouter } from "expo-router";
import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";

import { SignOutButton } from "../../components/SignOutButton";
import { useTransactions } from "../../hooks/useTransaction";
import { PageLoader } from "../../components/PageLoader";
import { BalanceCard } from "../../components/BalanceCard";
import { TransactionItem } from "../../components/TransactionItem";
import { NoTransactionsFound } from "../../components/NoTransactionFound";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../assets/styles/home.styles";

export default function Page() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const {
    transactions,
    summary,
    isLoading,
    loadData,
    deleteTransaction,
  } = useTransactions(user?.id);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  // ✅ Only call loadData when Clerk and user.id are ready
  useEffect(() => {
    if (isLoaded && user?.id) {
      console.log(user.id)
      loadData();
    }
  }, [isLoaded, user?.id]);

  const handleDelete = (id) => {
    Alert.alert(
      "Delete Transaction",
      "Are you sure you want to delete this transaction?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteTransaction(id),
        },
      ]
    );
  };

  // ✅ Wait until Clerk is fully loaded AND transactions fetched
  if (!isLoaded || (isLoading && !refreshing)) return <PageLoader />;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.transactionsListContent}
      data={transactions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TransactionItem item={item} onDelete={handleDelete} />
      )}
      ListEmptyComponent={<NoTransactionsFound />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View style={styles.content}>
          {/* HEADER */}
          <View style={styles.header}>
            {/* LEFT */}
            <View style={styles.headerLeft}>
              <Image
                source={require("../../assets/images/target.png")}
                style={styles.headerLogo}
                resizeMode="contain"
              />
              <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome,</Text>
                <Text style={styles.usernameText}>
                  {user?.emailAddresses?.[0]?.emailAddress.split("@")[0]}
                </Text>
              </View>
            </View>

            {/* RIGHT */}
            <View style={styles.headerRight}>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => router.push("/create")}
              >
                <Ionicons name="add" size={20} color="#FFF" />
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
              <SignOutButton />
            </View>
          </View>

          {/* BALANCE CARD */}
          <BalanceCard summary={summary} />

          {/* Optional Title */}
          {transactions.length > 0 && (
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
          )}
        </View>
      }
    />
  );
}
