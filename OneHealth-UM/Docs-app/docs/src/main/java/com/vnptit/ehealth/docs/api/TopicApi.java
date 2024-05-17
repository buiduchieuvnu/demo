package com.vnptit.ehealth.docs.api;

import com.vnptit.ehealth.docs.entities.TopicEntity;
import com.vnptit.ehealth.docs.entities.UserEntity;
import com.vnptit.ehealth.docs.model.BaseResponse;
import com.vnptit.ehealth.docs.model.UserDto;
import com.vnptit.ehealth.docs.repository.TopicRepository;
import com.vnptit.ehealth.docs.repository.UserRepository;
import com.vnptit.ehealth.docs.service.BaseService;
import com.vnptit.ehealth.docs.service.TopicService;
import com.vnptit.ehealth.docs.service.UserService;
import com.vnptit.ehealth.docs.utils.ContextUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/topic")
@RequiredArgsConstructor
public class TopicApi extends BaseApi<TopicEntity> {
    private final TopicService topicService;
    @Override
    protected BaseService<TopicEntity> getBaseService() {
        return topicService;
    }
}
