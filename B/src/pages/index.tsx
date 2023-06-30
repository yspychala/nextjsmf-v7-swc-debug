import React from "react";
// import { Header } from "A/Header";

const Header = React.lazy(() =>
  import("A/Header").then((mod) => {
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
