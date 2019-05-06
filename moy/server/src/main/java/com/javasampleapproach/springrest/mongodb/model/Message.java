package com.javasampleapproach.springrest.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "message")
public class Message {
    @Id
    private String id;
    private String message;

    public Message() {
    }

    public Message(String message) {
        this.message = message;
    }

	public String getId() {
		return id;
	}

	public void setId() {
		this.id = id;
	}

	public void setMessage(String message) {
		this.message = message;
	}

    public String getMessage(){
        return message;
    }

    @Override
    public String toString() {
        return this.message;
    }
}
