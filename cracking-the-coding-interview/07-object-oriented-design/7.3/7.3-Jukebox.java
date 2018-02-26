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

public class CDPlayer {
  private Playlist p;
  private CD c;

  // Constructors
  public CDPlayer(CD c, Playlist p) { ... }
  public CDPlayer(Playlist p) { this.p = p; }
  public CDPlayer(CD c) { this.c = c; }

  // Play song
  public void playSong(Song s) { ... }

  // Getters and setters
  public Playlist getPlaylist() { return p; }
  public void setPlaylist(Playlist p) { this.p = p; }

  public CD getCD() { return c; }
  public void setCD(CD c) { this.c = c; }
}

public class Playlist {
  private Song song;
  private Queue<Song> queue;
  public Playlist(Song song, Queue<Song> queue) {
    ...
  }
  public Song getNextSToPlay() {
    return queue.peek();
  }
  public void queueUpSong(Song s) {
    queue.add(s);
  }
}
