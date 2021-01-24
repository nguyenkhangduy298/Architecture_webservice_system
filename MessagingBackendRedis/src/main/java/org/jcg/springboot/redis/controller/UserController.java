package org.jcg.springboot.redis.controller;

import org.jcg.springboot.redis.model.User;
import org.jcg.springboot.redis.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/redis/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
    private static final Logger LOG = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserService service;

    @PostMapping
    public String save(@RequestBody final User user) {
        LOG.info("Saving new user to redis");
        service.save(user);
        return "Successfully added. Book with id= " + user.getId();
    }

    @GetMapping("/getall")
    public List<User> findAll() {
        LOG.info("Fetching all users from redis");
        final Map<Long, User> userMap = service.findAll();
        List<User> userList = new ArrayList<>(userMap.values());
        return userList;
    }

    @GetMapping("/get/{id}")
    public User findById(@PathVariable("id") final Long id) {
        LOG.info("Fetching user with id= " + id);
        return service.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public List<User> delete (@PathVariable("id") final Long id) {
        LOG.info("Deleting user with id= " + id);
        service.delete(id);
        return findAll();
    }
}
