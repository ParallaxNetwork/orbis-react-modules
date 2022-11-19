import { Dispatch, SetStateAction } from 'react';
declare type parserOptions<T> = {
    raw: true;
} | {
    raw: false;
    serializer: (value: T) => string;
    deserializer: (value: string) => T;
};
declare const useLocalStorage: <T>(key: string, initialValue?: T | undefined, options?: parserOptions<T> | undefined) => [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void];
export default useLocalStorage;
