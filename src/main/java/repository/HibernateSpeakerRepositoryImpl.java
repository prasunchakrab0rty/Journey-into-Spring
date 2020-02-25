package repository;

import model.Speaker;

import java.util.ArrayList;
import java.util.List;

public class HibernateSpeakerRepositoryImpl implements SpeakerRepository {
 @Override
 public List<Speaker> findall(){
     List<Speaker> speakers= new ArrayList<>();
     Speaker speaker = new Speaker();
     speaker.setFirstName("Prasun");
     speaker.setLastName("Chakraborty");
     speakers.add(speaker);
     return speakers;
 }

}
