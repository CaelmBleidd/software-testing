package com.menshutin.server.service

import com.menshutin.server.model.Film
import com.menshutin.server.repository.FilmRepository
import org.springframework.stereotype.Service

@Service
class FilmService(private val filmRepository: FilmRepository) {
    fun findById(id: Long): Film = filmRepository.findById(id).orElseThrow { NoSuchElementException("Task $id not found") }

    fun findAll(): List<Film> = filmRepository.findAll()

    fun findAllPublished() = filmRepository.findAllPublished()

    fun findAllByTitle(title: String) = filmRepository.findAllByTitle(title)

    fun add(task: Film) = filmRepository.save(task)

    fun update(task: Film) = filmRepository.save(task)

    fun deleteById(id: Long) = findById(id).let { filmRepository.delete(it) }

    fun deleteAll() = filmRepository.deleteAll()
}