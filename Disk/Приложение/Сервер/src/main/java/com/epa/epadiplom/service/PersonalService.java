package com.epa.epadiplom.service;

import com.epa.epadiplom.entity.Personal;
import com.epa.epadiplom.repository.PersonalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PersonalService {

    private final PersonalRepository personalRepository;

//    public boolean savePersonal(Personal personal) {
//        if(personalRepository.findById(personal.getIdPersonal())) {
//            personalRepository.save(personal);
//            return true;
//        }
//        return false;
//    }
}
