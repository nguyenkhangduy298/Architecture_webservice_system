package com.example.rmitify.model;

import org.springframework.lang.Nullable;

import javax.persistence.*;

@Entity
@Table(name = "courses")
public class Course {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String courseCode;

    @Column
    private String field;

    @Column
    private String name;

    @Column
    @Nullable
    private String description;

    public Long getId() {
        return id;
    }

    public String getField() {
        return field;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Nullable
    public String getDescription() {
        return description;
    }

    public String getCourseCode() {
        return courseCode;
    }
}
