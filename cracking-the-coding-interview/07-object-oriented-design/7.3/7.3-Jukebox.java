/*
Jukebox
Design a musical jukebox using object-oriented principles.
*/

// Assumptions that are being made: the jukebox is a computer simulation that closely mirros physical jukeboxes, and we'll assume that it's free.

public class Jukebox {
  private CDPlayer cdPlayer;
  private User user;
  private Set<CD> cdCollection;
  private SongSelector ts;

  public Jukebox(CDPlayer cdplayer, User user, Set<CD> cdCollection, SongSelector ts) { ... }

  public Song getCurrentSong() { return ts.getCurrentSong(); }
  public void setUser(User u) { this.user = u; }
}
