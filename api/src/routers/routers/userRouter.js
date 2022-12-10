import express from "express";
import {
  insertUser,
  getUsers,
  updateUsers,
  deleteUserById,
} from "../models/user/UserModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    //get all date from db and return to the client
    const users = await getUsers();
    res.json({
      status: "success",
      message: "here are the users",
      users,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "User Created successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create users, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    console.log(_id);
    const result = await deleteUserById(_id);
    result?._id
      ? res.json({
          status: "success",
          message: "User Created successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create users, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.put("/", async (req, res) => {
  try {
    const { _id, ...rest } = req.body;

    const filter = { _id };
    // const updateObj = { passwo };
    // console.log(req.body);
    const result = await updateUsers(filter, rest);
    result?._id
      ? res.json({
          status: "success",
          message: "User Created successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create users, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
export default router;
