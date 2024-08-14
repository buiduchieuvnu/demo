package com.example.identity_service.repository;

import com.example.identity_service.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, String> {
    Optional<Orders> findById(String orderId);
}
