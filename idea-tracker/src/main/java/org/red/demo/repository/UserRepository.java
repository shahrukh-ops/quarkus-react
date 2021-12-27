package org.red.demo.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.red.demo.entity.User;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserRepository implements PanacheRepository<User> {
}
