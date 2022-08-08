package org.wcci.FinalProjectWeCanRacquet.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashSet;

@Entity
public class Challenge {

    @Id
    @GeneratedValue
    private Long id;

    private Long challengerId;
    private Long challengedId;

    private HashSet<ArrayList<Long>> challengeSet;


    public Challenge(Long challengerId, Long challengedId) {
        this.challengerId = challengerId;
        this.challengedId = challengedId;
    }

    public Challenge() {
    }

    public Long getId() {
        return id;
    }

    public Long getChallengerId() {
        return challengerId;
    }

    public Long getChallengedId() {
        return challengedId;
    }
}
