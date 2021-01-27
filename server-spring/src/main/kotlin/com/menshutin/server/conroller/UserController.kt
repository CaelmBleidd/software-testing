package com.menshutin.server.conroller

import com.menshutin.server.model.User
import com.menshutin.server.service.UserService
import org.springframework.security.access.AccessDeniedException
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/users")
class UserController(private val userService: UserService) {
    @PostMapping("/add")
    fun addUser(@RequestParam username: String, @RequestParam email: String, @RequestParam password: String) =
        userService.save(User(0, username, email, password))

    @GetMapping("/{id}")
    fun findUser(@PathVariable id: Long): User {
        val user = userService.findById(id)
        return if (user.isPresent) user.get() else throw NoSuchElementException()

    }

    @GetMapping("/login")
    fun authorize(@RequestParam username: String, @RequestParam password: String) =
        userService.findByLogin(username).let {
            if (it.password == password) {
                it
            } else {
                throw AccessDeniedException("403 returned");
            }
        }
}