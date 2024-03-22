package HCodeUI.DemoMongoDB.service;

import HCodeUI.DemoMongoDB.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUsers();
    public void insert(User user);
    public boolean existByEmail(String email);
    public void updateUser(User user);
    public void deleteUser(String id);
}
