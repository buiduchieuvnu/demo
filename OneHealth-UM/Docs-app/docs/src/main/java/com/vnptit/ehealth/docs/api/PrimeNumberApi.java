package com.vnptit.ehealth.docs.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.vnptit.ehealth.docs.model.BaseResponse;
import test.example.PrimeNumberChecker;

@RestController
@CrossOrigin
@RequestMapping("/public/prime-number")
public class PrimeNumberApi {
    PrimeNumberChecker primeNumberChecker = new PrimeNumberChecker();

    @PostMapping("/test")
    public BaseResponse test(@RequestBody Integer testNumber) {
        return new BaseResponse("00", "Cập nhật dữ liệu thành công", primeNumberChecker.isPrime(testNumber));
    }
}
