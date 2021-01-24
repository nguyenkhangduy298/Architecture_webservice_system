package rmit.repository;

import org.springframework.data.repository.CrudRepository;
import rmit.model.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

}
