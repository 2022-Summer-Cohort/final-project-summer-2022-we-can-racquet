package org.wcci.FinalProjectWeCanRacquet.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.FinalProjectWeCanRacquet.models.Record;

public interface RecordRepository extends CrudRepository<Record, Long> {
}
