import DataType from "sequelize";
import Model from "../sequelize";

const Fields = Model.define("Fields", {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  title: {
    type: DataType.STRING,
    allowNull: false,
  },
  type: {
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
  fields: {
    type: DataType.STRING,
    allowNull: false,
  },
  isEnable: {
    type: DataType.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

export default Fields;
