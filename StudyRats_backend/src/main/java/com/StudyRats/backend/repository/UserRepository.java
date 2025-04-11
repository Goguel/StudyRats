package com.StudyRats.backend.repository;

import com.StudyRats.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
