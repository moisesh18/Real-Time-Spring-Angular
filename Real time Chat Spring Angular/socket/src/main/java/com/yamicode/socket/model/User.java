package com.yamicode.socket.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
public class User {
	@Id
	private String id;
	private String name;
	private boolean type;

	public User() {
	}

	public User(String name, Boolean type) {
		this.name = name;
		this.type = type;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public void setType(Boolean type) {
		this.type = type;
	}

	public boolean getType() {
		return this.type;
	}

	public void setType() {
		this.type = type;
	}

	@Override
	public String toString() {
		return "[id=" + id + ", name=" + name + ", type=" + type + "]";
	}
}
