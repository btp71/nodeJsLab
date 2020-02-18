const request = require("supertest");

const app = require("./app").app;

it("should return Hello Test", (done) =>{

    request(app)
        .get("/")
        .expect("Hello Test")
        .end(done);
});