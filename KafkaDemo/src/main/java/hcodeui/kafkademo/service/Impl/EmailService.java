package hcodeui.kafkademo.service.Impl;

import jakarta.mail.MessagingException;

import java.io.IOException;

public interface EmailService {
    public void sendEmail(String to, String subject, String content, byte[] file, String filename) throws MessagingException, IOException;

}
