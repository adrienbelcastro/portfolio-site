package ca.adrienbelcastro.mappers.impl;

import org.modelmapper.ModelMapper;

import ca.adrienbelcastro.domain.dto.ExperienceDto;
import ca.adrienbelcastro.domain.entities.ExperienceEntity;
import ca.adrienbelcastro.mappers.Mapper;

public class ExperienceMapperImpl implements Mapper<ExperienceEntity, ExperienceDto> {

    private final ModelMapper modelMapper;

    public ExperienceMapperImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @Override
    public ExperienceDto mapTo(ExperienceEntity experienceEntity) {
        return modelMapper.map(experienceEntity, ExperienceDto.class);

    }
    
    @Override
    public ExperienceEntity mapFrom(ExperienceDto experienceDto) {
        return modelMapper.map(experienceDto, ExperienceEntity.class);
    }
}