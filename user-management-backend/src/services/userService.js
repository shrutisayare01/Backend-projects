const supabase = require("../config/supabase");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

exports.createUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  return supabase.from("users").insert([{
    id: uuidv4(),
    name: user.name,
    email: user.email,
    password: hashedPassword,
    age: user.age,
    role: user.role || "user"
  }]);
};

exports.getUsers = () => supabase.from("users").select("*");

exports.getUserById = (id) =>
  supabase.from("users").select("*").eq("id", id).single();

exports.updateUser = (id, data) =>
  supabase.from("users").update(data).eq("id", id);

exports.deleteUser = (id) =>
  supabase.from("users").delete().eq("id", id);
