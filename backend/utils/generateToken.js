// generating a jwt and setting it as a cookie in http response
import jwt from "jsonwebtoken";
const secret = "Aqe1234"

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
