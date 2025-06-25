import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    permissions: string[];
    roles: string[];
}

export type PaginatedDate<T = any> = {
    data: T[];
    links:Record<string, string>;

}

export type Feature = {
    id: number;
    name: string;
    description: string;
    user: User;
    user_id: number;
}
export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
