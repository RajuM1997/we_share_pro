import DataType from "sequelize";
import Model from "../../sequelize";

const NewHomeBanner = Model.define("NewHomeBanner", {
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
  image: {
    type: DataType.STRING,
  },
  colorText: {
    type: DataType.STRING,
    allowNull: false,
  },
  bottomText: {
    type: DataType.STRING,
    allowNull: true,
  },
  category: {
    type: DataType.STRING,
    allowNull: false,
  },
  isEnable: {
    type: DataType.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

export default NewHomeBanner;
