module.exports = (sequelize, Sequelize) => {

  const Sale = sequelize.define('sale', {
	
		value : {
			type: Sequelize.DataTypes.DOUBLE, allowNull : false
		},
		saleDate : {
			type: "TIMESTAMP", allowNull : false
		}
	},
	{
		freezeTableName: true, 
		timestamps: false		
	}
 );

  return Sale;
  
};