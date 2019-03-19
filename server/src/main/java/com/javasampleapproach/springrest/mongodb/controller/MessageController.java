package com.javasampleapproach.springrest.mongodb.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.springrest.mongodb.model.Message;
import com.javasampleapproach.springrest.mongodb.repo.MessageRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MessageController {

    @Autowired
    MessageRepository repository;

    @GetMapping("/messages")
    public List<Message> getAllMessages() {
        System.out.println("Get all Messages...");

        List<Message> messages = new ArrayList<>();
        repository.findAll().forEach(messages::add);
        return messages;
    }

    @PostMapping("/messages/create")
    public Message postMessage(@RequestBody String message) {
        System.out.println("Creating message...");
        System.out.println(message);
        Message _message = repository.save(new Message(message));
        return _message;
    }

}
