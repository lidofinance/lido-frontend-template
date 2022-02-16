type FormatCashProps = (amount: number) => string;

export const formatCash: FormatCashProps = (amount) => {
  if (amount < 1e3) return amount.toString();
  if (amount >= 1e3 && amount < 1e6) return +(amount / 1e3).toFixed(1) + 'K';
  if (amount >= 1e9 && amount < 1e12) return +(amount / 1e9).toFixed(1) + 'B';
  if (amount >= 1e6 && amount < 1e9) return +(amount / 1e6).toFixed(1) + 'M';
  if (amount >= 1e12) return +(amount / 1e12).toFixed(1) + 'T';
  return '';
};
