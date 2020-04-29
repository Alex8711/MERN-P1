import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const Users = [
    {
      id: "u1",
      name: "max",
      image:
        "https://www.pexels.com/photo/golden-gate-bridge-san-francisco-california-1141853/",
      places: 3,
    },
  ];
  return <UsersList items={Users} />;
};

export default Users;
