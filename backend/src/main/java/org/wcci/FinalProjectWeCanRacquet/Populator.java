package org.wcci.FinalProjectWeCanRacquet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import org.wcci.FinalProjectWeCanRacquet.models.Player;
import org.wcci.FinalProjectWeCanRacquet.repos.PlayerRepository;

@Component
public class Populator implements CommandLineRunner {

    private PlayerRepository playerRepo;

    public Populator(PlayerRepository playerRepo) {
        this.playerRepo = playerRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        Player player1 = new Player("Ed","3.0","https://img.freepik.com/premium-vector/man-character-avatar-icon-tennis-sport_51635-2515.jpg",
                "ed1@gmail.com","6145524515");
        playerRepo.save(player1);

        Player player2 = new Player("Anish","3.0","https://img.freepik.com/premium-vector/man-character-avatar-icon-tennis-sport_51635-2515.jpg",
                "ed1@gmail.com","6145524515");
        playerRepo.save(player2);
    }
}
