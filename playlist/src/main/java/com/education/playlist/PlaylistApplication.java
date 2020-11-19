package com.education.playlist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @learn how to setup ComponentScan
// @ComponentScan("com.education")
// @Learn how to exclude a class from scanned packages
//@SpringBootApplication(exclude = { DataSourceConfiguration.class })
@SpringBootApplication
public class PlaylistApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlaylistApplication.class, args);
	}

}
