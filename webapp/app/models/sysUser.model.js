module.exports = (sequelize, Sequelize) => {
  const SysUser = sequelize.define('sysuser', {
	
		name : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		},
		login :{
			type: Sequelize.DataTypes.STRING, allowNull : false
		},
		pass : {
			type: Sequelize.DataTypes.STRING, allowNull : false
		}
	},
	{
		freezeTableName: true, 
		timestamps: false		
	});

  return SysUser;
  
};