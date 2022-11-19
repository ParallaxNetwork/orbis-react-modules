declare const Post: ({ post, replyTo, onClickReply }: {
    post: IOrbisPost;
    replyTo: IOrbisPost | null;
    onClickReply?: ((value: IOrbisPost) => void) | undefined;
}) => JSX.Element;
export default Post;
