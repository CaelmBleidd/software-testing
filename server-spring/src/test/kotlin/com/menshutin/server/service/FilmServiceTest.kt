package com.menshutin.server.service

import com.menshutin.server.model.Film
import com.menshutin.server.repository.FilmRepository
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.mockito.ArgumentMatchers.anyLong
import org.mockito.Mockito
import java.time.LocalDateTime
import java.util.*

class FilmServiceTest {

    @Test
    fun findRandomFilm() {
        val mock = Mockito.mock(RandomService::class.java)
        val filmRepository = Mockito.mock(FilmRepository::class.java)
        Mockito.`when`(mock.getRandomValue(anyLong(), anyLong())).thenReturn(3)

        val films = listOf(
            Film(1, "title1", "description1", "directors1", true, LocalDateTime.now(), LocalDateTime.now()),
            Film(2, "title2", "description2", "directors1", false, LocalDateTime.now(), LocalDateTime.now()),
            Film(3, "title3", "description3", "directors2", true, LocalDateTime.now(), LocalDateTime.now()),
            Film(4, "title4", "description4", "directors2", false, LocalDateTime.now(), LocalDateTime.now()),
            Film(5, "title5", "description5", "directors1", true, LocalDateTime.now(), LocalDateTime.now())
        )

        Mockito.`when`(filmRepository.findAll()).thenReturn(films)
        Mockito.`when`(filmRepository.findById(3)).thenReturn(Optional.of(films[2]))

        val film = FilmService(filmRepository).apply { randomService = mock }.findRandomFilm()
        assertEquals(film.title, "title3")
    }
}