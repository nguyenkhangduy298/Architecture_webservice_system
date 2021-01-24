package rmit.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import rmit.model.User;

import java.util.Collection;

public interface UserRepository extends CrudRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.role = :role")
    Collection<User> findAllUsersByRole(String role);

    @Query("SELECT u FROM User u WHERE u.role = :role and u.id = :id")
    User findUserByRoleId(String role, Long id);

    @Query("select u from User u where u.role = :role and u.name = :name")
    Collection<User> findAllUsersByName(String role, String name);

    @Query("select u from User u where u.email = :email")
    User getUserByEmail(String email);
}
