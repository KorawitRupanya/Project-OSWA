import React from "react";
import Allproductcard from "../../frontend/src/components/AllProductCard";
import renderer from "react-test-renderer";

it("render correctly component", () => {
  const AllProductCard = renderer.create(<ProductCardTemplate />).toJSON();
  expect(AllProductCard.toMatchSnapshot());
});
