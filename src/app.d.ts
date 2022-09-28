// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

/// <reference types="@sveltejs/kit" />
declare namespace App {
	interface Locals {
		userid: string;
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Error {}

	// interface PageData {}

	// interface Platform {}
}