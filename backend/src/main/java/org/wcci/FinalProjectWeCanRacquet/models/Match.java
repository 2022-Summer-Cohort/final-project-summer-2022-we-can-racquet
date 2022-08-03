package org.wcci.FinalProjectWeCanRacquet.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class Match {

    @Id
    @GeneratedValue
    private Long id;

    @OneToMany(mappedBy = "match")
    private Collection<SetsScore> setsscore;

    public Match(SetsScore...setsscores) {
        this.setsscore = new ArrayList<>();
    }

    public Match() {
    }

    public Long getId() {
        return id;
    }

    public Collection<SetsScore> getSetsscore() {
        return setsscore;
    }
}
