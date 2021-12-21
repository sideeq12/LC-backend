const express = require("express");
const router = express.Router();
import {registerUser} from "../controller/userController"

router.route("/").get(registerUser)