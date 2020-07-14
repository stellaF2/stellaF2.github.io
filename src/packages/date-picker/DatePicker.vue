<template>
  <div class="s-date-picker" v-click-outside='handleBlur'>
    <s-input 
        placeholder="请选择日期" 
        prefix-icon='clock'
        @focus='handleFocus'
        :value='formattedDate'
    ></s-input>
    <transition name='fade' mode='out-in'>
      <div class='s-date-picker-content' v-if='isVisible'>
          <div class='s-date-picker-content-header'>
              <s-icon icon="d-arrow-left"></s-icon>
              <s-icon icon="prev"></s-icon>
              <span class='header-text'>{{tempTime.year}} 年 {{ tempTime.month + 1 }} 月</span>
              <s-icon icon="next"></s-icon>
              <s-icon icon="d-arrow-right"></s-icon>
          </div>
          <div class='s-date-picker-content-body'>
              <template v-if='mode === "date"'>
                  <div class='body-date'>
                    <span v-for='day in week' :key='day' class='cell'>
                      {{day}}
                    </span>
                  </div>
                  <div class='body-months'>
                    <div class='months-row' v-for='i in 6' :key='`$row_${i}`'>
                      <span v-for='j in 7' :key='`col_${j}`' class='body-col'>
                        {{ getCurrentDate(i, j).getDate()}}
                      </span>
                    </div>
                  </div>
              </template>
              <template v-else-if='mode === "year"'>
                  years
              </template>
              <template v-else-if='mode === "month"'>
                  months
              </template>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SInput from "../Input";
import SIcon from "../Icon";
import ClickOutside from 'vue-click-outside';

function getYearMontDate(value = new Date()) {
  const year = value.getFullYear();
  const month = value.getMonth();
  const date = value.getDate();
  return [year, month, date];
}

export default {
  name: "s-date-picker",
  props: {
    value: {
      type: [String, Date],
      default: () => new Date(),
    },
  },
  components: {
    SIcon,
    SInput
  },
  directives: {
      ClickOutside,
  },
  computed: {
    visibleData() {// 当月 1 号往前推算的日期 （ 6*7 = 42 天数）
      let firstDay = new Date(this.tempTime.year, this.tempTime.month, 1); // 当月1号对应时间
      let weekDay = firstDay.getDay();
      weekDay = weekDay === 0 ? 7: weekDay; // 当月1号对应星期几
      let start = firstDay - weekDay * 60 * 60 * 24 * 1000;// 如：7月1号对应周三，需要上月填补3天（周日、一、二），前移
      let arr = [];
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(start + i * 60 * 60 * 24 * 1000 )); // 用相对时间，来填补当前日历的 42  格，不用指明当前是哪个月。
      };
      return arr;
    },
    formattedDate() {
      if (!this.value) return; // 首次没有日期时，默认为空
      return `${this.time.year}-${this.time.month}-${this.time.month}`;
    }
  },
  data() {
    const [year, month, date] =  getYearMontDate(this.value || new Date());
    return {
      time: { year, month, date },
      tempTime: { year, month, date }, // operate this value
      week: ['日', '一', '二', '三', '四', '五', '六'],
      months: ['一月', '二月', '三月', '四月', '五月' ,'六月' ,'七月', '八月', '九月', '十月', '十一月', '十二月'],
      mode: 'date',
      isVisible: false,
    };
  },
  methods: {
      handleFocus() {
        this.isVisible = true;
      },
      handleBlur() {
          this.isVisible = false;
      },
      getCurrentDate(i, j) {
        return this.visibleData[(i-1)*7 + (j-1)];
      },
      isCurrentMonth(date) {
        
      }
  }
};
</script>

<style lang='scss'>
@import '@/styles/_var.scss';

.s-date-picker {
  display: inline-block;
  position: relative;
  .s-input {
    width: 200px;
    .s-icon {
      border: none;
      height: 26px;
      top: 6px;
      cursor: default;
      padding-right: 2px;
      &:hover {
        opacity: .5;
      }
    }
  }
  .s-date-picker-content {
      position: absolute;
      font-size: 14px;
      color: #666;
      width: 280px;
      user-select: none;
      z-index: 2;
      box-shadow: $box-shadow;
      text-align: center;
      .s-date-picker-content-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px;
        .s-icon {
            width: 16px;
            fill: #666;
        }
      }
      .cell, .body-col {
        width: 40px;
        line-height: 40px;
        display: inline-block;
      }
      .cell, .body-col, .header-text, .s-date-picker-content-header .s-icon {
        opacity: .7;
        cursor: pointer;
         &:hover {
           color: $primary;
           fill: $primary;
         }
      }
  }
}
</style>