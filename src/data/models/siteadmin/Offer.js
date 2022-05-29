import DataType from "sequelize";
import Model from "../../sequelize";

const Offer = Model.define("Offer", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataType.STRING,
    allowNull: false,
  },

  dec: {
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

export default Offer;
