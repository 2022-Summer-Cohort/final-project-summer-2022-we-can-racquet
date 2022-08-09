package org.wcci.FinalProjectWeCanRacquet.repos;

import org.springframework.data.repository.CrudRepository;
import org.wcci.FinalProjectWeCanRacquet.models.Challenge;

import java.util.Optional;

public interface ChallengeRepository extends CrudRepository<Challenge, Long> {
//        Optional<Challenge> findByGivenId(Long challengerId, Long challengedId);

        }
