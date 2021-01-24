package org.jcg.springboot.redis.service;

import org.jcg.springboot.redis.dao.Courserepo;
import org.jcg.springboot.redis.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import javax.annotation.PostConstruct;
import java.util.Map;

@Service
public class CourseService implements Courserepo {
    private final String COURSE_CACHE = "COURSE";

    @Autowired
    RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, Long, Course> hashOperations;

    @PostConstruct
    private void initializeHashOperations() {
        hashOperations = redisTemplate.opsForHash();
    }

    @Override
    public void save(final Course course) {
        hashOperations.put(COURSE_CACHE, course.getId(), course);
    }

    @Override
    public Course findById(final Long id) {
        return (Course) hashOperations.get(COURSE_CACHE, id);
    }

    @Override
    public Map<Long, Course> findAll() {
        return hashOperations.entries((COURSE_CACHE));
    }

    @Override
    public void delete(final Long id) {
        hashOperations.delete(COURSE_CACHE, id);
    }
}
