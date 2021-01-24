//package com.menshutin.server.repository
//
//import com.menshutin.server.model.Film
//import org.junit.jupiter.api.Test
//import org.springframework.beans.factory.annotation.Autowired
//
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
//
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
//import java.time.LocalDateTime
//
//
//@DataJpaTest
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
//class FilmRepositoryTest {
//    @Autowired
//    private var filmRepository: FilmRepository? = null
//
//    @Test
//    fun findAllReturnsJohnDoe() {
//        insertUsers()
//        val published = filmRepository!!.findAllPublished()
//        assert(published.size == 3)
//    }
//
//    private fun insertUsers() {
//        filmRepository?.save(Film(1, "title1", "description1", "directors1", true, LocalDateTime.now(), LocalDateTime.now()))
//        filmRepository?.save(Film(2, "title2", "description2", "directors1", false, LocalDateTime.now(), LocalDateTime.now()))
//        filmRepository?.save(Film(3, "title3", "description3", "directors2", true, LocalDateTime.now(), LocalDateTime.now()))
//        filmRepository?.save(Film(4, "title4", "description4", "directors2", false, LocalDateTime.now(), LocalDateTime.now()))
//        filmRepository?.save(Film(5, "title5", "description5", "directors1", true, LocalDateTime.now(), LocalDateTime.now()))
//        filmRepository?.flush()
//    }
//}
