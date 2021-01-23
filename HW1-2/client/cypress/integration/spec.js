describe('add film page', () => {
    it('All elements exist and visible', () => {
        cy.visit("http://localhost:8081/add")
        cy.contains("Title")
        cy.contains("Description")
        cy.contains("Directors")
        cy.contains("Submit")

        cy.get("#title").should('exist')
        cy.get("#title").should('be.visible')
        cy.get("#description").should('exist')
        cy.get("#description").should('be.visible')
        cy.get("#directors").should('exist')
        cy.get("#directors").should('be.visible')
        cy.get("#submitButton").should('exist')
        cy.get("#submitButton").should('be.visible')
        cy.get("#newFilmButton").should('not.exist')
    })

    it('Add film', () => {

        cy.visit("http://localhost:8081/add")
        cy.get("#title").type("%%%Test film").should('have.value', "%%%Test film")
        cy.get("#description").type("Test film description").should('have.value', "Test film description")
        cy.get("#directors").type("Test film director").should('have.value', "Test film director")
        cy.get("#newFilmButton").should('not.exist')


        cy.intercept('POST', '/api/films', {
            statusCode: 200,
            body: 'it worked!'
        })
        cy.get("#submitButton").click()
        cy.contains("You submitted successfully!")
        cy.get("#newFilmButton").should('exist')
        cy.get("#newFilmButton").should('be.visible')
        cy.get("#title").should('not.exist')
        cy.get("#description").should('not.exist')
        cy.get("#directors").should('not.exist')
        cy.get("#submitButton").should('not.exist')

        cy.get("#newFilmButton").click()
        cy.get("#title").should('exist')
        cy.get("#description").should('exist')
        cy.get("#directors").should('exist')
        cy.get("#submitButton").should('exist')
        cy.get("#newFilmButton").should('not.exist')

        cy.get("#title").should('be.empty')
        cy.get("#description").should('be.empty')
        cy.get("#directors").should('be.empty')
    })
})

describe('Navigation', () => {


    it('Navigation test', () => {
        cy.visit("http://localhost:8081/")
        cy.location('pathname').should('not.include', 'add')
        cy.location('pathname').should('not.include', 'films')


        cy.get('#moveToAdd').click()
        cy.location('pathname').should('include', 'add')

        cy.get('#moveToMainPage').click()
        cy.location('pathname').should('not.include', 'add')
        cy.location('pathname').should('not.include', 'films')


        cy.go('back')
        cy.location('pathname').should('include', 'add')

        cy.go('forward')
        cy.location('pathname').should('not.include', 'add')

        cy.get('#moveToFilms').click()
        cy.location('pathname').should('include', 'films')

    })
})

describe('FilmsList', () => {
    it('Edit film', () => {
        cy.visit("http://localhost:8081/films")

        cy.get("#filmsList").its('length').should('be.gte', 1)

        cy.get("#filmItem").click()

        cy.get("#title").should('not.be.empty')
        cy.get("#description").should('not.be.empty')
        cy.get("#directors").should('not.be.empty')
        cy.get("#editButton").should('exist')
        cy.get("#editButton").click()

        cy.location('pathname').should('include', 'films')

        cy.get("#updateFilm").click()
        cy.contains("The film was updated successfully!")
    })

    it('Search by title', () => {
        cy.visit("http://localhost:8081/films")

        cy.get("#filmsList").its('length').should('be.gte', 1)
        cy.get("#searchInput").type("the")
        cy.get("#searchButton").click()

        cy.get("#filmsList").each((item, _) => {
            cy.wrap(item).should('contain.text', 'the')
        })
    })
})