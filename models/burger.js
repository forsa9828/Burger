module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: DataTypes.STRING,
      //Cheesburger
      devoured: {
        type: DataTypes.BOOLEAN,
        //Yes
        defaultValue: false
      }
    });
    return Burger;
  };

