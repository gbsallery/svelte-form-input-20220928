import type {AccessToken} from "lucia-sveltekit/utils/token";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {env} from '../lib/env';

const base = "http://localhost:8080";

export function api(method: string, resource: string, data?: Record<string, unknown>) {
    try {
        return fetch(`${base}/${resource}`, {
            method,
            headers: {
                'content-type': 'application/json',
            },
            body: data && JSON.stringify(data)
        });
    } catch (e) {
        return new Response(
            JSON.stringify({
                error: 'Unauthorized'
            }),
            {
                status: 401
            }
        );
    }
}