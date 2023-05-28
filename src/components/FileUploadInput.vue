<script>
    export default {
        name: 'FileUploadInput',
        methods: {
            handleFileUpload(event) {
                this.$emit('update:file', event.target.files[0]);
            },
        }
    };
</script>

<template>
    <div>
        <input type="file" @change="handleFileUpload" />
    </div>
</template>
