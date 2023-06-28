package client.rescources;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import client.model.City;
import client.support.PersistenceUnity;

@Path("/city")
public class CityImp {
	
	@Path("/insertCity")
	@POST
	public void insertCity(City city)throws Exception {
		EntityManager em = PersistenceUnity.createEntityManager();
		em.getTransaction().begin();
		if(city.getIdCity().equals(null)) {
			em.persist(city);
		} else {
			em.merge(city);
		}
		em.getTransaction().commit();
		em.close();
	}
	
	@Path("/getAll")
	@GET
	public List<City> getAll(){
		EntityManager em = PersistenceUnity.createEntityManager();
		try {
			Query query = (Query) em.createNativeQuery(" Select a "
													 + " from City a "
													 + " order by 1 desc ", City.class);
			List<City> cityList = query.getResultList();
			return cityList;
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			if(em.isOpen()) {
				em.close();
			}
		}
		return null;
	}
}
