package main

import (
    "log"
    "os"

    "github.com/joho/godotenv"
    "github.com/gin-gonic/gin"
    "gorm.io/driver/mysql"
    "gorm.io/gorm"

    "github.com/example/cms/backend/models"
    "github.com/example/cms/backend/routes"
)

func main() {
    godotenv.Load()
    dsn := os.Getenv("DB_DSN")
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal(err)
    }
    db.AutoMigrate(&models.Post{})

    r := gin.Default()
    routes.RegisterRoutes(r, db)

    r.Run(":8080")
}
