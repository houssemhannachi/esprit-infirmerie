package com.esprit.esprit_demo.dao;

import com.esprit.esprit_demo.entity.Occupation;
import com.esprit.esprit_demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    boolean existsUserByUsername(String username);
    boolean existsUserByEmail(String username);
    List<User> findAllByOccupation(Occupation occupation);
}