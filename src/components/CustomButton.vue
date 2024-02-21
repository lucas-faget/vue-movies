<script>
    export default {
        name: 'CustomButton',
        props: ['text']
    }
</script>

<template>
    <div>
        <button class="btn" type="submit">
            {{ text }}
        </button>
    </div>
</template>

<style scoped>
    .btn {
        color: #000;
        background: hsl(51,100%,70%);
        height: 40px;
        min-width: 130px;
        padding: 10px 25px;
        display: inline-block;
        border-radius: 5px;
        font-family: Anton;
        font-weight: 500;
        cursor: pointer;
        border: none;
        outline: none;
        transition: all 0.3s ease;
    }

    .btn:hover {
        background-color: var(--color-gold);
    }
</style>
