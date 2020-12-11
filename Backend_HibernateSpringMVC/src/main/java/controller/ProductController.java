package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import service.AllService;
import model.Product;

import java.util.List;

@Controller
@RestController
@RequestMapping(path = "/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    @Autowired
    private AllService allService;

    //CRUD
    //Comment
    @RequestMapping(path = "products", method = RequestMethod.GET)
    public List<Product> getAllProducts() {
        return allService.getAllProducts();
    }

    // Comment
    @RequestMapping(path = "products", method = RequestMethod.POST)
    public Product addProduct(@RequestBody Product product) {
        return allService.saveProduct(product);
    }

    // Comment
    @RequestMapping(path = "products", method = RequestMethod.PUT)
    public Product updateProduct(@RequestBody Product product) {
        return allService.updateProduct(product);
    }

    // Comment
    @RequestMapping(path = "products/{id}", method = RequestMethod.DELETE)
    public int deleteProduct(@PathVariable int id) {
        return allService.delete(id);
    }

}