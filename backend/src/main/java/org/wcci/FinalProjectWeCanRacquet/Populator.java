package org.wcci.FinalProjectWeCanRacquet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import org.wcci.FinalProjectWeCanRacquet.models.Match;
import org.wcci.FinalProjectWeCanRacquet.models.Player;
import org.wcci.FinalProjectWeCanRacquet.models.Record;
import org.wcci.FinalProjectWeCanRacquet.models.SetsScore;
import org.wcci.FinalProjectWeCanRacquet.repos.MatchRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.PlayerRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.RecordRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.SetsRepository;

import javax.persistence.SecondaryTable;
import java.util.ArrayList;
import java.util.Arrays;

@Component
public class Populator implements CommandLineRunner {

    private PlayerRepository playerRepo;
    private SetsRepository setsRepo;
    private MatchRepository matchRepo;
    private RecordRepository recordRepo;

    public Populator(PlayerRepository playerRepo, SetsRepository setsRepo, MatchRepository matchRepo, RecordRepository recordRepo) {
        this.playerRepo = playerRepo;
        this.setsRepo = setsRepo;
        this.matchRepo = matchRepo;
        this.recordRepo = recordRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        Player player1 = new Player("Ed","3.0","https://img.freepik.com/premium-vector/man-character-avatar-icon-tennis-sport_51635-2515.jpg",
                "ed1@gmail.com","6145524515");
        Player player2 = new Player("Anish","3.0","https://img.freepik.com/premium-vector/man-character-avatar-icon-tennis-sport_51635-2515.jpg",
                "ed1@gmail.com","6145524515");
        Player player3 = new Player("name3", "3.0", "url", "email", "phoneNumber");
        Player player4 = new Player("name4", "3.0", "url", "email", "phoneNumber");
        Player player5 = new Player("name5", "3.0", "url", "email", "phoneNumber");
        Player player6 = new Player("name6", "3.5", "url", "email", "phoneNumber");
        Player player7 = new Player("name7", "3.5", "url", "email", "phoneNumber");
        Player player8 = new Player("name8", "3.5", "url", "email", "phoneNumber");
        playerRepo.save(player1);
        playerRepo.save(player2);
        playerRepo.save(player3);
        playerRepo.save(player4);
        playerRepo.save(player5);
        playerRepo.save(player6);
        playerRepo.save(player7);
        playerRepo.save(player8);

//        Match match1 = new Match();
//        matchRepo.save(match1);
//
//        SetsScore set1 = new SetsScore(6,0, match1);
//        SetsScore set2 = new SetsScore(3,6, match1);
//        SetsScore set3 = new SetsScore(6,4, match1);
//        setsRepo.save(set1);
//        setsRepo.save(set2);
//        setsRepo.save(set3);

//        ArrayList<Integer> match1 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6));
        int[] match1 = {1,2,3,4,5,6};


        Record record1 = new Record(1L, 2L, match1);
        recordRepo.save(record1);







    }
}
