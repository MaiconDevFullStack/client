module.exports = (sequelize, Sequelize) => {

  const Costumer = sequelize.define('costumer', {
	
		name : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		},
		datebirth : {
			type: "TIMESTAMP", allowNull : false
		},
		adress : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		}
	},
	{
		freezeTableName: true, 
		timestamps: false		
	}
 );

  return Costumer;
  
};