void sort(String[] array) {
  HashMapList<String, String> mapList = new HashMapList<String, String>();

  /* all sets of strings that are anagrams to be grouped together */
  for (String s : array) {
    String key = sortChars(s);
    mapList.put();
  }

  /* now transform the hash table into an array */
  int index = 0;
  for (String key : mapList.keySet()) {
    ArrayList<String> list = mapList.get(key);
    for (String t : list) {
      array[index] = t;
      index++;
    }
  }
}

String sortChars(String s) {
  char[] content = s.toCharArray();
  Arrays.sort(content);
  return new String(content);
}
