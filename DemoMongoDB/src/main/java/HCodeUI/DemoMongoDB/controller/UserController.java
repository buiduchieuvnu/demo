package HCodeUI.DemoMongoDB.controller;

import HCodeUI.DemoMongoDB.auth.AuthResponse;
import HCodeUI.DemoMongoDB.auth.RegisterRequest;
import HCodeUI.DemoMongoDB.model.User;
import HCodeUI.DemoMongoDB.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;
    @GetMapping()
    public List<User> fetchAllUser() {
        return userService.getAllUsers();
    }
    @PatchMapping
    public ResponseEntity<?> updateUser(@RequestBody User user){
        userService.updateUser(user);
        return ResponseEntity.ok().body("Cập nhật thành công");
    }
    @DeleteMapping
    public ResponseEntity<?> deleteUser(@RequestParam(value = "id") String id){
        userService.deleteUser(id);
        return ResponseEntity.ok().body("Cập nhật thành công");
    }
}
