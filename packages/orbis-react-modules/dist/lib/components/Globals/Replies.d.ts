import { LegacyRef } from 'react';
declare const Replies: ({ context, master, innerPostbox, replyTo, onClickReply, onNewPost }: {
    context: string | undefined;
    master: IOrbisPost;
    innerPostbox: LegacyRef<HTMLDivElement> | null;
    replyTo: IOrbisPost | null;
    onClickReply: (value: IOrbisPost | null) => void;
    onNewPost: (el: HTMLElement) => void;
}) => JSX.Element;
export default Replies;
