declare const Comments: ({ context, algorithm, postboxPlaceholder }: {
    context: string;
    algorithm?: "" | "recommendations" | "all-posts" | "all-master-posts" | "all-did-master-posts" | "all-context-master-posts" | "all-posts-non-filtered" | null | undefined;
    postboxPlaceholder?: string | undefined;
}) => JSX.Element;
export default Comments;
