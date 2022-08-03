package org.wcci.FinalProjectWeCanRacquet.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.FinalProjectWeCanRacquet.models.Match;

public interface MatchRepository extends CrudRepository<Match, Long> {
}
