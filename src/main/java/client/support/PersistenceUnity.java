package client.support;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class PersistenceUnity {
	
	private static final EntityManagerFactory em = Persistence.createEntityManagerFactory("client");
	
	public static EntityManager createEntityManager() {
	    return em.createEntityManager();
	}
	
	
}
