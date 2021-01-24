package org.jcg.springboot.redis.service;

import org.jcg.springboot.redis.dao.Bookrepo;
import org.jcg.springboot.redis.model.Book;
import org.jcg.springboot.redis.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Map;

@Service
public class BookService implements Bookrepo {

    private final String BOOK_CACHE = "BOOK";

    @Autowired
    RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, Long, Book> hashOperations;

    @PostConstruct
    private void intializeHashOperations() {
        hashOperations = redisTemplate.opsForHash();
    }

    @Override
    public void save(final Book book) {
        hashOperations.put(BOOK_CACHE, book.getId(), book);
    }

    @Override
    public Book findById(final Long id) {
        return (Book) hashOperations.get(BOOK_CACHE, id);
    }


    @Override
    public Map<Long, Book> findAll() {
        return hashOperations.entries(BOOK_CACHE);
    }

    @Override
    public void delete(final Long id) {
        hashOperations.delete(BOOK_CACHE, id);
    }
}
