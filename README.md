# Blog API

A simple RESTful API for managing blog articles, built with Express, Sequelize, and MySQL.

## Features
- CRUD operations for articles (Create, Read, Update, Delete)
- JSON-based API
- CORS enabled

## Tech Stack
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- dotenv
- nodemon (development)

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- MySQL database

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd blog-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```env
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=localhost
   DB_DIALECT=mysql
   PORT=3000
   ```
4. Start the server:
   ```bash
   node server.js
   # or for development with auto-reload
   npx nodemon server.js
   ```

The server will run on `http://localhost:3000` by default.

## API Endpoints

### Get all articles
```
GET /api/articles/
```
**Response:** Array of articles

### Get article by ID
```
GET /api/articles/:id
```
**Response:** Article object or 404 if not found

### Create a new article
```
POST /api/articles
Content-Type: application/json

{
  "title": "My First Article",
  "content": "This is a test post about Express and Sequelize.",
  "tags": "express,nodejs,api"
}
```
**Response:** Created article object

### Update article by ID
```
PUT /api/articles/:id
Content-Type: application/json

{
  "title": "Updated Article Title",
  "content": "This content has been updated.",
  "tags": "express,update,sql"
}
```
**Response:** Updated article object or 404 if not found

### Delete article by ID
```
DELETE /api/articles/:id
```
**Response:** `{ "message": "Deleted" }` or 404 if not found

## Article Model
The `Article` model has the following fields:
- `title` (string, required)
- `content` (text, required)
- `tags` (string, optional)
- `publishedAt` (date, defaults to now)

## License

ISC 