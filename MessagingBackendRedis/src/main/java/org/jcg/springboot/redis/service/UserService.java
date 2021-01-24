package org.jcg.springboot.redis.service;

import org.jcg.springboot.redis.dao.Userrepo;
import org.jcg.springboot.redis.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Map;

@Service
public class UserService implements Userrepo {
    private final String USER_CACHE = "USER";

    @Autowired
    RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, Long, User> hashOperations;

    @PostConstruct
    private void initializeHashOperations() {
        hashOperations = redisTemplate.opsForHash();
    }


    @Override
    public void save(final User user) {
        hashOperations.put(USER_CACHE, user.getId(), user);
    }

    @Override
    public User findById(final Long id) {
        return (User) hashOperations.get(USER_CACHE, id);
    }

    @Override
    public Map<Long, User> findAll() {
        return hashOperations.entries(USER_CACHE);
    }

    @Override
    public void delete(final Long id) {
        hashOperations.delete(USER_CACHE, id);
    }
}
