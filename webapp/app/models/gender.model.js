module.exports = (sequelize, Sequelize) => {
  const Gender = sequelize.define('gender', {
	
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

  return Gender;
  
};
