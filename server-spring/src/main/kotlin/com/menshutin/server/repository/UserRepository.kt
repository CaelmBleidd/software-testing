package com.menshutin.server.repository

import com.menshutin.server.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, Long> {
    @Query(value = "select * from users where username = ?1", nativeQuery = true)
    fun findByLogin(login: String): User
}
