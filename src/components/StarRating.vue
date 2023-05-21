<script>
    export default {
        name: 'StarRating',
        props: ['modelValue'],
        emits: ['update:modelValue'],
        data() {
            return {
                stars: [
                    { id: "star5"     , value: 10 , class: "full" },
                    { id: "star4half" , value: 9  , class: "half" },
                    { id: "star4"     , value: 8  , class: "full" },
                    { id: "star3half" , value: 7  , class: "half" },
                    { id: "star3"     , value: 6  , class: "full" },
                    { id: "star2half" , value: 5  , class: "half" },
                    { id: "star2"     , value: 4  , class: "full" },
                    { id: "star1half" , value: 3  , class: "half" },
                    { id: "star1"     , value: 2  , class: "full" },
                    { id: "starhalf"  , value: 1  , class: "half" }
                ]
            }
        },
        methods: {
            updateRating(newValue) {
                this.$emit('update:modelValue', newValue);
            },
        },
    }
</script>

<template>
    <fieldset class="rating">
        <template v-for="star in stars" :key="star.id">
            <input type="radio" :id="star.id" name="rating" :value="star.value" :checked="modelValue == star.value" @input="updateRating($event.target.value)" />
            <label :class="star.class" :for="star.id"></label>
        </template>
    </fieldset>
</template>

<style scoped>
    @import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

    .rating { 
        border: none;
        float: left;
    }

    .rating > input {
        display: none;
    }

    .rating > label:before {
        margin: 5px;
        font-size: 1.25em;
        font-family: FontAwesome;
        display: inline-block;
        content: "\f005";
    }

    .rating > .half:before {
        content: "\f089";
        position: absolute;
    }

    .rating > label {
        color: #ddd;
        float: right;
    }

    /* CSS Magic to Highlight Stars on Hover */
    .rating > input:checked ~ label, /* show gold star when clicked */
    .rating:not(:checked) > label:hover, /* hover current star */
    .rating:not(:checked) > label:hover ~ label {
        color: #FFD700;
    } /* hover previous stars in list */

    .rating > input:checked + label:hover, /* hover current star when changing rating */
    .rating > input:checked ~ label:hover,
    .rating > label:hover ~ input:checked ~ label, /* lighten current selection */
    .rating > input:checked ~ label:hover ~ label {
        color: #FFED85;
    } 
</style>
