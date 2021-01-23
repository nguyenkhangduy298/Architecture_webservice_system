package rmit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rmit.model.Course;
import rmit.service.CourseService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping("/course")
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/course/{id}")
    public Course getCourseById(@PathVariable Long id) {
        return courseService.getCourseById(id);
    }

    @GetMapping("/course/field")
    public List<Course> getCourseByField(@RequestParam String field) {
        return courseService.getAllCoursesByField(field);
    }

    @GetMapping("/course/name")
    public List<Course> getCourseByName(@RequestParam String name) {
        return courseService.getCourseByName(name);
    }

    @PostMapping("/course")
    public Course saveCourse(@RequestBody Course course) {
        return courseService.saveCourse(course);
    }

    @DeleteMapping("/course/{id}")
    public Course deleteCourse(@PathVariable Long id) {
        return courseService.deleteCourse(id);
    }

    @PutMapping("/course")
    public Course updateCourse(@RequestBody Course course) {
        Course courseTemp = getCourseById(course.getId());
        if(courseTemp == null) return null;

        return courseService.updateCourse(course);
    }

    @GetMapping("/course/courseCode")
    public List<Course> findCourseByCode(@RequestParam String code) {
        return courseService.getCourseByCode(code);
    }
}
