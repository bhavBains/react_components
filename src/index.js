import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 2:00AM"
          post="Nice post"
        />
      </ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 6:00PM"
        post="Yayy Thats kool"
      />
      <CommentDetail author="Jane" timeAgo="Today at 11:00AM" post="Cooool" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
