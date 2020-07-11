<template>
    <div class='row-container'>
        <div class='s-row' :style='rowStyle'>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 's-row',
    props: {
        gutter: Number,
    },
    mounted() {
        this.$children.forEach(c => c.gutter = this.gutter);
    },
    computed: {
        rowStyle() {
            return this.gutter && {
                marginLeft: - this.gutter / 2 + 'px',
                marginRight: - this.gutter / 2 + 'px',
            }
        }
    },
}
</script>

<style lang='scss'>
.row-container {
    overflow: hidden;
}
.s-row {
    display: flex;
    flex-flow: row wrap;
}
</style>