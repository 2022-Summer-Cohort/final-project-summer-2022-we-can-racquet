package org.wcci.FinalProjectWeCanRacquet.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.FinalProjectWeCanRacquet.models.Player;

public interface PlayerRepository extends CrudRepository<Player, Long> {
}
