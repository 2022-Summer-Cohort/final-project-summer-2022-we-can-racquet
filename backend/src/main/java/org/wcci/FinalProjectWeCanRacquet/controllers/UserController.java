package org.wcci.FinalProjectWeCanRacquet.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wcci.FinalProjectWeCanRacquet.models.User;
import org.wcci.FinalProjectWeCanRacquet.repos.UserRepository;

@RestController
@RequestMapping()
public class UserController {

    private UserRepository userRepo;

    public UserController(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping("/api/user")
    public User showUser(@PathVariable Long id) {
        return userRepo.findById(id).get();
    }
}
