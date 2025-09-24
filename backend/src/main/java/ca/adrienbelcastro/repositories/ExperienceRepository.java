package ca.adrienbelcastro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.adrienbelcastro.domain.entities.ExperienceEntity;

@Repository
public interface ExperienceRepository extends JpaRepository<ExperienceEntity, Long> {
}
