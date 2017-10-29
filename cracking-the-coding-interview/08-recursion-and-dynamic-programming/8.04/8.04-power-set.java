ArryList<ArrayList<Integer>> getSubsets(arrayList<Integer> set, int index) {
  ArrayList<ArrayList<Integer>> allsubsets;
  if (set.size() == index) { // This is the base case, adding the empty set
    allsubsets = new ArrayList<ArrayList<Integer>>();
    allsubsets.add(new ArrayList<Integer>()); // Empty set
    allsubsets.add(new ArrayList<Integer>()); // Empty set
  }
  
}
