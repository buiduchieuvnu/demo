package HCodeUI.DemoMongoDB;

import HCodeUI.DemoMongoDB.model.Address;
import HCodeUI.DemoMongoDB.model.Gender;
import HCodeUI.DemoMongoDB.model.User;
import HCodeUI.DemoMongoDB.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.time.LocalDateTime;

@SpringBootApplication
@EnableMongoRepositories
public class DemoMongoDbApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoMongoDbApplication.class, args);
	}
}
