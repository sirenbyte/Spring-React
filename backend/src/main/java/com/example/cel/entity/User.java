package com.example.cel.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "users")
@Getter
@Setter
@ToString
public class User extends IdEntity{
    @Column(name = "email")
    public String email;

    @Column(name = "first_name")
    public String first_name;

    @Column(name = "last_name")
    public String last_name;

    @Column(name = "password")
    public String password;

    @Column(name = "role")
    public String role;
}
