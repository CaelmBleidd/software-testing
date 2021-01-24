package com.menshutin.server.model

import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "films")
class Film() {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0
    var title: String? = null
    var description: String? = null
    var directors: String? = null
    var published: Boolean? = null

    @CreationTimestamp
    var createdAt: LocalDateTime? = null

    @UpdateTimestamp
    var updatedAt: LocalDateTime? = null

    constructor(id: Long, title: String?, description: String?, directors: String?, published: Boolean?, createdAt: LocalDateTime?, updatedAt: LocalDateTime?): this() {
        this.id = id
        this.title = title
        this.description = description
        this.directors = directors
        this.published = published
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
