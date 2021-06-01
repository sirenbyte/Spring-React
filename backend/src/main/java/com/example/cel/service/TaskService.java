///Пакет для хранения сервисов
package com.example.cel.service;
import com.example.cel.entity.Task;
import com.example.cel.repository.TaskRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Slf4j
@Service
/// ТаскСервис для работы с базами данных  
public class TaskService {

    @Autowired
    public TaskRepository taskRepository;

    public Task getById(Long id){
        log.info("IN TaskService getById {}",id);
        return taskRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id){
        log.info("IN TaskService deleteById {}",id);
        taskRepository.deleteById(id);
    }

    public void createTask(Task task){
        log.info("IN TaskService createTask {}",task);
        taskRepository.save(task);
    }

    public void updateById(Task task){
        Task old = taskRepository.getById(task.getId());
        old.setTask_name(task.getTask_name());
        old.setDeadline(task.getDeadline());
        old.setDescription(task.getDescription());
        log.info("IN TaskService updateById {}",task);
        taskRepository.save(old);
    }
    public void done(Long id){
        Task old = taskRepository.getById(id);
        log.info("IN TaskService done {}",id);
        if(old.isProcess()){
        old.setProcess(false);
         }else {
            old.setProcess(true);
        }
        taskRepository.save(old);
    }

    public List<Task> getAll(){
        log.info("IN TaskService getAll");
        return taskRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    public List<Task> getToday(){
        log.info("IN TaskService getToday");
        return taskRepository.getToday();
    }

    public List<Task> getDay(Date cday){
        log.info("IN TaskService getDay {}",cday);
        return taskRepository.getDay(cday);
    }

}
