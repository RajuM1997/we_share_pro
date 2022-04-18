import DataType from "sequelize";
import Model from "../../sequelize";

const ShareAndFind = Model.define("ShareAndFind", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  mainTitle: {
    type: DataType.STRING,
    allowNull: false,
  },

  subTitle: {
    type: DataType.STRING,
    allowNull: false,
  },
  btnText: {
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

export default ShareAndFind;
