package com.menshutin.server.model

import org.hibernate.annotations.ColumnTransformer
import javax.persistence.*

@Entity
@Table(name = "users")
class User() {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var userId: Long = 0
    @Column(unique=true)
    var username: String? = null
    @Column(unique=true)
    var email: String? = null
    var password: String? = null

    constructor(userId: Long, username: String?, email: String?, password: String?) : this() {
        this.userId = userId
        this.username = username
        this.email = email
        this.password = password
    }
}