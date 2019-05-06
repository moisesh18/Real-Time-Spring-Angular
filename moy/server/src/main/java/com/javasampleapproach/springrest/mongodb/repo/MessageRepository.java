package com.javasampleapproach.springrest.mongodb.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.javasampleapproach.springrest.mongodb.model.Message;

public interface MessageRepository extends MongoRepository<Message, String> {
}
