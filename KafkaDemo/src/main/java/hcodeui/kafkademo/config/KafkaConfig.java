package hcodeui.kafkademo.config;

import hcodeui.kafkademo.constants.KafkaTopic;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class KafkaConfig {
    @Bean
    public NewTopic EmailTopic(){
        return TopicBuilder.name(KafkaTopic.EMAIL_TOPIC).build();
    }
}