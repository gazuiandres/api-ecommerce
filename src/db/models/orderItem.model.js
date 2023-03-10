const { Model, DataTypes } = require("sequelize");

const { ORDER_TABLE } = require("./order.model");
const { PRODUCT_TABLE } = require("./product.model");

const ORDER_ITEM_TABLE = "order_items";

const orderItemSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  orderId: {
    field: "order_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: "id",
    },
  },
  productId: {
    field: "product_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: "id",
    },
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: "TIMESTAMP",
    field: "created_at",
    allowNull: false,
  },
  updatedAt: {
    type: "TIMESTAMP",
    field: "updated_at",
    allowNull: true,
  },
  deletedAt: {
    type: "TIMESTAMP",
    allowNull: true,
    field: "deleted_at",
  },
};

class OrderItem extends Model {
  static associate(models) {
    this.belongsTo(models.Order, {
      as: "order",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_ITEM_TABLE,
      modelName: "OrderItem",
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { ORDER_ITEM_TABLE, orderItemSchema, OrderItem };
