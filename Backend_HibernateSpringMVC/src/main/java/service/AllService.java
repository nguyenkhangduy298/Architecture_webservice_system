package service;

import model.*;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@CrossOrigin
@Transactional
@Service
public class AllService {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public Product saveProduct(Product product) {
        sessionFactory.getCurrentSession().save(product);
        return product;
    }

    public Product updateProduct(Product product) {
        sessionFactory.getCurrentSession().update(product);
        return product;
    }

    public Product getProduct(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Product where id=:id");
        query.setInteger("id", id);

        return (Product) query.uniqueResult();

    }

    public int delete(int id) {
        Product product = getProduct(id);
        this.sessionFactory.getCurrentSession().delete(product);
        return id;
    }

    public List<Product> getAllProducts() {
        Query query = sessionFactory.getCurrentSession().createQuery("from Product");
        return query.list();
    }

    // QUERY BASIC SEARCH
    public Product getLikeProduct(String string) {
        string = "%" + string + "%";
        Query query = sessionFactory.getCurrentSession().createQuery("from Product where name like ?");
        query.setString(0, string);
        return (Product) query.uniqueResult();

    }
}