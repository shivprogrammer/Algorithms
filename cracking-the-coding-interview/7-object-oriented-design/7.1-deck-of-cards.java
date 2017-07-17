// Object-Oriented-Design

/*
7.1 Deck of Cards

Design the data structures for a generic deck of cards. Explain how you would subclass the data structures to implement blackjack.
*/

public enum Suit { // an enum is a data type that limits the input to be one out of a set of predefined options
  Club (0), Diamond (1), Heart (2), Spade (3);
  private int value; // private classes are only accessible within the same class that it is has been defined. Can be seen through the spectrum of local vs global variables, for simplicity's sake.
  private Suit(int v) { value = v; }
  public int getValue() { return value; }
  public static Suit getSuitFromValue(int value) { ... } // wtf is this ellipses shit.
}

public class Deck <T extends Card> {
  private ArrayList<T> cards; // this a list that is an array which contains cards. Defined in the following class.
  private int dealtIndex = 0; // looks as if this is the starting index.

  public void setDeckOfCards(ArrayList<T> deckOfCards) { ... } // I think you're defining what deckOfCards is here

  public void shuffle() { ... } // appears as if you're creating the shuffle function here
  public int remainingCards() {
    return cards.size() - dealtIndex; // makes sense, it's the deck minus how many cards have been dealt is the number of cards that are remaining
  }
  public T[] dealHand(int number) { ... } // an array of cards that is of an integers length
  public T dealCard() { ... }
}

public abstract class Card { // abstract class is confusing the hell out of me
  private boolean available = true;

  // for this case, numbers will represent all cards. 2-10 for numbers, 11 - 13 for jack through king and 1 is ace
  protected int facevalue;
  protected Suit suit; // okay, so protected variables are the same as public, EXCEPT for they are not accessible in the world. I'm assuming world means the entire project, but will need to look further into.

  public Card(int c, Suit s) {
    faceValue = c;
    suit = s;
  }

  public abstract int value(); // ** This is an abstract class because these classes define a generic deck without a game that is specified to assign values to the cards.
  public Suit suit() { return suit; } // notice that the semi-colon is on the inside

  /* is the card available to be given to someone? */
  public boolean isAvailable() { return available; }
  public void markUnavailable() { available = false; } // void needs to be specified when a method returns "nothing"
  public void markAvailable() { available = true; }
}

public class Hand<T extends Card> {
  protected ArrayList<T> cards = new ArrayList<T>();

  public int score() {
    int score = 0;
    for (T card : cards) { // notice the notation of a for each loop in java
      score += card.value();
    }

    return score;
  }

  public void addCard(T card) {
    cards.add(card);
  }
}

// NOW WE ARE TAKING THE GENERICS FROM A DECK OF CARDS AND TURNING IT INTO BLACKJACK

public class BlackJackHand extends Hand<BlackJackCard> { // HAND is a class that is defined above, which is an extention of the class Card. Which makes sense because a hand is a list that is comprised of cards, and a blackjack hand is just a special type of hand which follows a certain set of rules.
// This portion is evaluating multiple possibilities for a hand because an ace is worth 1 or 11 depending on what is necessary.
  public int score() {
    ArrayList<Integer> scores = possibleScores();
    int maxUnder = Integer.MIN_VALUE; // this looks like the Math.something function calls that are available in javascript
    int minOver = Integer.MAX_VALUE;
    for (int score : scores) {
      if (score > 21 && score < minOver) {
        minOver = score;
      } else if (score <= 21 && score > maxUnder) {
        maxUnder = score;
      }
    }
    return maxUnder == Integer.MIN_VALUE ? minOver : maxUnder;
  }

  // the following portion is for returning the scores that a hand could have, with an ace being both 1 and 11.
  private ArrayList<Integer> possibleScores() { ... }

  public boolean busted() { return score() > 21; }
  public boolean is21() { return score() == 21; }
  public boolean isBlackJack() { ... }
}
