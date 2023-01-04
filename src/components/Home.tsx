import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <main>
      <p>Hello there!</p>
    </main>
  );
};

export default Home;