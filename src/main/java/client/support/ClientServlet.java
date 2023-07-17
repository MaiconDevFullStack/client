package client.support;

import java.io.IOException;

import javax.persistence.EntityManager;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import client.model.City;

@WebServlet(urlPatterns = "/city")
public class ClientServlet extends HttpServlet{
	
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
	}
	
	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		String name = req.getParameter("name");
		City city = new City();
		
		EntityManager em = PersistenceUnity.createEntityManager();
		em.getTransaction().begin();
		
		city.setNameCity(name);
		
		em.persist(city);
		em.getTransaction().commit();
		em.close();
		
	}
	
}
