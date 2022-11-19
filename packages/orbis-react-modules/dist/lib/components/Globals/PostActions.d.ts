import { ReactNode } from 'react';
declare const PostActions: ({ children, onAction }: {
    children: ReactNode;
    onAction: (action: 'edit' | 'delete') => void;
}) => JSX.Element;
export default PostActions;
