package com.example.cel.entity;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "task")
@Getter
@Setter
@ToString
public class Task extends IdEntity{

    @Column(name = "tname")
    public String task_name;

    @Column(name = "Deadline")
    public Date deadline;

    @Column(name = "description")
    public String description;

    @Column(name = "process")
    public boolean process;

}
