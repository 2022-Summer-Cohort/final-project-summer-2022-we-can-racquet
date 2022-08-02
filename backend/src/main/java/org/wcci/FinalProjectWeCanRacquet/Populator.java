package org.wcci.FinalProjectWeCanRacquet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.FinalProjectWeCanRacquet.models.User;
import org.wcci.FinalProjectWeCanRacquet.repos.UserRepository;

@Component
public class Populator implements CommandLineRunner {

    private UserRepository userRepo;

    public Populator(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        User player1 = new User("Ed","3.0","https://img.freepik.com/premium-vector/man-character-avatar-icon-tennis-sport_51635-2515.jpg",
                "ed1@gmail.com","6145524515");
        userRepo.save(player1);
    }
}
