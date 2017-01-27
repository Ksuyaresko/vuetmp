<template>
    <div>
        <contcomp></contcomp>
        <contcomp2></contcomp2>
    </div>
</template>
<script>
import contComp from './contacts-comp-1.vue';

    var contComp2 = {
        template: '<div class="comp2">{{ title }} contacts</div>',
        data: function () {
            return {
                title: "Это второй компонент"
            }
        }
    };

    export default {
        data: function () {
            return {
                list: [
                    {title:"testtitle"},
                    {title:"testtitle2"},
                    {title:"testtit"}
                ]
            }
        },
        components: {
            'contcomp': contComp,
            'contcomp2': contComp2,
        }
}

</script>
<style lang="scss">
    .comp1 {
        padding: 10px;
        background: #e3e3e3;
        border-radius: 4px;
        text-align: center;
    }
    .comp2 {
        text-align: center;
    }
</style>