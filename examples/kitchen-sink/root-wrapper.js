import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { SketchPicker } from "react-color";

export default class RootWrapper extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <MDXProvider
        components={{
          Picker: SketchPicker,
          h1: ({ children, ...props }) => (
            <h1 {...props}>Provided: {children}</h1>
          ),
          wrapper: "section"
        }}
      >
        {children}
      </MDXProvider>
    );
  }
}
