package rmit;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue
    protected Long id;

    @Column
    protected String firstName;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

}

//package pl.codeleak.samples.springboot.tc;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import javax.persistence.*;
//import javax.validation.constraints.Digits;
//import javax.validation.constraints.NotEmpty;
//
//@Entity
//@Table(name = "books")
//public class Book {
//
//    @Id
//    @GeneratedValue
//    protected Long id;
//
//    @Column(name = "isbn")
//    @NotEmpty
//    protected String isbn;
//
//    @Column(name = "title")
//    @NotEmpty
//    protected String title;
//
//    @Column(name = "field")
//    @NotEmpty
//    private String field;
//
//    @Column(name = "author")
//    @NotEmpty
//    private String author;
//
//    @Column(name = "description")
//    @NotEmpty
//    private String description;
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    @JsonIgnore
//    public boolean isNew() {
//        return (this.id == null);
//    }
//
//    public String getIsbn() {
//        return isbn;
//    }
//
//    public void setIsbn(String isbn) {
//        this.isbn = isbn;
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//
//    public String getField() {
//        return field;
//    }
//
//    public void setField(String field) {
//        this.field = field;
//    }
//
//    public String getAuthor() {
//        return author;
//    }
//
//    public void setAuthor(String author) {
//        this.author = author;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//}