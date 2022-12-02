declare const Post: ({ post, replyTo, overflowLimit, onClickReply }: {
    post: IOrbisPost;
    replyTo: IOrbisPost | null;
    overflowLimit?: number | undefined;
    onClickReply?: ((value: IOrbisPost) => void) | undefined;
}) => JSX.Element;
export default Post;
