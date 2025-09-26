package ca.adrienbelcastro.domain.dto;

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
    private String[] todo;
    private String color;
    private String url;
    private String preview;
}
