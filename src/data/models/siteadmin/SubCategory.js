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
  description: {
    type: DataType.STRING,
    allowNull: false,
  },
  address: {
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
  guests: {
    type: DataType.STRING,
    allowNull: false,
  },
  bedrooms: {
    type: DataType.STRING,
    allowNull: false,
  },
  beds: {
    type: DataType.STRING,
    allowNull: false,
  },
  baths: {
    type: DataType.STRING,
    allowNull: false,
  },
  isEnable: {
    type: DataType.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

export default SubCategory;
