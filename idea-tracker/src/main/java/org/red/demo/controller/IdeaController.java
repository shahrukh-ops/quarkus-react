package org.red.demo.controller;

import org.red.demo.entity.Idea;
import org.red.demo.repository.IdeaRepository;


import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Date;
import java.util.List;

@Path("/api/v1/ideas")
public class IdeaController {

    @Inject
    IdeaRepository ideaRepository;
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Idea> getAllIdeas() {
        return ideaRepository.listAll();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    public Idea getIdeaById(@PathParam("id") Long id) {
        return ideaRepository.findById(id);
    }

    @GET
    @Path("/test")
    @Transactional
    @Produces(MediaType.TEXT_PLAIN)
    public String createIdea() {
        Idea idea = new Idea();
        idea.setDescription("random idea");
        idea.setName("new idea");
        idea.setSubmitDate(new Date());
        idea.setCompletionTargetDate(new Date());
        ideaRepository.persist(idea);
        return "Hello RESTEasy";
    }
}
