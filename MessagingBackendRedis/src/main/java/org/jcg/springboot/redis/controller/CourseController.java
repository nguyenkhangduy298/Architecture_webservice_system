package org.jcg.springboot.redis.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/redis/course")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CourseController {

    private static final Logger LOG = LoggerFactory.getLogger(UserController.class);

}
