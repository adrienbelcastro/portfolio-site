package ca.adrienbelcastro.mappers.impl;

import org.modelmapper.ModelMapper;

import ca.adrienbelcastro.domain.dto.ProjectDto;
import ca.adrienbelcastro.domain.entities.ProjectEntity;
import ca.adrienbelcastro.mappers.Mapper;

public class ProjectMapperImpl implements Mapper<ProjectEntity, ProjectDto> {

    private final ModelMapper modelMapper;

    public ProjectMapperImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @Override
    public ProjectDto mapTo(ProjectEntity projectEntity) {
        return modelMapper.map(projectEntity, ProjectDto.class);

    }
    
    @Override
    public ProjectEntity mapFrom(ProjectDto projectDto) {
        return modelMapper.map(projectDto, ProjectEntity.class);
    }
    
}
