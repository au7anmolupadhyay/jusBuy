package com.jusbuy.controller;

import com.jusbuy.dto.CartItemRequest;
import com.jusbuy.entity.CartItem;
import com.jusbuy.entity.Product;
import com.jusbuy.entity.User;
import com.jusbuy.repository.CartItemRepository;
import com.jusbuy.repository.ProductRepository;
import com.jusbuy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<CartItem> getCart(Authentication authentication) {
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow();
        return cartItemRepository.findByUserId(user.getId());
    }

    @PostMapping
    public ResponseEntity<?> addToCart(@RequestBody CartItemRequest request, Authentication authentication) {
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow();
        Product product = productRepository.findById(request.getProductId()).orElseThrow();
        CartItem item = new CartItem();
        item.setUser(user);
        item.setProduct(product);
        item.setQuantity(request.getQuantity());
        cartItemRepository.save(item);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping
    public ResponseEntity<?> removeFromCart(@RequestParam Long productId, Authentication authentication) {
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow();
        cartItemRepository.deleteByUserIdAndProductId(user.getId(), productId);
        return ResponseEntity.ok().build();
    }
} 