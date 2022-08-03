package org.wcci.FinalProjectWeCanRacquet.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

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
    private String email;
    private String phoneNumber;

    @OneToMany (mappedBy = "winner")
    private Collection<Record> records;

    public Player(String name, String league, String avatarUrl, String email, String phoneNumber) {
        this.name = name;
        this.league = league;
        this.avatarUrl = avatarUrl;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.records= new ArrayList<>();
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

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }


//    public Collection<Record> getRecords() {
//        return records;
//    }

//    public void addRecords(Record inputRecords) {
//        records.add(inputRecords);
//    }
}
