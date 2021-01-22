package rmit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/books")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BookController {

        @Autowired
        private BookRepository repository;

        @RequestMapping(path = "", method = RequestMethod.GET)
        public List<Book> getAllBooks() {
            return repository.findAll();
        }

        @RequestMapping(path = "", method = RequestMethod.POST)
        public Book addBooks(@RequestBody Book book) {
                repository.save(book);
                return book;
        }


}

