package com.prasun.startspring.repositories;

import com.prasun.startspring.models.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRep extends JpaRepository<Session, Long> {
}
