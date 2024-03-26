package hcodeui.kafkademo.service;

import hcodeui.kafkademo.dto.EmailDTO;
import hcodeui.kafkademo.service.Impl.EmailService;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@KafkaListener(topics = "email-topic", groupId = "group-id")
@RequiredArgsConstructor
public class KafkaConsumer {
    private final EmailService emailService;

    @KafkaHandler
    public void consumeEmailMessage(EmailDTO emailDTO) throws MessagingException, IOException {
        emailService.sendEmail(emailDTO.getTo(), emailDTO.getSubject(), emailDTO.getText(), emailDTO.getMultipartFile(), emailDTO.getFileName());
    }
}
