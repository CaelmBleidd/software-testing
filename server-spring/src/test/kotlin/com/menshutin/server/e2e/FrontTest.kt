package com.menshutin.server.e2e

import com.codeborne.selenide.CollectionCondition.sizeGreaterThanOrEqual
import com.codeborne.selenide.Condition.exist
import com.codeborne.selenide.Selenide.*
import org.junit.jupiter.api.Test
import org.openqa.selenium.By

class FrontTest {
    @Test
    fun allElementsExistAndVisible() {
        open("http://localhost:8081/add")
        `$`(By.id("title")).should(exist)
        `$`(By.id("description")).should(exist)
        `$`(By.id("submitButton")).should(exist)
        `$`(By.id("directors")).should(exist)
        `$`(By.id("newFilmButton")).shouldNot(exist)
    }

    @Test
    fun editFilm() {
        open("http://localhost:8081/films")
        `$$`(By.id("filmsList")).shouldHave(sizeGreaterThanOrEqual(1))
        `$`(By.id("filmItem")).click()

        `$`(By.id("editButton")).click()
        `$`(By.id("title")).should(exist)
        `$`(By.id("description")).should(exist)
        `$`(By.id("directors")).should(exist)

        `$`(By.id("updateFilm")).click()
    }

    @Test
    fun searchByTitle() {
        open("http://localhost:8081/films")
        `$$`(By.id("filmsList")).shouldHave(sizeGreaterThanOrEqual(1))
        `$`(By.id("searchInput")).`val`("the").pressEnter()
        `$$`(By.id("filmsList")).texts().single()!!.split("\n")
            .all { "the" in it.toLowerCase() }
    }
}