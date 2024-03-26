package hcodeui.kafkademo.service;

import hcodeui.kafkademo.service.Impl.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {
    private final JavaMailSender mailSender;

    @Override
    public void sendEmail(String to, String subject, String text, byte[] file, String filename) throws MessagingException, IOException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        String content = "<p>Hello <strong>" + to + "</strong> account,</p>\n" +
                "<p>Your salary was " + text + " in the previous month</p>\n";
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(content, true);

        // Giải mã chuỗi Base64 thành mảng byte và đính kèm vào email
        helper.addAttachment(filename, new ByteArrayResource(file));

        mailSender.send(message);
    }
}
