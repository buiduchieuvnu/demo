package com.vnptit.ehealth.docs.service.impl;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.vnptit.ehealth.docs.entities.UserEntity;
import com.vnptit.ehealth.docs.repository.BaseRepository;
import com.vnptit.ehealth.docs.repository.UserRepository;
import com.vnptit.ehealth.docs.service.UserService;

@Service
public class UserServiceImpl extends BaseServiceImpl<UserEntity> implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    protected BaseRepository<UserEntity> getBaseRepository() {
        return userRepository;
    }

    @Override
    public UserEntity findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public UserEntity create (UserEntity entity){
        entity.setPassword(new BCryptPasswordEncoder().encode(entity.getPassword()));
        return userRepository.save(entity);
    }
    @Override
    public UserEntity update (UserEntity entity){
//        UserEntity userEntity = userRepository.getById(entity.getId());
//        if(userEntity != null) {
//            UserEntity insertEntity = entity;
//            insertEntity.setPassword(userEntity.getPassword());
//            return userRepository.save(insertEntity);
//        }
//        return userRepository.save(entity);
//        entity.setPassword(new BCryptPasswordEncoder().encode(entity.getPassword()));
        return userRepository.save(entity);
    }
}
