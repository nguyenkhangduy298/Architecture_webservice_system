package com.example.rmitify.repository;

import com.example.rmitify.model.Course;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface CourseRepository extends CrudRepository<Course, Long> {
    @Query("SELECT c FROM Course c WHERE c.name = :name")
    Collection<Course> findAllCoursesByName(String name);

    @Query("SELECT c FROM Course c WHERE c.field = :field")
    Collection<Course> findAllByField(String field);

    @Query("SELECT c FROM Course c WHERE c.courseCode = :courseCode")
    Collection<Course> findAllByCourseCode(String courseCode);
}
