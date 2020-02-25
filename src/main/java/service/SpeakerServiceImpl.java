package service;

import model.Speaker;
import repository.HibernateSpeakerRepositoryImpl;
import repository.SpeakerRepository;

import java.util.List;

public class SpeakerServiceImpl implements SpeakerService {

    private SpeakerRepository repository = new HibernateSpeakerRepositoryImpl();
    @Override
    public List<Speaker> findAll(){
        return repository.findall();
    }
}
