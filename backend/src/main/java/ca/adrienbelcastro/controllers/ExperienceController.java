package ca.adrienbelcastro.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.adrienbelcastro.domain.entities.ExperienceEntity;
import ca.adrienbelcastro.services.ExperienceService;

@RestController
@RequestMapping
public class ExperienceController {
    
    private final ExperienceService experienceService;

    public ExperienceController(ExperienceService experienceService) {
        this. experienceService = experienceService;
    }

    @GetMapping(path="/experience")
    public List<ExperienceEntity> getAllExperiences() {
        return experienceService.getAllExperiences();
    }
}
