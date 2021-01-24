package rmit.controller;

import org.springframework.web.bind.annotation.*;
import rmit.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import rmit.repository.BookRepository;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @RequestMapping(path = "/book", method = RequestMethod.GET)
    public List<Book> getAllBooks() {
        return (List<Book>) bookRepository.findAll();
    }

    @RequestMapping(path = "/book", method = RequestMethod.POST)
    public Book addBooks(@RequestBody Book book) {
        bookRepository.save(book);
        return book;
    }

    @RequestMapping(path = "/book/{id}", method = RequestMethod.GET)
    public Book getBookById(@PathVariable Long id) {
        Optional<Book> book = bookRepository.findById(id);
        return book.orElse(null);
    }

    @RequestMapping(path = "/book/{id}", method = RequestMethod.DELETE)
    public Book deleteBook(@PathVariable Long id) {
        Optional<Book> book = bookRepository.findById(id);
        if (!book.isPresent()) return null;

        bookRepository.delete(book.get());

        return book.get();
    }

    @RequestMapping(path = "/book", method = RequestMethod.PUT)
    public Book updateBook(@RequestBody Book book) {
        Optional<Book> book1 = bookRepository.findById(book.getId());
        if (!book1.isPresent()) return null;

        return bookRepository.save(book);
    }
}