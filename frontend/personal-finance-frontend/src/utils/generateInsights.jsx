// src/utils/generateInsights.js
export const generateInsights = (transactions = []) => {
  const insights = [];
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthlyData = {};

  for (const tx of transactions) {
    const txDate = new Date(tx.date);
    if (txDate.getMonth() !== currentMonth || txDate.getFullYear() !== currentYear) continue;

    const category = tx.category || "Uncategorized";
    if (!monthlyData[category]) monthlyData[category] = 0;
    monthlyData[category] += tx.amount;
  }

  const sorted = Object.entries(monthlyData).sort((a, b) => b[1] - a[1]);

  if (sorted.length > 0) {
    const [topCategory, topAmount] = sorted[0];
    if (topAmount > 10000) {
      insights.push(`⚠️ You spent ₹${topAmount} on ${topCategory} this month. Consider reducing spending here.`);
    } else {
      insights.push(`✅ Your top spending category is ${topCategory} with ₹${topAmount}.`);
    }
  }

  const totalSpent = Object.values(monthlyData).reduce((a, b) => a + b, 0);
  if (totalSpent > 30000) {
    insights.push("⚠️ You spent over ₹30,000 this month. You might want to review your budget.");
  }

  if (insights.length === 0) {
    insights.push("🎉 Your spending is under control. Great job!");
  }

  return insights;
};
