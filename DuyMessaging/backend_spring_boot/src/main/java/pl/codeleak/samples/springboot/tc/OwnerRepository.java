package pl.codeleak.samples.springboot.tc;

import org.hibernate.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@RestResource
@Repository
public interface OwnerRepository extends JpaRepository<Owner, Long> {

}
