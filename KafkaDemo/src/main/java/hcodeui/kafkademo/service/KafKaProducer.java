package hcodeui.kafkademo.service;

import hcodeui.kafkademo.constants.KafkaTopic;
import hcodeui.kafkademo.dto.EmailDTO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KafKaProducer {
    private static final Logger LOGGER = LoggerFactory.getLogger(KafKaProducer.class);
    private final KafkaTemplate<String, EmailDTO> kafkaTemplate;

    public void sendMessage(EmailDTO emailDTO) {
        LOGGER.info(String.format("%s send message to -> %s", emailDTO.getFrom(), emailDTO.getTo()));
        Message<EmailDTO> message = MessageBuilder.withPayload(emailDTO).setHeader(KafkaHeaders.TOPIC, KafkaTopic.EMAIL_TOPIC).build();
        kafkaTemplate.send(message);
    }
}
