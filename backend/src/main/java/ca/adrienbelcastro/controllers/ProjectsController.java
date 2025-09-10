package ca.adrienbelcastro.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.adrienbelcastro.domain.entities.ProjectEntity;
import ca.adrienbelcastro.services.ProjectsService;

@RestController
@RequestMapping
public class ProjectsController {

    private final ProjectsService projectsService;

   

    public ProjectsController(ProjectsService projectsService) {
        this.projectsService = projectsService;
    }

    @GetMapping(path = "/projects")
    public List<ProjectEntity> getAllProjects() {
        return projectsService.getAllProjects();
    }
}
