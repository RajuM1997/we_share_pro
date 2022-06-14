import DataType from "sequelize";
import Model from "../sequelize";
import bcrypt from "bcrypt";

const SingleCategory = Model.define("Category", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataType.STRING,
  },

  subTitle: {
    type: DataType.STRING,
  },
  image: {
    type: DataType.STRING,
  },
  category: {
    type: DataType.STRING,
  },
});

export default SingleCategory;
