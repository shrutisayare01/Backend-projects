const service = require("../services/userService");

exports.createUser = async (req, res, next) => {
  try {
    const { error } = await service.createUser(req.body);
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const { data } = await service.getUsers();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const { data, error } = await service.getUserById(req.params.id);
    if (error) return res.status(404).json({ error: "User not found" });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { error } = await service.updateUser(req.params.id, req.body);
    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "User updated successfully" });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { error } = await service.deleteUser(req.params.id);
    if (error) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};
