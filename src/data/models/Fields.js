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
  subTitle: {
    type: DataType.STRING,
    allowNull: false,
  },
  step: {
    type: DataType.STRING,
    allowNull: false,
  },
  option: {
    type: DataType.STRING,
    allowNull: false,
  },
  types: {
    type: DataType.STRING,
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

export default Fields;
