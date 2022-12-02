import { ReactNode, ReactElement } from 'react';
interface IOrbisContext {
    orbis: IOrbis;
    icons: IOrbisIcons;
    provider: any;
    profile: IOrbisProfile | null;
    profileUrl: string;
    hasLit: boolean;
    showPoweredByOrbis: boolean;
    showCerscanProof: boolean;
    setProvider: (provider: any) => void;
    connectOrbis: () => Promise<void>;
    connectLit: () => Promise<{
        status?: number;
        error?: any;
        result?: string;
    }>;
    checkOrbisConnection: (autoConnect?: boolean) => Promise<void>;
    disconnectOrbis: () => void;
}
interface IOrbisIcons {
    like?: ReactElement;
    likeActive?: ReactElement;
    haha?: ReactElement;
    hahaActive?: ReactElement;
    downvote?: ReactElement;
    downvoteActive?: ReactElement;
    replyto?: ReactElement;
    replytoActive?: ReactElement;
    comment?: ReactElement;
}
declare const OrbisProvider: ({ children, customIcons, options, profileUrl, showPoweredByOrbis, showCerscanProof }: {
    children?: ReactNode;
    customIcons?: IOrbisIcons | null | undefined;
    options?: IOrbisConstructor | undefined;
    profileUrl?: string | undefined;
    showPoweredByOrbis?: boolean | undefined;
    showCerscanProof?: boolean | undefined;
}) => ReactElement;
declare const useOrbis: () => IOrbisContext;
export { OrbisProvider, useOrbis };
