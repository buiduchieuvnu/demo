package com.example.hospital.Repository;

import com.example.hospital.Entity.AppointmentsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentsRepository  extends JpaRepository<AppointmentsEntity,Long> {
}
