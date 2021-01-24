package org.jcg.springboot.redis.controller;

import org.jcg.springboot.redis.model.Book;
import org.jcg.springboot.redis.service.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/redis/book")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BookController {

    private static final Logger LOG = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    BookService service;

    @PostMapping
    public String save(@RequestBody final Book book) {
        LOG.info("Saving new book to the redis");
        service.save(book);
        return "Successfully added. Book with id= " + book.getId();
    }

    @GetMapping("/getall")
    public List<Book> findAll() {
        LOG.info("Fetching all books from redis");
        final Map<Long, Book> bookMap = service.findAll();
        List<Book> bookList = new ArrayList<>(bookMap.values());
        return bookList;
    }

    @GetMapping("get/{id}")
    public Book findById(@PathVariable("id") final Long id) {
        LOG.info("Fetching book with id= " + id);
        return service.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public List<Book> delete (@PathVariable("id") final Long id) {
        LOG.info("Deleting book with id= " + id);
        service.delete(id);
        return findAll();
    }
}
