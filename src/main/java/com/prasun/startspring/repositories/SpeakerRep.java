package com.prasun.startspring.repositories;

import com.prasun.startspring.models.Speaker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpeakerRep extends JpaRepository<Speaker, Long> {
}
