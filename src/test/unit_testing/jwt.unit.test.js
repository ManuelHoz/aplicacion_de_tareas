import { createAccessToken } from "../../src/libs/jwt.js";

//patron AAA, Ajustar, Actuar, Afirmar

describe("JWT", () => {
  describe("createAccessToken", () => {
    test("debe crear un token", async () => {
      //Ajustar
      const usuario = {
        id: 3,
        username: Juan,
      };
      //actuar
      const token = await createAccessToken({ usuario_id });
      //afirmar
      expect(typeof token).toBe("string");
    });
    
    test("debe producirse un error si no se le pasa un payload", async () => {
      await expect(createAccessToken()).rejects.toThrow();
    });
  });
});
