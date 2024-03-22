package HCodeUI.DemoMongoDB.auth;

import HCodeUI.DemoMongoDB.model.Address;
import HCodeUI.DemoMongoDB.model.Gender;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisterRequest {
    @NotBlank(message = "The firstname is required")
    @Size(min = 2,max = 50)
    private String firstname;
    @NotBlank(message = "The lastname is required")
    @Size(min = 2,max = 50)
    private String lastname;
    @NotBlank(message = "The email is required")
    @Size(max = 50)
    @Email
    private String email;
    @NotNull(message = "The gender is required")
    private Gender gender;
    private Address address;
    private LocalDateTime created;
}
