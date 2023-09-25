module.exports = (sequelize, Sequelize) => {

  const Service = sequelize.define('service', {
	
		name : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		},
		codeBar : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		},
		description : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		},
		costSale : {
			type: Sequelize.DataTypes.DOUBLE, allowNull : false
		}
	},
	{
		freezeTableName: true, 
		timestamps: false		
	}
 );

  return Service;
  
};