module.exports = (sequelize, Sequelize) => {
  const State = sequelize.define('state', {
	
		name : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		},
		sail: {
			type: Sequelize.DataTypes.STRING, allowNull : false
		}
	},
	{
		freezeTableName: true, 
		timestamps: false		
	});

  return State;
  
};