import React from "react";

import TweetEditorExample from "./TweetEditorExample";
import ColorfulEditorExample from "./ColorfulEditorExample";

const Examples = [
  {
    title: "Decorator Example",
    desc: "",
    component: TweetEditorExample
  },
  {
    title: "ColorfulEditorExample",
    desc: "",
    component: ColorfulEditorExample
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ overflowY: "scroll", height: "100%" }}>
        {Examples.map((e, idx) => {
          return (
            <div key={idx}>
              <h3>
                {idx + 1} - {e.title}
              </h3>
              {<e.component />}
              {/* <div style={{ height: 1, backgroundColor: "black" }} /> */}
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
