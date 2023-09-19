module.exports = (sequelize, Sequelize) => {
//////////////////////////////////////
//CREATE TABLE CITY
/////////////////////////////////////
const City = sequelize.define('city', {
	
		name : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		}
	},
	{
		freezeTableName: true, 
		timestamps: false		
	});
	
  return City;
  
};