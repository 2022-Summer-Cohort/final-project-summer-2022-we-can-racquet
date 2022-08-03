package org.wcci.FinalProjectWeCanRacquet.models;

import javax.persistence.*;
import java.util.Collection;


@Entity
public class Record {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Player winner,loser;
    @OneToOne
    private Match match;

    public Record(Player winner, Player loser, Match match) {
        this.match = match;
        this.winner=winner;
        this.loser=loser;

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
}
