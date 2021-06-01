package com.example.cel.repository;

import com.example.cel.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

///Репозиторий для работы с Тасками
@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {

    @Query("select t from Task t where t.deadline=CURRENT_DATE")
    List<Task> getToday();

    @Query("select t from Task t where t.deadline=:cday")
    List<Task> getDay(@Param("cday") Date cday);
}
