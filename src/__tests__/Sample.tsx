import * as React from "react"; // tslint:disable-line
const EventEmitter = require("events"); // tslint:disable-line
import { shallow } from "enzyme";
const TestUtils = require("react-addons-test-utils"); // tslint:disable-line

describe("My Panel", () => {
  it("should exist", () => {
    const mypanel = shallow(<h1></h1>);

    expect(mypanel).toBeDefined;
  });
});
