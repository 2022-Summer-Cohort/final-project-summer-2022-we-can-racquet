package org.wcci.FinalProjectWeCanRacquet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import org.wcci.FinalProjectWeCanRacquet.models.Challenge;
import org.wcci.FinalProjectWeCanRacquet.models.Player;
import org.wcci.FinalProjectWeCanRacquet.models.Record;
import org.wcci.FinalProjectWeCanRacquet.repos.ChallengeRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.PlayerRepository;
import org.wcci.FinalProjectWeCanRacquet.repos.RecordRepository;

import javax.persistence.SecondaryTable;
import java.util.ArrayList;
import java.util.Arrays;

@Component
public class Populator implements CommandLineRunner {

    private PlayerRepository playerRepo;
    private RecordRepository recordRepo;
    private ChallengeRepository challengeRepo;

    public Populator(PlayerRepository playerRepo, RecordRepository recordRepo, ChallengeRepository challengeRepo) {
        this.playerRepo = playerRepo;
        this.recordRepo = recordRepo;
        this.challengeRepo = challengeRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        Player player1 = new Player("Edward Yu","4.0","./img/avatars/1.jpg","ed1@gmail.com","614-867-5309");
        Player player2 = new Player("Anish Ghimire","4.0","./img/avatars/11.jpg","anish@gmail.com","614-552-4515");
        Player player3 = new Player("Yonas Tadesse", "4.0", "./img/avatars/2.jpg", "yonas@gmail.com", "614-151-5155");
        Player player4 = new Player("Abdulkerim Mohammed", "4.0", "./img/avatars/12.jpg", "abdulm@gmail.com", "614-555-6511");

        Player player5 = new Player("Rickie Kidwell", "3.0", "./img/avatars/3.jpg", "rick@gmail.com", "715-155-6666");
        Player player6 = new Player("Pedro Barbosa", "3.0", "./img/avatars/13.jpg", "operaMan@gmail.com", "321-455-7793");
        Player player7 = new Player("Arlene Aulisio", "3.0", "./img/avatars/04.jpg", "watchingYou@gmail.com", "164-515-6666");

        Player player8 = new Player("Lok Acharya", "3.5", "./img/avatars/14.jpg", "Lok@gmail.com", "666-564-7498");
        Player player9 = new Player("Abdulrizaq Ali", "3.5", "./img/avatars/5.jpg", "abdulali@gmail.com", "155-511-5555");
        Player player10 = new Player("Jordan Gilpin", "3.5", "./img/avatars/15.jpg", "JG@gmail.com", "123-444-5647");
        playerRepo.save(player1);
        playerRepo.save(player2);
        playerRepo.save(player3);
        playerRepo.save(player4);
        playerRepo.save(player5);
        playerRepo.save(player6);
        playerRepo.save(player7);
        playerRepo.save(player8);
        playerRepo.save(player9);
        playerRepo.save(player10);

        int[] match1 = {6,1,1,6,2,6};
        int[] match2 = {4,6,6,1,6,1};
        int[] match3 = {6,1,6,1,0,0};
        int[] match4 = {6,4,6,3,0,0};
        int[] match5 = {2,6,7,6,6,4};
        int[] match6 = {6,1,1,6,6,3};
        int[] match7 = {6,4,6,4,0,0};

        Record record1 = new Record(1L, 2L, match1);
        Record record2 = new Record(1L, 3L, match2);
        Record record3 = new Record(1L, 4L, match3);
        Record record4 = new Record(2L, 3L, match5);
        Record record5 = new Record(2L, 1L, match6);
        Record record6 = new Record(3L, 1L, match7);
        Record record7 = new Record(4L, 1L, match4);
        Record record8 = new Record(5L, 6L, match4);
        Record record9 = new Record(6L, 5L, match6);
        Record record10 = new Record(7L, 5L, match7);
        Record record11 = new Record(9L, 10L, match4);
        recordRepo.save(record1);
        recordRepo.save(record2);
        recordRepo.save(record3);
        recordRepo.save(record4);
        recordRepo.save(record5);
        recordRepo.save(record6);
        recordRepo.save(record7);
        recordRepo.save(record8);
        recordRepo.save(record9);
        recordRepo.save(record10);
        recordRepo.save(record11);

        Challenge challenge1 = new Challenge(1L, 2L);
        Challenge challenge2 = new Challenge(1L, 3L);
        Challenge challenge3 = new Challenge(2L, 4L);
        Challenge challenge4 = new Challenge(2L, 3L);
        Challenge challenge5 = new Challenge(3L, 1L);
        Challenge challenge6 = new Challenge(5L, 6L);
        Challenge challenge7 = new Challenge(5L, 6L);
        Challenge challenge8 = new Challenge(6L, 5L);
        Challenge challenge9 = new Challenge(6L, 7L);
        Challenge challenge10 = new Challenge(8L, 9L);
        Challenge challenge11 = new Challenge(9L, 8L);
        Challenge challenge12 = new Challenge(9L, 8L);
        Challenge challenge13 = new Challenge(10L, 9L);
        Challenge challenge14 = new Challenge(2L, 1L);
        Challenge challenge15 = new Challenge(3L, 1L);
        Challenge challenge16 = new Challenge(4L, 1L);
        Challenge challenge17 = new Challenge(1L, 4L);
        Challenge challenge18 = new Challenge(3L, 2L);
        Challenge challenge19 = new Challenge(4L, 2L);
        challengeRepo.save(challenge1);
        challengeRepo.save(challenge3);
        challengeRepo.save(challenge4);
        challengeRepo.save(challenge5);
        challengeRepo.save(challenge6);
        challengeRepo.save(challenge7);
        challengeRepo.save(challenge8);
        challengeRepo.save(challenge9);
        challengeRepo.save(challenge10);
        challengeRepo.save(challenge11);
        challengeRepo.save(challenge12);
        challengeRepo.save(challenge13);
        challengeRepo.save(challenge14);
        challengeRepo.save(challenge15);
        challengeRepo.save(challenge16);
        challengeRepo.save(challenge17);
        challengeRepo.save(challenge18);
        challengeRepo.save(challenge19);




    }
}
