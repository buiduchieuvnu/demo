package com.example.identity_service.service;

import com.example.identity_service.dto.request.OrderCreateRequest;
import com.example.identity_service.dto.request.OrderUpdateRequest;
import com.example.identity_service.entity.Orders;
import com.example.identity_service.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrderService {
    @Autowired
    private OrdersRepository ordersRepository;

    public List<Orders> getOrders() {
        return ordersRepository.findAll();
    }



    public Orders createAppointment (OrderCreateRequest request){
        Orders order = new Orders();
        order.setDoctor(request.getDoctor());
        order.setUser(request.getUser());
        order.setDate(request.getDate());
        order.setNote(request.getNote());
        return ordersRepository.save(order);
    }

    public Orders updateOrder(String orderId, OrderUpdateRequest request) {
        Orders order = ordersRepository.findById(orderId).orElseThrow();
        order.setDoctor(request.getDoctor());
        order.setUser(request.getUser());
        order.setDate(request.getDate());
        order.setNote(request.getNote());

        return ordersRepository.save(order);
    }

    public void deleteOrder(String orderId) { ordersRepository.deleteById(orderId);
    }
}
