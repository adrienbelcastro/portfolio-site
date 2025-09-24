package ca.adrienbelcastro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.adrienbelcastro.domain.entities.ProjectEntity;

@Repository
public interface ProjectsRepository extends JpaRepository<ProjectEntity, Long> {
}
