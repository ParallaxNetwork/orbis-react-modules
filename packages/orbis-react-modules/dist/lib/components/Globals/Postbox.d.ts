declare const Postbox: ({ context, editPost, replyTo, placeholder, enterToSend, popoverPosition, cancelReplyTo, cancelEdit, callback }: {
    context: string | undefined;
    editPost?: IOrbisPost | undefined;
    replyTo?: IOrbisPost | null | undefined;
    placeholder?: string | undefined;
    enterToSend?: boolean | undefined;
    popoverPosition?: "top" | "bottom" | undefined;
    cancelReplyTo?: (() => void | undefined) | undefined;
    cancelEdit?: ((state: boolean) => void) | undefined;
    callback: (value: any) => void;
}) => JSX.Element;
export default Postbox;
