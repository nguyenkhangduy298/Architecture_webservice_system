package com.example.rmitify.service;

import com.example.rmitify.model.Course;
import com.example.rmitify.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service("courseService")
public class CourseService implements ICourseService{
    @Autowired
    CourseRepository courseRepository;

    @Override
    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Course deleteCourse(Long id) {
        Optional<Course> course = courseRepository.findById(id);

        course.ifPresent(value -> courseRepository.delete(value));

        return course.orElse(null);
    }

    @Override
    public Course updateCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Course getCourseById(Long id) {
        Optional<Course> courseOptional =  courseRepository.findById(id);

        return courseOptional.orElse(null);
    }

    @Override
    public List<Course> getCourseByName(String name) {
        Collection<Course> courseList = courseRepository.findAllCoursesByName(name);

        return (List<Course>) courseList;
    }

    @Override
    public List<Course> getAllCourses() {
        return (List<Course>) courseRepository.findAll();
    }

    @Override
    public List<Course> getAllCoursesByField(String field) {
        return (List<Course>) courseRepository.findAllByField(field);
    }

    @Override
    public List<Course> getCourseByCode(String courseCode) {
        return (List<Course>) courseRepository.findAllByCourseCode(courseCode);
    }
}
