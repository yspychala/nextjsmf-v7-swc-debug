import React from "react";

function Test({ title, ...rest }) {
  return <div {...rest}>blablabla: {title} </div>;
}

function Header() {
  return (
    <div>
      <Test title="a" label="b" />
      test
    </div>
  );
}

export { Header };
