package service;

import model.Speaker;
import repository.SpeakerRepository;

import java.util.List;

public class SpeakerServiceImpl implements SpeakerService {

    private SpeakerRepository repository;
    @Override
    public List<Speaker> findAll(){
        return repository.findall();
    }

    public void setRepository(SpeakerRepository repository) {
        this.repository = repository;
    }
}
