import { defineRule } from "vee-validate";

defineRule("required", (value: string) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
});

defineRule("email", (value: string) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(value)) {
    return "This field must be a valid email";
  }
  return true;
});

defineRule("minLength", (value: string, [min]: [number]) => {
  if (!value || !value.length) {
    return true;
  }
  if (value.length < min) {
    return `This field must be at least ${min} characters`;
  }
  return true;
});

defineRule("maxLength", (value: string, [max]: [number]) => {
  if (!value || !value.length) {
    return true;
  }
  if (value.length > max) {
    return `This field must be no more than ${max} characters`;
  }
  return true;
});

