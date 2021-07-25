const { USER_FAKE_DATA } = require("../models/UserFakeData");

// Returns User With Id
const QueryUserById = (id) => {
  let user;
  USER_FAKE_DATA.forEach((userData) => {
    if (userData.id === Number(id)) {
      user = userData;
    }
  });
  return user;
};

// Returns List of Users
const QueryListOfUsers = () => {
  return USER_FAKE_DATA;
};

const DeleteUserById = (id) => {
  USER_FAKE_DATA.filter((user) => {
    return user.id !== Number(id);
  });
};

module.exports = {
  QueryUserById,
  QueryListOfUsers,
  DeleteUserById,
};
