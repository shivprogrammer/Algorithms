void addParen(ArrayList<String> list, int leftRem, int rightRem, char[] str, int index) {
  if (leftRem < 0 || rightRem < leftRem) return; // out of balance, not valid parens

  if (leftRem == 0 && rightRem == 0) { // there are no more left and right parens to use
    list.add(String.copyValueOf(str))
  }
  else {
    str[index] = '('; // adding the left parenthesis
    addParen(list, leftRem - 1, rightRem, str, index + 1); // and then recursing

    str[index] = ')'; // now slide to the right
    addParen(list, leftRem, rightRem - 1, str, index + 1) // stop, recursion time
  }
}

ArrayList<String> generateParens(int count) {
  char[] str = new char[count * 2];
  ArrayList<String> list = new ArrayList<String>();
  addParen(list, count, count, str, 0);
  return list;
}
