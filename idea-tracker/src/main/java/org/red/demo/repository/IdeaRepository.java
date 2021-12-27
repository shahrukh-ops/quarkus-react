package org.red.demo.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.red.demo.entity.Idea;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class IdeaRepository implements PanacheRepository<Idea> {




}
