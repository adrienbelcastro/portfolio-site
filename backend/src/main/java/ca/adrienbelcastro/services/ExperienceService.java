package ca.adrienbelcastro.services;

import java.util.List;

import org.springframework.stereotype.Service;

import ca.adrienbelcastro.domain.entities.ExperienceEntity;
import ca.adrienbelcastro.repositories.ExperienceRepository;

@Service
public class ExperienceService {

    private final ExperienceRepository experienceRepository;

    public ExperienceService(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }

    public List<ExperienceEntity> getAllExperiences() {
        return experienceRepository.findAll();
    }
    
}
