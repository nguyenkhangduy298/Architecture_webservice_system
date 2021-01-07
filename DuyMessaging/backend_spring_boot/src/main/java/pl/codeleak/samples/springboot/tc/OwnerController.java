package pl.codeleak.samples.springboot.tc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/owners")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OwnerController {

        @Autowired
        private OwnerRepository repository;

        @RequestMapping(path = "", method = RequestMethod.GET)
        public List<Owner> getAllOwners() {
            return repository.findAll();
        }

        @RequestMapping(path = "", method = RequestMethod.POST)
        public Owner addOwner(@RequestBody Owner owner) {
                repository.save(owner);
                return owner;
        }


}

