import React from "react";

interface HomePageProps {
  message: string;
}

export const HomePage: React.FC<HomePageProps> = ({ message }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p>
    </div>
  );
};
