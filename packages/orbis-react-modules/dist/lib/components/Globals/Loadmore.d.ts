declare const Loadmore: ({ onClick, text }: {
    onClick: () => Promise<void>;
    text?: string | undefined;
}) => JSX.Element;
export default Loadmore;
