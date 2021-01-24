package org.jcg.springboot.redis.dao;

import org.jcg.springboot.redis.model.Course;

import java.util.Map;

public interface Courserepo {
    void save(Course employee);

    Course findById(Long id);

    Map<Long, Course> findAll();

    void delete(Long id);
}
