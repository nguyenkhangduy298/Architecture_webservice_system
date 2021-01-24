package rmit.service;

import rmit.model.Course;

import java.util.List;

public interface ICourseService {
    List<Course> getAllCourses();
    Course saveCourse(Course course);
    Course deleteCourse(Long id);
    Course updateCourse(Course course);

    Course getCourseById(Long id);
    List<Course> getCourseByName(String name);
    List<Course> getAllCoursesByField(String field);

    List<Course> getCourseByCode(String courseCode);
}
