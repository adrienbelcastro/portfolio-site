package ca.adrienbelcastro.domain.dto;

import java.util.List;

import ca.adrienbelcastro.domain.entities.TodoItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProjectDto {
    private Long id;
    private String name;
    private String description;
    private String progress;
    private String[] techstack;
    private List<TodoItem> todo;
    private String color;
    private String url;
    private String preview;
}
