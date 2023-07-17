package client.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CITY")
public class City {
	@Id
	@Column(name = "ID_CITY")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idCity;
	
	@Column(name = "NAME_CITY", nullable = false)
	private String nameCity;
	
	public City() {
		
	}
	
	public Integer getIdCity() {
		return idCity;
	}
	public void setIdCity(Integer idCity) {
		this.idCity = idCity;
	}
	public String getNameCity() {
		return nameCity;
	}
	public void setNameCity(String nameCity) {
		this.nameCity = nameCity;
	}
}
