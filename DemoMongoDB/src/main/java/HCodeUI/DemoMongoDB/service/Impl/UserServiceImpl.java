package HCodeUI.DemoMongoDB.service.Impl;

import HCodeUI.DemoMongoDB.model.Address;
import HCodeUI.DemoMongoDB.model.User;
import HCodeUI.DemoMongoDB.repository.UserRepository;
import HCodeUI.DemoMongoDB.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final MongoTemplate mongoTemplate;
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void insert(User user) {
        userRepository.insert(user);
    }

    @Override
    public boolean existByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public void updateUser(User user) {

        Query query = new Query(Criteria.where("email").is(user.getEmail()));
        Update update = new Update();
        update.set("address", Address.builder().city(user.getAddress().getCity()).country(user.getAddress().getCountry()));
        mongoTemplate.updateFirst(query, update, User.class);
    }

    @Override
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}
