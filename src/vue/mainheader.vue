<template>
<div class="header">
    {{ msg }}
</div>
</template>
<script>

    export default {
        data: function () {
            return {
                msg: "this is main header"
            }
        }
    }

</script>
<style lang="scss" scoped>
.header {
    text-align: center;
    background: #65cbe3;
    color: #ffffff;
    padding: 50px;
}
</style>