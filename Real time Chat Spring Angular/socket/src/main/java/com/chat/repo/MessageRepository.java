package com.chat.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.chat.model.Message;

public interface MessageRepository extends MongoRepository<Message, String> {
}
