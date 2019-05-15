package com.chat.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.chat.model.Users;

public interface UserRepository extends MongoRepository<Users, String> {
    Users findByUsername(String username);
}
