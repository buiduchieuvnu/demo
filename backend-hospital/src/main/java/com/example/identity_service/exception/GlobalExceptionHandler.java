package com.example.identity_service.exception;
// đưa ra các thông báo ý nghĩa về lỗi cho các client


import com.example.identity_service.dto.request.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.swing.text.html.parser.Entity;

@ControllerAdvice
public class GlobalExceptionHandler {
    // nếu có sự kiện RuntimeException trong cả hệ thống của ta thì sẽ xử lý ở đây
    @ExceptionHandler(value = RuntimeException.class)
    // ResponseEntity<String>: của spring nhằm đưa ra phản hồi dạng apiresponse
    ResponseEntity<ApiResponse> handlingRuntimeException(RuntimeException exception) {
        ApiResponse apiResponse = new ApiResponse();

        apiResponse.setCode(1001);
        apiResponse.setMessage(exception.getMessage());
        // badRequeets(): thông báo lỗi 400 - phía bên client có lỗi
        return ResponseEntity.badRequest().body(apiResponse);
    }

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    ResponseEntity<String> handlingMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
        return ResponseEntity.badRequest().body(exception.getFieldError().getDefaultMessage());
    }

}
