package hcodeui.kafkademo.dto;

import lombok.Data;
import java.io.Serializable;

@Data
public class EmailDTO implements Serializable {
    private String from;
    private String to;
    private String subject;
    private String text;
    private String fileName;
    private byte[] multipartFile;
}
