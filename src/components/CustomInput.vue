<script>
    export default {
        name: 'CustomInput',
        props: ['width', 'label', 'modelValue'],
        emits: ['update:modelValue'],
        computed: {
            widthStyle() {
                return {
                    width: this.width ? `${this.width}px` : "100%"
                }
            }
        }
    }
</script>

<template>
    <div class="group">      
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :style="widthStyle" required>
        <span class="highlight"></span>
        <span class="bar" :style="widthStyle"></span>
        <label>{{ label }}</label>
    </div>
</template>

<style scoped>
    .group {
        position: relative;
        margin-bottom: 45px;
    }

    input {
        color: #fff;
        background: #000;
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        /* width: 300px; */
        border: none;
        border-bottom: 1px solid #757575;
    }

    input:focus {
        outline: none;
    }

    /* label */
    label {
        color: #999;
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    /* active state */
    input:focus ~ label, input:valid ~ label {
        top: -20px;
        font-size: 14px;
        color: var(--color-gold);
    }

    /* bottom bars */
    .bar {
        position: relative;
        display: block;
        /* width: 300px; */
    }

    .bar:before, .bar:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px; 
        position: absolute;
        background: var(--color-gold); 
        transition: 0.2s ease all; 
        -moz-transition: 0.2s ease all; 
        -webkit-transition: 0.2s ease all;
    }

    .bar:before {
        left: 50%;
    }
    
    .bar:after {
        right: 50%; 
    }

    /* active state */
    input:focus ~ .bar:before, input:focus ~ .bar:after {
        width: 50%;
    }

    /* highlighter */
    .highlight {
        position: absolute;
        height: 60%;
        width: 100px;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    }

    /* active state */
    input:focus ~ .highlight {
        -webkit-animation: inputHighlighter 0.3s ease;
        -moz-animation: inputHighlighter 0.3s ease;
        animation: inputHighlighter 0.3s ease;
    }

    /* animations */
    @-webkit-keyframes inputHighlighter {
        from { background: var(--color-gold); }
        to 	{ width: 0; background: transparent; }
    }

    @-moz-keyframes inputHighlighter {
        from { background: var(--color-gold); }
        to 	{ width: 0; background: transparent; }
    }

    @keyframes inputHighlighter {
        from { background: var(--color-gold); }
        to 	{ width: 0; background: transparent; }
    }
</style>
