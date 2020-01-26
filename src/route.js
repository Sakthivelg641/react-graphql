import React from "react";
import UserProfile from "./userProfile";
import UserList from "./userList";

const routes = {
  "/": () => <UserList />,
  "/userProfile": () => <UserProfile />
};
export default routes;
