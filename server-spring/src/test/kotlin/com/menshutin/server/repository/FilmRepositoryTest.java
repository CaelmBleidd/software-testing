//package com.menshutin.server.repository;
//
//import com.menshutin.server.model.Film;
//import org.junit.ClassRule;
//import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.boot.test.util.TestPropertyValues;
//import org.springframework.context.ApplicationContextInitializer;
//import org.springframework.context.ConfigurableApplicationContext;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.transaction.annotation.Transactional;
//import org.testcontainers.containers.PostgreSQLContainer;
//
//import java.time.LocalDateTime;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertTrue;
//
//@RunWith(SpringRunner.class)
//@DataJpaTest
//@AutoConfigureTestDatabase(replace = Replace.NONE)
//@ContextConfiguration(initializers = {FilmRepositoryTest.Initializer.class})
//public class FilmRepositoryTest {
//
//    @ClassRule
//    public static PostgreSQLContainer<?> postgreSQLContainer = new PostgreSQLContainer<>("postgres:latest")
//        .withDatabaseName("kino")
//        .withUsername("CaelmBleidd")
//        .withPassword("");
//
//    @Autowired
//    private FilmRepository filmRepository;
//
//    @Test
//    public void testOpen() {
//        assertTrue(postgreSQLContainer.isRunning());
//    }
//
//    @Test
//    @Transactional
//    public void testFindAllPublished() {
//        insertUsers();
//        var published = filmRepository.findAllPublished();
//        assertEquals(published.size(), 3);
//    }
//
//
//    private void insertUsers() {
//        filmRepository.save(new Film(1, "title1", "description1", "directors1", true, LocalDateTime.now(), LocalDateTime.now()));
//        filmRepository.save(new Film(2, "title2", "description2", "directors1", false, LocalDateTime.now(), LocalDateTime.now()));
//        filmRepository.save(new Film(3, "title3", "description3", "directors2", true, LocalDateTime.now(), LocalDateTime.now()));
//        filmRepository.save(new Film(4, "title4", "description4", "directors2", false, LocalDateTime.now(), LocalDateTime.now()));
//        filmRepository.save(new Film(5, "title5", "description5", "directors1", true, LocalDateTime.now(), LocalDateTime.now()));
//        filmRepository.flush();
//    }
//
//
//    static class Initializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {
//
//        @Override
//        public void initialize(ConfigurableApplicationContext configurableApplicationContext) {
//
//            TestPropertyValues
//                .of("spring.datasource.url=" + postgreSQLContainer.getJdbcUrl(),
//                    "spring.datasource.username=" + postgreSQLContainer.getUsername(),
//                    "spring.datasource.password=" + postgreSQLContainer.getPassword())
//                .applyTo(configurableApplicationContext.getEnvironment());
//
//        }
//
//    }
//
//}