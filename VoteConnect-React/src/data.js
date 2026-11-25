export const candidates = [
  { id: "candidate1", name: "Aarav Sharma", party: "People's Progress", symbol: "🌳" },
  { id: "candidate2", name: "Priya Reddy", party: "United Development", symbol: "⭐" },
  { id: "candidate3", name: "Rahul Kumar", party: "National Youth Front", symbol: "🦁" },
  { id: "candidate4", name: "Sneha Patel", party: "Progressive Alliance", symbol: "🌸" }
];
export const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};
