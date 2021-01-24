package org.jcg.springboot.redis.dao;

import org.jcg.springboot.redis.model.User;

import java.util.Map;

public interface Userrepo {
    void save(User employee);

    User findById(Long id);

    Map<Long, User> findAll();

    void delete(Long id);
}
