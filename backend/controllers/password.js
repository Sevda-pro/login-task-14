const db = require("../util/db.config")
const Expense = db.expenses
const User=db.customers
const sequelize=db.sequelize
const path=require("path")
const jwt=require("jsonwebtoken")
const publicPath = path.join(__dirname, './public');