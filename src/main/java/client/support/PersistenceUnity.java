package client.support;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class PersistenceUnity {
private static final EntityManagerFactory em = Persistence.createEntityManagerFactory("client");
	
	private PersistenceUnity() {
		
	}
	
	public static EntityManager createEntityManager() {
    	return createEntityManager(true);
    }
	
	private static EntityManager createEntityManager(boolean controlar) {
    	
        return em.createEntityManager();
    }
}
