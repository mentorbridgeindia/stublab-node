import { Route } from "./route.types";

// TODO: Fetch these routes from Mongo DB
export const routesConfig: Route[] = [
  {
    path: "/api/hello",
    method: "GET",
    response: { message: "Hello World!" },
  },
  {
    path: "/api/user",
    method: "POST",
    response: { message: "User created successfully" },
  },
  {
    path: "/api/user",
    method: "GET",
    response: { message: "User fetched successfully" },
  },
  {
    path: "/api/user",
    method: "PUT",
    response: { message: "User updated successfully" },
  },
  {
    path: "/api/user",
    method: "DELETE",
    response: { message: "User deleted successfully" },
  },
  {
    path: "/api/user/login",
    method: "POST",
    response: { message: "User logged in successfully" },
  },
];
