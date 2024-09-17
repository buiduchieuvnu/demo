package com.example.hospital.Service.impl;

import com.example.hospital.Entity.DiseasesEntity;
import com.example.hospital.Model.dto.DiseasesDTO;
import com.example.hospital.Repository.DiseasesRepository;
import com.example.hospital.Service.DiseasesService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class DiseasesServiceImpl implements DiseasesService {

    @Autowired
    private DiseasesRepository diseasesRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<DiseasesDTO> findDiseasesByChar(String s) {
        List<DiseasesEntity> entityList = diseasesRepository.findByStatusAndNameStartingWith(1,s);
        List<DiseasesDTO> dtoList = new ArrayList<>();
        for(DiseasesEntity entity : entityList) {
            DiseasesDTO diseasesDTO = modelMapper.map(entity, DiseasesDTO.class);
            dtoList.add(diseasesDTO);
        }
        Collections.sort(dtoList, Comparator.comparing(p -> p.getName()));

        return dtoList;
    }
}
