package org.wcci.FinalProjectWeCanRacquet.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.FinalProjectWeCanRacquet.models.Challenge;
import org.wcci.FinalProjectWeCanRacquet.models.Match;
import org.wcci.FinalProjectWeCanRacquet.models.Player;
import org.wcci.FinalProjectWeCanRacquet.models.Record;
import org.wcci.FinalProjectWeCanRacquet.repos.ChallengeRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.MatchRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.PlayerRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.RecordRepository;

import java.util.ArrayList;

@RestController
@RequestMapping()
public class PlayerController {

    private PlayerRepository playerRepo;
    private ChallengeRepository challengeRepo;
    private RecordRepository recordRepo;
    private MatchRepository matchRepo;


    public PlayerController(PlayerRepository playerRepo, ChallengeRepository challengeRepo, RecordRepository recordRepo, MatchRepository matchRepo) {
        this.playerRepo = playerRepo;
        this.challengeRepo = challengeRepo;
        this.recordRepo = recordRepo;
        this.matchRepo = matchRepo;
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

//    @PostMapping("/api/player/{id}/challenge/{challengerId}")
//    public Iterable<Player> challengePlayer(@PathVariable Long id, @PathVariable Long challengerId) {
//        Player player = playerRepo.findById(id).get();
//        Player challenger = playerRepo.findById(challengerId).get();
//        player.addChallenge(challenger);
//        playerRepo.save(player);
//        return playerRepo.findAll();
//    }

    @PostMapping("/api/player/{challengerId}/challenge/{challengedId}")
    public Challenge addNewChallenge(@PathVariable Long challengerId, @PathVariable Long challengedId){
        Challenge challenge = new Challenge(challengerId,challengedId);
        challengeRepo.save(challenge);
        return challenge;
    }

    @GetMapping("/api/challenge")
    public Iterable<Challenge> showAllChallenges() {
        return challengeRepo.findAll();
    }

    @GetMapping("/api/record")
    public Iterable<Record> showAllRecords(){return recordRepo.findAll();}


    @PostMapping("api/player/{winner}/record/{loser}")
    public Record addNewRecord(@PathVariable Long winner, @PathVariable Long loser, @RequestBody ArrayList<Integer> match){
        Record record1 = new Record(winner, loser, match);
        recordRepo.save(record1);
        return record1;
    }
}
