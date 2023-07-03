import React from "react";
// import { Header } from "myRemote/Header";

const Header = React.lazy(() =>
  import("myRemote/Header").then((mod) => {
    return { default: mod.Header };
  })
);

export default function Home() {
  return (
    <div>
      <React.Suspense fallback={<div>load…</div>}>
        <Header />
      </React.Suspense>
      {/* <Header /> */}
      home
    </div>
  );
}
