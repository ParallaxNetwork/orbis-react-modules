declare const PostDeleteConfirmation: ({ open, setOpen, confirm }: {
    open: boolean;
    setOpen: (state: boolean) => void;
    confirm: () => Promise<void>;
}) => JSX.Element;
export default PostDeleteConfirmation;
