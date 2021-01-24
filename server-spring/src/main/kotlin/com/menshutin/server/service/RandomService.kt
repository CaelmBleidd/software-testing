package com.menshutin.server.service

open class RandomService {
    open fun getRandomValue(min: Long, max: Long) = (min..max).random()
}