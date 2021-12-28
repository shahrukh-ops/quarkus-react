package org.red.demo.controller;

import org.red.demo.entity.Idea;
import org.red.demo.repository.IdeaRepository;


import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.Date;
import java.util.List;

@Path("/api/v1/idea")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class IdeaController {

    @Inject
    IdeaRepository ideaRepository;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @PermitAll
    public List<Idea> getAllIdeas() {
        return ideaRepository.listAll();
    }

    @GET
    @Path("/{id}")
    @PermitAll
    public Idea getIdeaById(@PathParam("id") Long id) {
        return ideaRepository.findById(id);
    }

    @POST
    @Transactional
    @RolesAllowed({"ADMIN","USER"})
    public Response createIdea(Idea idea){
        ideaRepository.persist(idea);
        return Response.created(URI.create("/api/v1/ideas/" +idea.getId())).build();
    }

    @PUT
    @Transactional
    @RolesAllowed({"ADMIN","USER"})
    public Response updateIdea(Idea idea){
        Idea ideaToBeUpdated = ideaRepository.findById(idea.getId());
        if(ideaToBeUpdated!=null){
            ideaToBeUpdated.setDescription(idea.getDescription());
        }
        return Response.ok().build();
    }

    @DELETE
    @Transactional
    @Path("{id}")
    @RolesAllowed({"ADMIN"})
    public Response deleteIdea(@PathParam("id") Long id){
        Idea ideaToBeDeleted = ideaRepository.findById(id);
        if(ideaToBeDeleted!=null){
            ideaRepository.delete(ideaToBeDeleted);
        }

        return Response.ok().build();
    }



//    @GET
//    @Path("/test")
//    @Transactional
//    @Produces(MediaType.TEXT_PLAIN)
//    @RolesAllowed("ADMIN")
//    public String createIdea() {
//        Idea idea = new Idea();
//        idea.setDescription("random idea");
//        idea.setName("new idea");
//        idea.setSubmitDate(new Date());
//        idea.setCompletionTargetDate(new Date());
//        ideaRepository.persist(idea);
//        return "Hello RESTEasy";
//    }
}
