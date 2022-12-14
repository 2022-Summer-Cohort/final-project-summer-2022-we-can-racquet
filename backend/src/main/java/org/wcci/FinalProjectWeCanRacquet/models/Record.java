package org.wcci.FinalProjectWeCanRacquet.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;


@Entity
public class Record {

    @Id
    @GeneratedValue
    private Long id;

//    @ManyToOne
//    @JoinColumn(name = "records", insertable = false, updatable = false)
    private Long winner;
//    @ManyToOne
//    @JoinColumn(name = "records", insertable = false, updatable = false)
    private Long loser;

//    @OneToOne
//    private ArrayList<Integer> match;
    private int[] match = new int[6];


    public Record(Long winner, Long loser, int[] match) {
        this.match  = match;
        this.winner = winner;
        this.loser  = loser;
    }

    public Record() {
    }

    public Long getId() {
        return id;
    }

    public Long getWinner() {
        return winner;
    }

//    public ArrayList<Integer> getMatch() {
//        return match;
//    }


    public int[] getMatch() {
        return match;
    }

    public Long getLoser() {
        return loser;
    }

//    public Boolean containsPlayer(Player toMatch){
//        if(toMatch.equals(winner.getName()) || toMatch.equals(loser.getName()) ){
//            return true;
//        }
//        return false;
//    }

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
