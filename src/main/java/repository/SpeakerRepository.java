package repository;

import model.Speaker;

import java.util.List;

public interface SpeakerRepository {
    List<Speaker> findall();
}
