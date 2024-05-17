package com.vnptit.ehealth.docs.service.impl;

import com.vnptit.ehealth.docs.entities.TopicEntity;
import com.vnptit.ehealth.docs.entities.UserEntity;
import com.vnptit.ehealth.docs.repository.BaseRepository;
import com.vnptit.ehealth.docs.repository.TopicRepository;
import com.vnptit.ehealth.docs.repository.UserRepository;
import com.vnptit.ehealth.docs.service.TopicService;
import com.vnptit.ehealth.docs.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TopicServiceImpl extends BaseServiceImpl<TopicEntity> implements TopicService {
    private final TopicRepository topicRepository;
    @Override
    protected BaseRepository<TopicEntity> getBaseRepository() {
        return topicRepository;
    }
}
