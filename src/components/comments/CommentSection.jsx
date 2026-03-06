import { commentsData } from "./comments.const";
import { NestedComments } from "./NestedComments";

export const CommentSection = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🧵 Nested Comments</h2>
      <NestedComments comments={commentsData} />
    </div>
  );
};
