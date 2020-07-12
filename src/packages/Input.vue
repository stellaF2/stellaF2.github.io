<template>
  <div class='s-input' :class='classes'>
      <input 
        class='s-input__inner'
        :class='{disabled}'
        :type="ctype"
        :value='value'
        :placeholder='placeholder'
        :disabled='disabled'
        @input='input'
        @focus="focus"
        @mouseenter="mouseenter"
        :name='name'
        ref='s-input'
      >
      <s-icon 
        icon='close' 
        v-if='isClearable' 
        class='s-input__suffix'
        @mousedown.native.prevent
        @click='clearInput'
      ></s-icon>
      <s-icon 
        :icon='passwordVisible ? "eye": "eye-bind"' 
        v-if='showPassword'
        class='s-input__suffix'
        @click='toggleEye'
      ></s-icon>
      <s-icon
        v-if='suffixIcon'
        class='s-input__suffix'
        :icon='suffixIcon'
      ></s-icon>
      <s-icon
        v-if='prefixIcon'
        class='s-input__prefix'
        :icon='prefixIcon'
      ></s-icon>
  </div>
</template>

<script>
import SIcon from './Icon';

export default {
    name: 's-input',
    components: {
      SIcon,
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        disabled: Boolean,
        clearable: Boolean,
        showPassword: Boolean,
        suffixIcon: String,
        prefixIcon: String,
        name: String,
    },
    data() {
      return {
        value: '',
        isFocus: true,
        passwordVisible: false,
        ctype: 'text',
      }
    },
    mounted(){
      this.passwordVisible = false;
      this.ctype = this.type;
    },
    computed: {
      classes() {
        return [
          (this.clearable || this.showPassword || this.suffixIcon) && 's-input--suffix',
          this.prefixIcon && 's-input--prefix',
        ];;
      },
      isClearable: {
        get() {
          return this.clearable && this.value && this.isFocus;
        },
      }
    },
    methods: {
      input({target: { value}}) {
        this.handleInput(value);
      },
      clearInput() {
       this.handleInput('');
      },
      handleInput(value) {
        this.$emit('input', value);
        this.value = value;
      },
      handleHover(e, type, isFocus) {
        this.$emit(type, e);
        this.isFocus = isFocus;
      },
      blur(e) {
        this.handleHover(e, 'blur', false);
      },
      focus(e) {
        this.handleHover(e, 'focus', true);
      },
      mouseenter(e) {
        this.handleHover(e, 'mouseenter', true);
      },
      toggleEye() {
        this.ctype = (this.passwordVisible = !this.passwordVisible) ? 'text': 'password';
        this.$nextTick(() => this.$refs['s-input'].focus());
      }
    }
}
</script>

<style lang='scss'>
@import '@/styles/_var.scss';

.s-input {
  .s-input__inner {
    cursor: pointer;
    border: 1px solid $grey;
    border-radius: $border-radius;
    box-sizing: border-box;
    color: $font-color;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .45, .355, 1);
    width: 100%;
    opacity: .8;
    &:hover {
      opacity: 1;
    }
    &::-webkit-input-placeholder {
      color: $font-grey;
    }
    &:focus {
      border-color: $primary;
    }
    &.disabled {
      cursor: not-allowed;
      background: $lightPink;
    }
  }
}
.s-input--suffix, .s-input--prefix {
  position: relative;
  .s-input__suffix, .s-input__prefix {
    position: absolute;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid $font-color;
    top: 12.5px;
    fill: $font-color;
    width: 15px;
    height: 15px;
    cursor: pointer;
    opacity: .5;
    &:hover {
      opacity: .7;
    }
  }
}
.s-input--suffix {
  .s-input__inner {
    padding-right: 30px;
  }
  .s-input__suffix {
    right: 12.5px;
  }
}
.s-input--prefix {
  .s-input__inner {
    padding-left: 30px;
  }
  .s-input__prefix {
    left: 12.5px;
  }
}
</style>