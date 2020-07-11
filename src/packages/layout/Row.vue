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
        justify: {
            type: String,
            validator(type) {
                const justifies = ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'];
                if (type) {
                    console.assert(justifies.includes(type), `justify 值必须是 ${justifies.join('、')}，不能是 ${type}`);
                }
                return true;
            }
        },
    },
    mounted() {
        this.$children.forEach(c => c.gutter = this.gutter);
    },
    computed: {
        rowStyle() {
            let style = Object.create(null);
            let key = this.justify;
            key = ['start', 'end'].includes(key) ? `flex-${key}` : key;
            this.gutter && (style = {
                ...style,
                marginLeft: - this.gutter / 2 + 'px',
                marginRight: - this.gutter / 2 + 'px',
            });
            key  && (style = {
                ...style,
                justifyContent: key,
            });
            return style;
        },
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