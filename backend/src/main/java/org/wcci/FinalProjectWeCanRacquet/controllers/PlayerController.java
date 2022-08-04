package org.wcci.FinalProjectWeCanRacquet.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.FinalProjectWeCanRacquet.models.Player;
import org.wcci.FinalProjectWeCanRacquet.models.Record;
import org.wcci.FinalProjectWeCanRacquet.repos.PlayerRepository;

import java.util.Collection;

@RestController
@RequestMapping()
public class PlayerController {

    private PlayerRepository playerRepo;

    public PlayerController(PlayerRepository playerRepo) {
        this.playerRepo = playerRepo;
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

    @GetMapping("/api/player/{id}/playerRecords")
    public Collection<Record> findAllRecordsWithPlayer(@RequestBody Long id){
        Player playerToFind = playerRepo.findById(id).get();
        return playerToFind.getRecords();
    }





}
