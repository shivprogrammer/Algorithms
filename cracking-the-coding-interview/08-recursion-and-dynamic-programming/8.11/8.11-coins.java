int makeChange(int c) {
  int[] denoms = {25, 10, 5, 1};
  int[][] map = new Int[n + 1][denoms.length]; // precomputed vals
  return makeChange(n, denoms, 0, map);
}

int makeChange(int amount, int[] denoms, int index, int[][] map) {
  if (map[amount][index] > 0) {
    return map[amount][index]; // retrieve the value
  }
  if (index >= denoms.length - 1) return 1; // only the penny is left
  int denomAmount = denoms[index];
  int ways = 0;
  for (int i = 0; i * denomAmount <= amount; i++) {
    // hit the next denomination, assuming that there are i coins of denomAmount
    int amountRemaining = amount - i * denomAmount;
    ways += makeChange(amountRemaining, denoms, index + 1, map);
  }
  map[amount][index] = ways;
  return ways;
}
