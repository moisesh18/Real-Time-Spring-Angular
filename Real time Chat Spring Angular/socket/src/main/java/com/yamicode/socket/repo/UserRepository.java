package com.yamicode.socket.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.yamicode.socket.model.User;

public interface UserRepository extends MongoRepository<User, String>{
}
