package ca.adrienbelcastro.domain.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "projects")
public class ProjectEntity {
    @Id 
    private Long id;
    private String name;
    private String description;
    private String progress;
    private String[] techstack;
    private String[] todo;
    private String color;
    private String url;
    private String preview;

}
