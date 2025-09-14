package ca.adrienbelcastro.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExperienceDto {
    private Long id;
    private String title;
    private String company;
    private String location;
    private String date;
    private String[] description;
}
