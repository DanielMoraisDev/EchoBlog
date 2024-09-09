import "dotenv/config";

import jwt, { decode } from "jsonwebtoken";

export const authenticateTokenAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_PASSWORD, (err, decoded) => {
      if (err) return res.send(err);
      req.user = decoded;

      if (decoded.papel !== "administrador") {
        res.sendStatus(401);
      }
      next();
    });
  } catch (error) {
    console.error(
      "[HELPERS] [USUARIOS] [AUTHENTICATE TOKEN ADMIN] Error: " + error
    );
  }
};

export default authenticateTokenAdmin;
