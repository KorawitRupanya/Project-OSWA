import { validateEmail } from "../components/validate_email";

var a = "korawit.ru.th";
var b = "lora@";
var c = "@ku.th";

test("Test_validate_email", () => {
  expect(validateEmail(a)).toBeFalsy;
  expect(validateEmail(b)).toBeFalsy;
  expect(validateEmail(c)).toBeFalsy;
});
