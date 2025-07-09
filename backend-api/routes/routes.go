package routes

import (
    "github.com/gin-gonic/gin"
    "gorm.io/gorm"

    "github.com/example/cms/backend/controllers"
)

func RegisterRoutes(r *gin.Engine, db *gorm.DB) {
    r.Use(func(c *gin.Context) {
        c.Set("db", db)
        c.Next()
    })

    api := r.Group("/api")
    {
        api.GET("/posts", controllers.GetPosts)
    }
}
