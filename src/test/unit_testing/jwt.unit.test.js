import { createAccessToken } from "../../src/libs/jwt.js";

describe ("JWT", () => {
    describe("createAccessToken", () => {
      test("debe retornar un token", async () => {
        const token = await createAccessToken({ id: 1 });
        expect(typeof token).toBe("string");
      }
      );
      test("debe retornar un error si no se le pasa un payload", async () => {
        await expect(createAccessToken()).rejects.toThrow();
      }
      );
    });
});
