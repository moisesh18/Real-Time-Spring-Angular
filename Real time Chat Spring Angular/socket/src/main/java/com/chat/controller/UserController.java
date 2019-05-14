package com.chat.controller;

import com.chat.model.Users;
import com.chat.repo.UserRepository;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.password.PasswordEncoder;
import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/users")
    public List<Users> getAllUsers() {
        System.out.println("Get all Users...");
        return repository.findAll();
    }

    @PostMapping("/users")
    public Users postUser(@Valid @RequestBody Users users) {
        users.set_id(ObjectId.get());
        users.setPassword(passwordEncoder.encode(users.getPassword()));
        repository.save(users);
        return users;
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable String username) {
        repository.delete(repository.findByUsername(username));
    }

    @PutMapping("/users/{id}")
    public void modifyUser(@PathVariable("id") ObjectId id, @Valid @RequestBody Users users) {
        users.set_id(id);
        users.setPassword(passwordEncoder.encode(users.getPassword()));
        repository.save(users);
    }
}
