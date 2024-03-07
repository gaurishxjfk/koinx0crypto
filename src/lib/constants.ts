export const defaultCoins = ["bitcoin", "ethereum"];

export const scrollableTabsItems = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

export function formatAmount(amount: number, currency: string) {
  const formattedAmount = amount.toLocaleString('en', { style: 'currency', currency });
  return formattedAmount;
}