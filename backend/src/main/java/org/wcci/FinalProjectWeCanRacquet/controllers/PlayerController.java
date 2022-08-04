package org.wcci.FinalProjectWeCanRacquet.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.FinalProjectWeCanRacquet.models.Challenge;
import org.wcci.FinalProjectWeCanRacquet.models.Player;
import org.wcci.FinalProjectWeCanRacquet.repos.ChallengeRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.PlayerRepository;

@RestController
@RequestMapping()
public class PlayerController {

    private PlayerRepository playerRepo;
    private ChallengeRepository challengeRepo;

    public PlayerController(PlayerRepository playerRepo, ChallengeRepository challengeRepo) {
        this.playerRepo = playerRepo;
        this.challengeRepo = challengeRepo;
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
}
