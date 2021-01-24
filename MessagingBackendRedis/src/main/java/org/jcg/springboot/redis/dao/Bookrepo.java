package org.jcg.springboot.redis.dao;

import java.util.Map;

import org.jcg.springboot.redis.model.Book;

public interface Bookrepo {
    void save(Book employee);

    Book findById(Long id);

    Map<Long, Book> findAll();

    void delete(Long id);
}