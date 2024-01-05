const { DOUBLE } = require("sequelize");

module.exports = (sequelize, Sequelize) => {

  const Product = sequelize.define('product', {
	
		name : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		},
		codeBar : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		},
		description : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		},
		costPrice : {
			type: Sequelize.DataTypes.DOUBLE, allowNull : false
		},
		costSale : {
			type: Sequelize.DataTypes.DOUBLE, allowNull : false
		},
		expDate : {
			type: "TIMESTAMP", allowNull : false
		},
		type : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		}
	},
	{
		freezeTableName: true, 
		timestamps: false		
	}
 );

  return Product;
  
};