import DataType from "sequelize";
import Model from "../../sequelize";

const SubCategory = Model.define("SubCategory", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataType.STRING,
    allowNull: false,
  },

  subCategory: {
    type: DataType.STRING,
    allowNull: false,
  },
  primaryCategory: {
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

export default SubCategory;
