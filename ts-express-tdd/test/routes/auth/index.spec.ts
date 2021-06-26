import request from "supertest";
import { expect } from "chai";
import { createServer } from "../../../src/server";

const app = createServer();

describe("auth routes", () => {
  it("/auth responds with 200", (done) => {
    request(app).get("/auth").expect(200, done);
  });
});
