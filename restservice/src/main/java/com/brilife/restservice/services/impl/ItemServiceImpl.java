package com.enigma.restservice.services.impl;

import com.enigma.restservice.entities.Item;
import com.enigma.restservice.exceptions.EntityNotFoundException;
import com.enigma.restservice.repositories.ItemRepository;
import com.enigma.restservice.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Transactional()
@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository repository;

    @Override
    public Item save(Item entity) {
        return repository.save(entity);
    }

    @Override
    public Item removeById(Integer id) {
        Item entity = findById(id);
        repository.delete(entity);
        return entity;
    }

    @Override
    public Item findById(Integer id) {
        return repository.findById(id).orElseThrow(() -> {
            return new EntityNotFoundException();
        });
    }

    @Override
    public Page<Item> findAll(Item entity, int page, int size, Sort.Direction direction) {
        Sort s = Sort.Direction.DESC.equals(direction) ? Sort.by(direction, "id").descending() : Sort.by("id");

        ExampleMatcher matcher = ExampleMatcher.matchingAll()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        return repository.findAll(Example.of(entity, matcher), PageRequest.of(page, size, s));
    }
}
