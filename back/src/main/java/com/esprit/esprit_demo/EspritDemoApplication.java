package com.esprit.esprit_demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(scanBasePackages = "com.esprit.esprit_demo")
public class EspritDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(EspritDemoApplication.class, args);
    }

}
