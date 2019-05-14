package com.chat.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;

//@Document(collection = "User")
public class Users {
    @Id
    private ObjectId _id;
    private String username;
    private String password;
    private Integer type;

    public Users() {
    }

    public void Users(ObjectId _id, String username, String password) {
        this._id = _id;
        this.username = username;
        this.password = password;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String get_id() {
        return this._id.toHexString();
    }

    public void setUsername(String name) {
        this.username = name;
    }

    public String getUsername() {
        return this.username;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Integer getType() {
        return this.type;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return this.password;
    }

    @Override
    public String toString() {
        return "[id=" + _id + ", name=" + username + ", type=" + type + "]";
    }
}
