package org.wcci.FinalProjectWeCanRacquet.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Player {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String league;
    private String avatarUrl;
    private int wins;
    private int losses;
//    private Collection<Match> matches;
//    private Collection<User> challengers;
    private String email;
    private String phoneNumber;

    public Player(String name, String league, String avatarUrl, String email, String phoneNumber) {
        this.name = name;
        this.league = league;
        this.avatarUrl = avatarUrl;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public Player() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLeague() {
        return league;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public int getWins() {
        return wins;
    }

    public int getLosses() {
        return losses;
    }

//    public Collection<Match> getMatches() {
//        return matches;
//    }
//
//    public Collection<User> getChallengers() {
//        return challengers;
//    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }
}
