<script>
    export default {
        name: 'CustomButton',
        props: ['text']
    }
</script>

<template>
    <button class="custom-btn btn" type="submit">
        {{ text }}
    </button>
</template>

<style scoped>
    .custom-btn {
        min-width: 130px;
        height: 40px;
        color: #000;
        border-radius: 5px;
        padding: 10px 25px;
        font-family: cursive, sans-serif;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
            7px 7px 20px 0px rgba(0,0,0,.1),
            4px 4px 5px 0px rgba(0,0,0,.1);
        outline: none;
    }

    .btn {
        background: hsl(51,100%,70%);
        border: none;
        z-index: 1;
    }

    .btn:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 0;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 5px;
        background-color: var(--color-gold);
        box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),
            7px 7px 20px 0px rgba(0,0,0,.1),
            4px 4px 5px 0px rgba(0,0,0,.1);
        transition: all 0.3s ease;
    }

    .btn:hover {
        color: #000;
    }

    .btn:hover:after {
        top: auto;
        bottom: 0;
        height: 100%;
    }
    .btn:active {
        top: 2px;
    }
</style>
