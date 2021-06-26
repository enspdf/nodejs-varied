import request from "supertest";
import { expect } from "chai";
import { createServer } from "../../../src/server";

const app = createServer();

describe("dashboard routes", () => {
  it("/dashboard responds with 200", (done) => {
    request(app).get("/dashboard").expect(200, done);
  });
});
