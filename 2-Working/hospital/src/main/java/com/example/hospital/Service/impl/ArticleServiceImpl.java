package com.example.hospital.Service.impl;

import com.example.hospital.Entity.ArticleEntity;
import com.example.hospital.Model.request.ArticleRequest;
import com.example.hospital.Model.response.ArticleResponse;
import com.example.hospital.Repository.ArticleRepository;
import com.example.hospital.Repository.MajorRepository;
import com.example.hospital.Service.ArticleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public List<ArticleResponse> findByRequest(ArticleRequest request) {
        List<ArticleEntity> list = articleRepository.findByRequest(request);
        List<ArticleResponse> responseList = new ArrayList<>();
        for (ArticleEntity articleEntity : list) {
            responseList.add(modelMapper.map(articleEntity, ArticleResponse.class));
        }
        return responseList;
    }
}
