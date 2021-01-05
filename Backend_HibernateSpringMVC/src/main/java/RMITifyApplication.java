

import config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

//public class Main {
//
//    public static void main(String[] args){
//        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
//        context.register(AppConfig.class);
//
//        context.refresh();
//    }
//}

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class RMITifyApplication {
    public static void main(String[] args) {
        SpringApplication.run(RMITifyApplication.class, args);
    }
}
