package com.example.identity_service.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
// <T> cho phép ApiResponse chưa bất k kiểu trả về nào
public class ApiResponse<T>{
    // một code để cho user họ biết có thể tra
    int code = 1000;
    //
    String message;
    // kết quả trả về
    T result;


}
