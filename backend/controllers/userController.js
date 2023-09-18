import expressAsyncHandler from "express-async-handler";
// authenticate the user/set token
// route POST /api/users/auth
// access Public
const authUser = expressAsyncHandler(async (req, res) => {
  res.status(401);
  throw new Error("something went wrong");
  res.status(200).json({ message: "Authenticate the user" });
});

export { authUser };
