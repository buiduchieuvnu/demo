package com.example.identity_service.controller;

import com.example.identity_service.dto.request.OrderUpdateRequest;

import com.example.identity_service.service.OrderService;
import com.example.identity_service.entity.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class OrdersController {
    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Orders> getOders() {
        return orderService.getOrders();
    }


    // update thông tin
    @PutMapping("/orders/{orderId}")
    Orders updateOrder(@PathVariable String orderId, @RequestBody OrderUpdateRequest request) {
        return orderService.updateOrder(orderId, request);
    }

    // hàm không trả về gì nên dùng String
    @DeleteMapping("orders/{orderId}")
    String deleteOrder(@PathVariable String orderId) {
        orderService.deleteOrder(orderId);
        return "Order has been delete";
    }
}
