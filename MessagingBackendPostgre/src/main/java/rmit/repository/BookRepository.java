package rmit.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import rmit.model.Book;

import java.util.Collection;
import java.util.List;

public interface BookRepository extends CrudRepository<Book, Long> {
    @Query("SELECT b FROM Book b WHERE b.title = :title")
    List<Book> getAllBooksByTitle(String title);
}
