package rmit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rmit.model.User;
import rmit.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service("userService")
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        Optional<User> user = userRepository.findById(id);

        return user.orElse(null);
    }

    @Override
    public User saveUser(User user) {
        userRepository.save(user);

        return user;
    }

    @Override
    public User deleteUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        user.ifPresent(value -> userRepository.delete(value));

        return user.orElse(null);
    }

    @Override
    public User updateUser(User user) {
        User userTemp = getUserById(user.getId());
        if (userTemp != null) {
            userTemp = userRepository.save(user);
        }

        return userTemp;
    }

    @Override
    public User getTeacherById(Long id) {

        return userRepository.findUserByRoleId("teacher", id);
    }

    @Override
    public User getStudentById(Long id) {

        return userRepository.findUserByRoleId("student", id);
    }

    @Override
    public List<User> getTeacherByName(String name) {
        return (List<User>) userRepository.findAllUsersByName("teacher", name);
    }

    @Override
    public List<User> getStudentByName(String name) {
        return (List<User>) userRepository.findAllUsersByName("student", name);
    }

    @Override
    public List<User> getAllTeachers() {
        return (List<User>) userRepository.findAllUsersByRole("teacher");
    }

    @Override
    public List<User> getAllStudents() {
        return (List<User>) userRepository.findAllUsersByRole("student");
    }

    @Override
    public User getUserByEmail(String email) {
        return (User) userRepository.getUserByEmail(email);
    }
}