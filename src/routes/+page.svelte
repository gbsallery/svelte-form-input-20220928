<script lang="ts">
    import {applyAction, enhance} from '$app/forms';
    import {dev} from "$app/environment";

    export let form: { message?: string };

    let username = '';
    let password = '';
    function autoLogin() {
        username = 'bob';
        password = 'bob';
    }
</script>

<div>
    <h1>Sign in</h1>
    <form
            method="post"
            use:enhance={({ data, cancel }) => {
			form = {};
			const username = data.get('username')?.toString() || '';
			const password = data.get('password')?.toString() || '';
			if (!username || !password) {
				form.message = 'Invalid input';
				cancel();
			}
			return async ({ result }) => {
				if (result.type === 'redirect') {
					window.location.href = result.location; // invalidateAll() + goto() will not work
				}
				if (result.type === 'invalid') {
					applyAction(result);
				}
			};
		}}
    >
        <label for="username">username</label><br/>
        <input id="username" name="username" bind:value={username}/><br/>
        <label for="password">password</label><br/>
        <input type="password" id="password" name="password" bind:value={password}/><br/>
        <input type="submit" value="Continue" class="button"/>
        {#if dev}
            <input type="submit" value="Autologin" class="button" on:click={autoLogin}/>
        {/if}
    </form>
    <p class="error">{form?.message || ''}</p>
    <a href="/signup" class="link">Create a new account</a>
</div>