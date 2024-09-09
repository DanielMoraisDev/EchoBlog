import validationUsuarios from "./validation-usuario.js";
import validationIDUsuarios from "./validation-id-usuarios.js";
import createUsuarioToken from "./create-usuario-token.js";
import validationUsuarioLogin from "./validation-usuario-login.js";
import validationUsuarioUpdate from "./validation-usuario-update.js";
import authenticateTokenUser from "./authenticate-user-token.js";
import authenticateTokenAdmin from "./authenticate-admin-verify.js";

const usuariosHelpers = {
  validation: validationUsuarios,
  validationID: validationIDUsuarios,
  createToken: createUsuarioToken,
  validationLogin: validationUsuarioLogin,
  validationUpdate: validationUsuarioUpdate,
  authenticateToken: authenticateTokenUser,
  authenticateTokenAdmin: authenticateTokenAdmin
};

export default usuariosHelpers;
