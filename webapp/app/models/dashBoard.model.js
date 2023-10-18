module.exports = (sequelize, Sequelize) => {
  const DashBoard = sequelize.define('dashBoard', {
	
		name : {
			type: Sequelize.DataTypes.STRING, allowNull : true
		},
		file : {
			type: Sequelize.DataTypes.BLOB('long'), allowNull : false
		}
	},
	{
		freezeTableName: true, 
		timestamps: false		
	});

  return DashBoard;
  
};