export declare const shortAddress: (address: string | undefined) => string;
export declare const didToAddress: (did: string | undefined, short?: boolean) => string;
export declare const getUsername: (details: IOrbisProfile['details'] | undefined) => string;
export declare const getBadgeContent: (details: IOrbisProfile['details'] | undefined) => string;
export declare const highlightMentions: (content: IOrbisPostContent) => string;
export declare const formatMessage: (content: IOrbisPostContent, hideOverflow?: boolean, overflowCount?: number, profileUrl?: string) => any;
export declare const formatDate: (timestamp: number) => string | null;
export declare const sleep: (ms: number) => Promise<unknown>;
export declare const debounce: <F extends (...args: any[]) => any>(func: F, waitFor: number) => (...args: Parameters<F>) => Promise<ReturnType<F>>;
