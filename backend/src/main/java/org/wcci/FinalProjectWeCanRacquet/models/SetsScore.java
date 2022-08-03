package org.wcci.FinalProjectWeCanRacquet.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class SetsScore {

    @Id
    @GeneratedValue
    private Long id;
    private int point1;
    private int point2;

    @ManyToOne
    private Match match;

    public SetsScore(int point1, int point2,Match match) {
        this.point1 = point1;
        this.point2 = point2;
        this.match = match;
    }

    public SetsScore() {
    }

    public Long getId() {
        return id;
    }

    public int getPoint1() {
        return point1;
    }

    public int getPoint2() {
        return point2;
    }

    public Match getMatch() {
        return match;
    }
}
