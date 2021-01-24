package com.menshutin.server.conroller

import com.menshutin.server.model.Film
import com.menshutin.server.service.FilmService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/film")
class FilmController(private val filmService: FilmService) {
    @PostMapping
    fun create(task: Film) = filmService.add(task)

    @GetMapping("/{id}")
    fun read(@PathVariable id: Long) = filmService.findById(id)

    @GetMapping("/published")
    fun published() = filmService.findAllPublished()

    @GetMapping("/title")
    fun findByTitle(@RequestParam title: String) = filmService.findAllByTitle(title)

    @PutMapping
    fun update(@RequestBody task: Film) = filmService.update(task)

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Long) = filmService.deleteById(id)

    @DeleteMapping("/deleteAll")
    fun deleteAll() = filmService.deleteAll()

    @GetMapping
    fun findAll() = filmService.findAll()
}