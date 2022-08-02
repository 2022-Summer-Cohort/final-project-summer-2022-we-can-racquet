package org.wcci.FinalProjectWeCanRacquet.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Match {

    @Id
    @GeneratedValue
    private Long id;
//    private User winner;
//    private User loser;
}
