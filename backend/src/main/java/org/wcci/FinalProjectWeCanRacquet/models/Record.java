package org.wcci.FinalProjectWeCanRacquet.models;

import javax.persistence.*;
import java.util.Collection;


@Entity
public class Record {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "records", insertable = false, updatable = false)
    private Player winner;
    @ManyToOne
    @JoinColumn(name = "records", insertable = false, updatable = false)
    private Player loser;

    @OneToOne
    private Match match;

    public Record(Player winner, Player loser, Match match) {
        this.match  = match;
        this.winner = winner;
        this.loser  = loser;
    }

    public Record() {
    }

    public Long getId() {
        return id;
    }

    public Player getWinner() {
        return winner;
    }

    public Match getMatch() {
        return match;
    }

    public Player getLoser() {
        return loser;
    }

    public Boolean containsPlayer(Player toMatch){
        if(toMatch.equals(winner.getName()) || toMatch.equals(loser.getName()) ){
            return true;
        }
        return false;
    }

    @Override
    public String toString() {
        return "Record{" +
                "id=" + id +
                ", winner=" + winner +
                ", loser=" + loser +
                ", match=" + match +
                '}';
    }
}
