const { Model, DataTypes } = require("sequelize");

const CATEGORY_TABLE = "categories";

const categorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    unique: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'categoryId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: "Category",
      timestamps: true,
      paranoid: true,
      createdAt: 'created_at',
      updateAt: 'update_at',
      deletedAt: "deleted_at",
    };
  }
}

module.exports = { CATEGORY_TABLE, categorySchema, Category }