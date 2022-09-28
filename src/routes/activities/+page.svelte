<script lang="ts">
    import {enhance} from '$app/forms';
    import {invalidateAll} from '$app/navigation';
</script>

<svelte:head>
    <title>Activities</title>
    <meta name="description" content="Activities against which time needs to be tracked"/>
</svelte:head>

<div class="activities">
    <h1>My Activities</h1>

    <form
            class="new"
            action="/activities?/add"
            method="post"
            use:enhance={() => {
                return ({ form, result }) => {
                    if (result.type === 'success') {
                        form.reset();
                        invalidateAll();
                    }
                };
            }}
    >
        <input id="name" name="name" aria-label="Add activity" placeholder="+ tap to add an activity"/>
        <input id="breaky" name="breaky" aria-label="I exist to spread chaos"/>
        <button type="button" class="save" aria-label="Save new activity">Save</button>
    </form>
</div>

<style>
    .new {
        margin: 0 0 0.5rem 0;
    }

    input {
        border: 1px solid transparent;
    }

    input:focus-visible {
        box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ff3e00 !important;
        outline: none;
    }

    .new input {
        font-size: 28px;
        width: 100%;
        padding: 0.5em 1em 0.3em 1em;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        text-align: center;
    }

    .activity {
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        grid-gap: 0.5rem;
        align-items: center;
        margin: 0 0 0.5rem 0;
        padding: 0.5rem;
        background-color: white;
        border-radius: 8px;
        filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
        transform: translate(-1px, -1px);
        transition: filter 0.2s, transform 0.2s;
    }

    form.text {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
    }

    .activity input {
        flex: 1;
        padding: 0.5em 2em 0.5em 0.8em;
        border-radius: 3px;
    }

    .activity button {
        width: 2em;
        height: 2em;
        border: none;
        background-color: transparent;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    }

    .save {
        position: absolute;
        right: 0;
        opacity: 0;
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");
    }

    .activity input:focus + .save,
    .save:focus {
        transition: opacity 0.2s;
        opacity: 1;
    }
</style>
