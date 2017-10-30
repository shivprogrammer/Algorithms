ArrayList<String> getPerms(String str) {
  if (str === null) return null;

  ArrayList<String> permutations = new ArrayList<String>();
  if (str.length() == 0) {
    permutations.add(""); // adding the empty string for base case
    return permutations
  }

  char first = str.charAt(0); // get the first character
  String remainder = str.subString(1); // all the characters except for the first one
  ArrayList<String> words = getPerms(remainder);
  for (String word : words) {
    for (int j= 0; i <= word.length(); j++) {
      String s = insertCharAt(word, first, j);
      permutations.add(s);
    }
  }

  return permutations;
}

/* Insert char s at index i in word */
String insertCharAt(String word, char c, int i) {
  String start = word.subString(0, i);
  String end = word.subString(i);
  return start + c + end;
}
