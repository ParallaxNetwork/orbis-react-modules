declare const CommentPost: ({ post, overflowLimit, showToggleRepliesButton }: {
    post: IOrbisPost;
    overflowLimit?: number | undefined;
    showToggleRepliesButton?: boolean | undefined;
}) => JSX.Element;
export default CommentPost;
