package com.menshutin.server.repository

import com.menshutin.server.model.Film
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface FilmRepository : JpaRepository<Film, Long> {

    @Query("select * from films where published = true", nativeQuery = true)
    fun findAllPublished(): List<Film>

    @Query("select * from films where title ilike concat('%', :title, '%')", nativeQuery = true)
    fun findAllByTitle(@Param("title") title: String): List<Film>
}