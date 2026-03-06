export const NestedComments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div>
            <div
              key={comment.id}
              style={{
                borderLeft: "2px solid #ccc",
                paddingLeft: "10px",
                marginTop: "10px",
                marginLeft: "20px",
              }}
            >
              <p>
                {comment.user}: {comment.text}
              </p>
              {comment.replies.length > 0 ? (
                <NestedComments comments={comment.replies} />
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};
