package com.menshutin.server.service

import com.menshutin.server.model.User
import com.menshutin.server.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {
    fun findById(userId: Long) = userRepository.findById(userId)

    fun save(user: User) = userRepository.save(user)

    fun findByLogin(login: String) = userRepository.findByLogin(login)
}