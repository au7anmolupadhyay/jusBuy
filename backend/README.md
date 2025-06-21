# JusBuy Backend

Spring Boot 3.x E-Commerce REST API

## Features
- JWT Authentication & Authorization
- REST APIs for Products, Cart, Orders, Users
- MySQL + Spring Data JPA
- BCrypt password hashing
- CORS enabled for frontend
- 5 Sample products auto-loaded

## Requirements
- Java 17+
- MySQL 8+

## Setup

1. **Clone the repo**
2. **Configure MySQL**
   - Create a database: `jusbuy_db`
   - Set your DB username/password in `src/main/resources/application.properties`

3. **Run backend**
   ```bash
   ./mvnw spring-boot:run
   ```

## API Endpoints

- `POST   /api/auth/register` — Register user
- `POST   /api/auth/login` — Login user
- `GET    /api/products` — List products
- `GET    /api/products/{id}` — Product details
- `GET    /api/cart` — Get cart
- `POST   /api/cart` — Add to cart
- `DELETE /api/cart` — Remove from cart
- `POST   /api/orders` — Place order
- `GET    /api/orders` — List user orders

## Environment Variables
Edit `src/main/resources/application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/jusbuy_db
spring.datasource.username=YOUR_DB_USER
spring.datasource.password=YOUR_DB_PASSWORD
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
jwt.secret=your_jwt_secret_key
```

---

## License
MIT 