package hcodeui.kafkademo.controller;

import hcodeui.kafkademo.dto.EmailDTO;
import hcodeui.kafkademo.service.KafKaProducer;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RestController
@RequestMapping("/api/v1/email")
@RequiredArgsConstructor
public class EmailController {
    private static final Logger LOGGER = LoggerFactory.getLogger(EmailController.class);
    private final KafKaProducer kafKaProducer;

    @PostMapping("")
    public ResponseEntity<?> sendEmail(@ModelAttribute EmailDTO emailDTO, @RequestPart("attachment") MultipartFile attachment) throws IOException, MessagingException {
        emailDTO.setMultipartFile(attachment.getBytes());
        emailDTO.setFileName(attachment.getOriginalFilename());
        kafKaProducer.sendMessage(emailDTO);
        return ResponseEntity.ok("Email send successfully");
    }
}