import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
    paddingTop: 36,
  },

  content: {
    paddingBottom: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 28,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 18,
  },

  headerLogo: {
    width: 60,
    height: 60,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },

  welcomeContainer: {
    flex: 1,
  },

  welcomeText: {
    fontSize: 13,
    fontWeight: "400",
    color: COLORS.textLight,
    marginBottom: 4,
    letterSpacing: 0.6,
  },

  usernameText: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primary,
    textTransform: "capitalize",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  addButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },

  addButtonText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 17,
    marginLeft: 8,
    letterSpacing: 0.5,
  },

  logoutButton: {
    backgroundColor: COLORS.card,
    padding: 12,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },

  balanceCard: {
    backgroundColor: COLORS.card,
    borderRadius: 28,
    padding: 28,
    marginBottom: 30,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },

  balanceTitle: {
    fontSize: 15,
    color: COLORS.textLight,
    marginBottom: 10,
    letterSpacing: 0.7,
  },

  balanceAmount: {
    fontSize: 38,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 30,
  },

  balanceStats: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  balanceStatItem: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 6,
  },

  statDivider: {
    borderRightWidth: 1,
    borderColor: COLORS.border,
    marginRight:10
  },

  balanceStatLabel: {
    fontSize: 16,
    color: COLORS.textLight,
    marginBottom: 6,
    fontWeight: "500",
    
  },

  balanceStatAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.primary,

  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 22,
    letterSpacing: 0.7,
  },

  transactionCard: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
    paddingVertical: 18,
    paddingHorizontal: 18,
  },

  transactionContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  categoryIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E6E6E6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  transactionLeft: {
    flex: 1,
  },

  transactionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 6,
  },

  transactionCategory: {
    fontSize: 14,
    color: COLORS.textLight,
    fontWeight: "400",
  },

  transactionRight: {
    alignItems: "flex-end",
    marginRight:10
  },

  transactionAmount: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
    color: COLORS.primary,
  },

  transactionDate: {
    fontSize: 13,
    color: COLORS.textLight,
  },

  deleteButton: {
    padding: 18,
    borderLeftWidth: 1.5,
    borderLeftColor: COLORS.border,
  },

  transactionsContainer: {
    marginBottom: 30,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },

  emptyState: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 36,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },

  emptyStateIcon: {
    marginBottom: 22,
  },

  emptyStateTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 12,
  },

  emptyStateText: {
    color: COLORS.textLight,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 26,
    lineHeight: 24,
  },

  emptyStateButton: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 28,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 7,
  },

  emptyStateButtonText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 17,
    marginLeft: 8,
    letterSpacing: 0.4,
  },

  transactionsHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 7,
  },

  transactionsList: {
    flex: 1,
    marginHorizontal: 12,
  },

  transactionsListContent: {
    paddingBottom: 30,
  },
});
