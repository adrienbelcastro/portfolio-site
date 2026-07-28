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
@Table(name = "experience")
public class ExperienceEntity {
    @Id
    private Long id;
    private String title;
    private String company;
    private String location;
    private String date;
    private String[] description;
    private String color;
}
