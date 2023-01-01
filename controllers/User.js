import {
  QueryListOfUsers,
  QueryUserById,
  DeleteUserById,
  UpdateUserById
} from "../service/UserTable.js";

const GetAllUsers = (req, res) => {
  const userList = QueryListOfUsers();

  // DO SOMETHING WITH THE USER LIST OR JUST RETURN IT
  return res.json(userList);
};

const GetUser = (req, res) => {
  const userId = req.params.id;
  const user = QueryUserById(userId);

  // DO SOMETHING WITH THE USER OR JUST RETURN IT
  return res.json(user);
};

const DeleteUser = (req, res) => {
  const userId = req.params.id;
  const user = DeleteUserById(userId);

  // DO SOMETHING WITH THE USER OR JUST RETURN IT
  return res.json(user);
};

const UpdateUser = (req, res) => {
  const query = {
    id:req.body.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    status: req.body.status,
  };
  const user = UpdateUserById(query);

  // DO SOMETHING WITH THE USER OR JUST RETURN IT
  return res.json(user);
}

export {
  GetAllUsers,
  GetUser,
  DeleteUser,
  UpdateUser
};
