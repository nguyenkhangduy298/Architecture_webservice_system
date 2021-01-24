package org.jcg.springboot.redis.controller;

import org.jcg.springboot.redis.model.Book;
import org.jcg.springboot.redis.model.Course;
import org.jcg.springboot.redis.service.CourseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/redis/course")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CourseController {

    private static final Logger LOG = LoggerFactory.getLogger(UserController.class);

    @Autowired
    CourseService service;

    @PostMapping
    public String save(@RequestBody final Course course) {
        LOG.info("Saving new course to the redis");
        service.save(course);
        return "Successfully added. Book with id= " + course.getId();
    }

    @GetMapping("/getall")
    public List<Course> findAll() {
        LOG.info("Fetching all courses from redis");
        final Map<Long, Course> courseMap = service.findAll();
        List<Course> courseList = new ArrayList<>(courseMap.values());
        return courseList;
    }

    @GetMapping("/get/{id}")
    public Course findById(@PathVariable("id") final Long id) {
        LOG.info("Fetching course with id= " + id);
        return service.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public List<Course> delete (@PathVariable("id") final Long id) {
        LOG.info("Deleting course with id= " + id);
        service.delete(id);
        return findAll();
    }
}
