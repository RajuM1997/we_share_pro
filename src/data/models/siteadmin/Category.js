import DataType from "sequelize";
import Model from "../../sequelize";

const Category = Model.define("Category", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataType.STRING,
    allowNull: false,
  },

  subTitle: {
    type: DataType.STRING,
    allowNull: false,
  },
  category: {
    type: DataType.STRING,
    allowNull: false,
  },

  image: {
    type: DataType.STRING,
  },

  isEnable: {
    type: DataType.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

export default Category;
