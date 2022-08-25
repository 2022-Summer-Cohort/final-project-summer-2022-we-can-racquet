package org.wcci.FinalProjectWeCanRacquet.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.FinalProjectWeCanRacquet.models.Challenge;
import org.wcci.FinalProjectWeCanRacquet.models.Player;
import org.wcci.FinalProjectWeCanRacquet.models.Record;
import org.wcci.FinalProjectWeCanRacquet.repos.ChallengeRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.PlayerRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.RecordRepository;

import java.util.ArrayList;

@RestController
@RequestMapping()
public class PlayerController {

    private PlayerRepository playerRepo;
    private ChallengeRepository challengeRepo;
    private RecordRepository recordRepo;

    public PlayerController(PlayerRepository playerRepo, ChallengeRepository challengeRepo, RecordRepository recordRepo) {
        this.playerRepo = playerRepo;
        this.challengeRepo = challengeRepo;
        this.recordRepo = recordRepo;
    }

    @GetMapping("/api/player")
    public Iterable<Player> showAllPlayers() {
        return playerRepo.findAll();
    }

    @GetMapping("/api/player/{id}")
    public Player getPlayerById(@PathVariable Long id){
        return playerRepo.findById(id).get();
    }

    @PostMapping("/api/player")
    public Player addNewPlayer(@RequestBody Player playerToAdd) {
        playerRepo.save(playerToAdd);
        return playerRepo.findById(playerToAdd.getId()).get();
    }

    @PostMapping("/api/player/{challengerId}/challenge/{challengedId}")
    public Challenge addNewChallenge(@PathVariable Long challengerId, @PathVariable Long challengedId){
        Challenge challenge = new Challenge(challengerId,challengedId);
        boolean b = false;
        for(Challenge tempChallenge : challengeRepo.findAll()) {
            if (tempChallenge.equals(challenge)) {
                b = true;
                break;
            }
        }
        if (b == false) {
            challengeRepo.save(challenge);
        }
        return challenge;
    }

    @DeleteMapping("/api/{id}/deleteChallenge")
    public Iterable<Player> deleteChallenge(@PathVariable Long id) {
        challengeRepo.deleteById(id);
        return playerRepo.findAll();
    }

    @GetMapping("/api/challenge")
    public Iterable<Challenge> showAllChallenges() {
        return challengeRepo.findAll();
    }

    @GetMapping("/api/record")
    public Iterable<Record> showAllRecords(){return recordRepo.findAll();}

    @PostMapping("api/player/{winner}/record/{loser}")
    public Iterable<Player> addNewRecord(@PathVariable Long winner, @PathVariable Long loser, @RequestBody int[] match){
        Record record1 = new Record(winner, loser, match);
        recordRepo.save(record1);
        return playerRepo.findAll();
    }
}
