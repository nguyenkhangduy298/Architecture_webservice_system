package com.example.rmitify.controller;

import com.example.rmitify.model.User;
import com.example.rmitify.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List<User> findAllUsers() {
        return userService.getAllUsers();
    }

    @RequestMapping(path = "/user/{id}", method = RequestMethod.GET)
    public User findUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @RequestMapping(path = "/user/email/{email}", method = RequestMethod.GET)
    public User findUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    @RequestMapping(path = "/user", method = RequestMethod.POST)
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @RequestMapping(path = "/user/{id}", method = RequestMethod.DELETE)
    public User deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }

    @RequestMapping(path = "/user", method = RequestMethod.PUT)
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @RequestMapping(path = "/user/teachers",  method = RequestMethod.GET)
    public List<User> getAllTeachers() {
        return userService.getAllTeachers();
    }

    @RequestMapping(path = "/user/students", method = RequestMethod.GET)
    public List<User> getAllStudents() {
        return userService.getAllStudents();
    }

    @RequestMapping(path = "/user/teacher/{id}", method = RequestMethod.GET)
    public User getTeacherById(@PathVariable Long id) {
        return userService.getTeacherById(id);
    }

    @RequestMapping(path = "/user/student/{id}", method = RequestMethod.GET)
    public User getStudentById(@PathVariable Long id) {
        return userService.getStudentById(id);
    }

    @RequestMapping(path = "/user/teacher", method = RequestMethod.GET)
    public List<User> getTeacherByName(@RequestParam String name) {
        return userService.getTeacherByName(name);
    }

    @RequestMapping(path = "/user/student", method = RequestMethod.GET)
    public List<User> getStudentByName(@RequestParam String name) {
        return userService.getStudentByName(name);
    }
}