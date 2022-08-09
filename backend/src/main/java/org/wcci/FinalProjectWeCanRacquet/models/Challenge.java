package org.wcci.FinalProjectWeCanRacquet.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Objects;

@Entity
public class Challenge {

    @Id
    @GeneratedValue
    private Long id;

    private Long challengerId;
    private Long challengedId;



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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Challenge challenge = (Challenge) o;
        return Objects.equals(challengerId, challenge.challengerId) && Objects.equals(challengedId, challenge.challengedId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(challengerId, challengedId);
    }
}
