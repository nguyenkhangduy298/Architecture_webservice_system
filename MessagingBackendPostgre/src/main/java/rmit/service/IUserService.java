package rmit.service;

import rmit.model.User;

import java.util.List;

public interface IUserService {
    List<User> getAllUsers();
    User getUserById(Long id);
    User saveUser(User user);
    User deleteUser(Long id);
    User updateUser(User user);

    User getTeacherById(Long id);
    User getStudentById(Long id);
    List<User> getTeacherByName(String name);
    List<User> getStudentByName(String name);

    List<User> getAllTeachers();

    List<User> getAllStudents();

    User getUserByEmail(String email);
}
