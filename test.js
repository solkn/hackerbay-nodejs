const { getUser, signup } = require("./controllers/user");

const { expect, use } = require("chai");
const User = require("./models/user")
const sinon = require("sinon");
const mocha =require("mocha");
const describe = mocha.describe;
const it = mocha.it;

describe("Unit Testing", function () {
  this.afterEach(() => {
    sinon.restore();
  })
  
  
  describe("signup function testing", function () {
    it("should successfully add a user if no user in the database with the same id!", async function () {
      const firstName = "Solomon";
      const lastName = "Kindie";
      const email = "solomonkindie52@gmail.com";
      const password = "23363685"
      sinon.stub(User, "countDocuments").returns(0);
      sinon.stub(User.prototype, "save").returns(
       { firstName, lastName, email,password }
      );
      const user = await signup({
        firstName,
        lastName,
        email,
        password,
      });
      expect(user.firstName).to.equal(firstName);
      expect(user.lastName).to.equal(lastName);
      expect(user.email).to.equal(email);
      expect(user.password).to.equal(password);
    });
    it("throws an error if user with same id is already existed!", async function () {
      const id = 1;
      const firstName = "Solomon";
      const lastName = "Kindie";
      const email = "solomonkindie52@gmail.com";
      const password = "23363685";
      sinon.stub(User, 'countDocuments').returns(1)
      await signup({
        id,
        firstName,
        lastName,
        email,
        password,
      }).catch((error) => {
        expect(error.message).to.equal("User with this id is already existed!")
      });
    });
  });


  describe("get user function testing", function () {
    it("should return correct user", async function () {
      const profileId = 1;
      const mockObject = {
        _id: 1,
        firstName: "Solomon",
        lastName: "Kindie",
        email:"solomonkindie@gmail.com",
        password:"23363685"
      }
      sinon.stub(User, 'findOne').returns(mockObject)
      const user = await getUser({
        profileId
      });
      expect(user.firstName).to.equal(mockObject.firstName),
      expect(user.lastName).to.equal(mockObject.lastName),
      expect(user.email).to.equal(mockObject.email),
      expect(user.password).to.equal(mockObject.password)    
    });

    it("should give error if no user with in a given id", async function () {
      const id = 1;
      sinon.stub(User, 'findOne').returns(null)
      await getUser({
        id,
      }).catch((error) => {
        expect(error.message).to.equal("No user not found with given id")
      });
    });
  });


});