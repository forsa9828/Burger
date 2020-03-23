//Creating the burgermodel 

module.export = function(sequlize, DataTypes){
    const burger = sequlize.define("Burger", {
        burger_name: {
            type: DataTypes.String,
            allowNull: false
        },
        devoured: {
            type: DataTypes.Boolean,
            defaultValue: false
        }
    },
     {
         //Will come back to 
         classMethods: {
             associate: function(models){
                 burger.hasOne(models.Cusotmer)
             }
         }
     

    
    });
    return burger;
};