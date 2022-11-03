const { Model, DataTypes } = require("sequelize");

const CART_TABLE = "carts";

const cartSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class Cart extends Model {
  static associate(models) {
    this.hasMany(models.CartItem, {
      as: "cartItems",
      foreignKey: "cartId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CART_TABLE,
      modelName: "Cart",
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updateAt: "update_at",
      deletedAt: "deleted_at",
    };
  }
}

module.exports = { CART_TABLE, cartSchema, Cart };
