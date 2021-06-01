package com.example.cel.controller;
import com.example.cel.entity.Task;
import com.example.cel.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class TaskController {

    @Autowired
    public TaskService taskService;

    @GetMapping("/{id}")
    public Task getById(@PathVariable("id") Long id){
        return taskService.getById(id);
    }

    @PostMapping("/")
    public void create(@RequestBody @Validated Task task){
        taskService.createTask(task);
    }
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id") Long id){
        taskService.deleteById(id);
    }
    @PutMapping("/")
    public void updateById(@RequestBody @Validated Task task){
        taskService.updateById(task);
    }
    @GetMapping("/")
    public List<Task> getAll(){
        return taskService.getAll();
    }
    @GetMapping("/today")
    public List<Task> getToday(){
        return taskService.getToday();
    }
    @GetMapping("/cday/{day}")
    public List<Task> getDay(@PathVariable("day") Date cday){
        return taskService.getDay(cday);
    }
    @PutMapping("/{id}")
    public void done(@PathVariable("id") Long id){
        taskService.done(id);
    }


}
