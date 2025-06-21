package com.jusbuy.config;

import com.jusbuy.entity.Product;
import com.jusbuy.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {
    private final ProductRepository productRepository;

    public DataLoader(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) {
        if (productRepository.count() == 0) {
            productRepository.save(new Product(null, "Heavyweight Hoodie", "Premium cotton hoodie.", 59.99, "https://images.unsplash.com/photo-1512436991641-6745cdb1723f", 50));
            productRepository.save(new Product(null, "Performance T-Shirt", "Moisture-wicking gym tee.", 24.99, "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", 100));
            productRepository.save(new Product(null, "Training Shorts", "Lightweight workout shorts.", 29.99, "https://images.unsplash.com/photo-1506744038136-46273834b3fb", 80));
            productRepository.save(new Product(null, "Warm-Up Joggers", "Slim fit joggers.", 39.99, "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", 60));
            productRepository.save(new Product(null, "Mockneck Sweatshirt", "Modern mockneck style.", 49.99, "https://images.unsplash.com/photo-1517841905240-472988babdf9", 40));
        }
    }
} 