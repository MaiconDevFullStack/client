module.exports = (sequelize, Sequelize) => {
  const DashBoard = sequelize.define('dashBoard', {
	
		name : {
			type: Sequelize.DataTypes.STRING, allowNull : true
		},
		
		file : {
			type: Sequelize.DataTypes.BLOB('long'), allowNull : true
		},
		
		variable : {
			type: Sequelize.DataTypes.FLOAT, allowNull : false
		}
	},
	{
		freezeTableName: true, 
		timestamps: false		
	});

  return DashBoard;
  
};