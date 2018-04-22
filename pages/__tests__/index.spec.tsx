import { shallow } from "enzyme";
import * as React from "react";

import Index from "../index";

it("Index File", () => {
  const index = shallow(<Index />);
  expect(index).toBeDefined();
});
