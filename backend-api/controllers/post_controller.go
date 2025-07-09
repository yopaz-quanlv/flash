package controllers

import (
    "net/http"

    "github.com/gin-gonic/gin"
    "gorm.io/gorm"
    "github.com/example/cms/backend/models"
)

func GetPosts(c *gin.Context) {
    db := c.MustGet("db").(*gorm.DB)
    var posts []models.Post
    db.Find(&posts)
    c.JSON(http.StatusOK, posts)
}
