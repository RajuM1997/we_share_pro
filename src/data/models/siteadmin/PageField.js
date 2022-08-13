import DataType from "sequelize";
import Model from "../../sequelize";

const PageField = Model.define("PageField", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataType.STRING,
    allowNull: false,
  },

  step: {
    type: DataType.STRING,
    allowNull: false,
  },
  subCategoryId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  pageId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  isEnable: {
    type: DataType.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

export default PageField;
