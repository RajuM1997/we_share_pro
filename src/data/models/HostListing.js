import DataType from "sequelize";
import Model from "../sequelize";
import {GraphQLFloat as FloatType, GraphQLInt as IntType, GraphQLString as StringType} from "graphql/type/scalars";

const HostListing = Model.define("HostListing", {
    id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    categoryId: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    subCategoryId: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    personCapacity: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    itemTitle: {
        type: DataType.STRING,
        allowNull: false,
    },
    itemDescription: {
        type: DataType.STRING,
        allowNull: false,
    },
    country: {
        type: DataType.STRING,
        allowNull: false,
    },
    street: {
        type: DataType.STRING,
        allowNull: false,
    },
    city: {
        type: DataType.STRING,
        allowNull: false,
    },
    state: {
        type: DataType.STRING,
        allowNull: false,
    },
    zipcode: {
        type: DataType.STRING,
        allowNull: false,
    },
    status: {
        type: DataType.STRING,
        allowNull: false,
    },
    lat: {
        type: DataType.DOUBLE,
        allowNull: false,
    },
    lng: {
        type: DataType.DOUBLE,
        allowNull: false,
    },
    serviceUnit: {
        type: DataType.STRING,
        allowNull: false,
    },
    minUnit: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    maxUnit: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    basePrice: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    currency: {
        type: DataType.STRING,
        allowNull: false,
    },
    coverPhoto: {
        type: DataType.STRING,
        allowNull: false,
    },
    discountType: {
        type: DataType.STRING,
        allowNull: false,
    },
    discount: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    dynamicFields: {
        type: DataType.STRING,
        allowNull: false,
    },
});

export default HostListing;
