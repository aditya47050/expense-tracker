import { View, Text, Dimensions } from "react-native";
import { styles } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";
import { LineChart, PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export const BalanceCard = ({ summary }) => {
  const chartConfig = {
    backgroundGradientFrom: COLORS.card,
    backgroundGradientTo: COLORS.card,
    color: (opacity = 1) => `rgba(139, 89, 62, ${opacity})`, // COLORS.primary with opacity
    labelColor: () => COLORS.text,
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: COLORS.primary,
    },
    strokeWidth: 2,
  };

  const pieData = [
    {
      name: "Income",
      amount: parseFloat(summary.income),
      color: COLORS.income,
      legendFontColor: COLORS.text,
      legendFontSize: 14,
    },
    {
      name: "Expenses",
      amount: Math.abs(parseFloat(summary.expenses)),
      color: COLORS.expense,
      legendFontColor: COLORS.text,
      legendFontSize: 14,
    },
  ];

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [1000, 2000, 1500, 2500, 2200, parseFloat(summary.balance)],
        color: () => COLORS.primary,
      },
    ],
  };

  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>${parseFloat(summary.balance).toFixed(2)}</Text>

      {/* Balance Summary Row */}
      <View style={styles.balanceStats}>
        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>Income</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.income }]}>
            + ${parseFloat(summary.income).toFixed(2)}
          </Text>
        </View>
        <View style={[styles.balanceStatItem, styles.statDivider]} />
        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>Expenses</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.expense }]}>
            -${Math.abs(parseFloat(summary.expenses)).toFixed(2)}
          </Text>
        </View>
      </View>

      {/* Pie Chart */}
      <PieChart
        data={pieData}
        width={screenWidth - 80}
        height={160}
        chartConfig={chartConfig}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="15"
        center={[0, 0]}
        absolute
      />

      {/* Line Chart */}
      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Balance Trend</Text>
      <LineChart
        data={lineData}
        width={screenWidth - 100}
        height={180}
        chartConfig={chartConfig}
        bezier
        style={{ borderRadius: 16 }}
      />
    </View>
  );
};
