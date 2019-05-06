package com.yamicode.socket.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yamicode.socket.model.User;
import com.yamicode.socket.repo.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	UserRepository repository;

	@GetMapping("/users")
	public List<User> getAllUsers() {
		System.out.println("Get all Users...");
		List<User> Users = new ArrayList<>();
		repository.findAll().forEach(Users::add);
		return Users;
	}

	@GetMapping({ "/users/validateLogin" })
	public User validateLogin() {
		return new User();
	}

	@PostMapping("/users/create")
	public User postUser(@RequestBody User User) {
		User _user = repository.save(new User(User.getName(), User.getType()));
		return _user;
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
		System.out.println("Delete User with ID = " + id + "...");
		repository.deleteById(id);
		return new ResponseEntity<>("User has been deleted!", HttpStatus.OK);
	}

	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") String id, @RequestBody User User) {
		System.out.println("Update User with ID = " + id + "...");
		Optional<User> userData = repository.findById(id);
		if (userData.isPresent()) {
			User _user = userData.get();
			_user.setName(User.getName());
			_user.setType(User.getType());
			return new ResponseEntity<>(repository.save(_user), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
