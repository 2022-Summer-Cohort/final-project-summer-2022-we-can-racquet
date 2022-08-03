package org.wcci.FinalProjectWeCanRacquet.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.FinalProjectWeCanRacquet.models.SetsScore;

public interface SetsRepository extends CrudRepository<SetsScore, Long> {
}
