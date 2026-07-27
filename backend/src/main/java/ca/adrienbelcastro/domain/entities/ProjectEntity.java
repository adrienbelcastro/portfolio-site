package ca.adrienbelcastro.domain.entities;

import java.util.List;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import org.hibernate.annotations.Type;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<TodoItem> todo;
    private String color;
    private String url;
    private String preview;

}
