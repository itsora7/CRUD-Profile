import UserSchema from "./UserSchema.js";

//create
export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
//read
export const getUsers = () => {
  return UserSchema.find();
};
//update
export const updateUsers = (filter, updateObj) => {
  return UserSchema.findOneAndUpdate(filter, updateObj, { new: true }); //{new:true} return data after updating the database
};
//delete
export const deleteUser = (filter) => {
  return UserSchema.findOneAndDelete(filter);
};

//_id must be an string
export const deleteUserById = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
