package ca.adrienbelcastro.services;

import java.util.List;

import org.springframework.stereotype.Service;

import ca.adrienbelcastro.domain.entities.ProjectEntity;
import ca.adrienbelcastro.repositories.ProjectsRepository;

@Service
public class ProjectsService {
    
    private final ProjectsRepository projectsRepository;

    public ProjectsService(ProjectsRepository projectsRepository) {
        this.projectsRepository = projectsRepository;
    }

    public List<ProjectEntity> getAllProjects () {
        return projectsRepository.findAll();
    }

}
