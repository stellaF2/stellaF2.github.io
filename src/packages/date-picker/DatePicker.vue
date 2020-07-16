<template>
  <div class="s-date-picker" v-click-outside='handleBlur'>
    <s-input 
        placeholder="请选择日期" 
        prefix-icon='clock'
        @focus='handleFocus'
        :value='formattedDate'
        @change='handleChange'
    ></s-input>
    <transition name='fade' mode='out-in'>
      <div class='s-date-picker-content' v-if='isVisible'>
          <div class='s-date-picker-content-header'>
              <s-icon icon="d-arrow-left" @click='changeYear(-1)'></s-icon>
              <s-icon icon="prev" @click='changeMonth(-1)'></s-icon>
              <span class='header-text'>
                <span @click="mode = 'year'">{{tempTime.year}}</span> 年 
                <span @click="mode = 'month'">{{ tempTime.month + 1 }}</span> 月</span>
              <s-icon icon="next" @click='changeMonth(1)'></s-icon>
              <s-icon icon="d-arrow-right" @click='changeYear(1)'></s-icon>
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
                      <span 
                        v-for='j in 7' 
                        :key='`col_${j}`' 
                        @click='selectDate(getCurrentDate(i,j))'
                        class='body-col' 
                        :class='{
                          isCurrentMonth: isCurrentMonth(getCurrentDate(i, j)),
                          isCurrentDate: isCurrentDate(getCurrentDate(i,j)),
                          isSelected: isSelected(getCurrentDate(i,j)),
                        }'
                      >
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
      let m = this.time.month < 10 ? `0${m}` : m;
      if (!this.value) return; // 首次没有日期时，默认为空
      return `${this.time.year}-${this.time.month + 1}-${this.time.date}`;
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
  watch: {
    value(newValue) {
      let [year, month, date] = getYearMontDate(newValue);
      this.time = { year, month, date };
      this.tempTime = { ...this.time };
    }
  },
  methods: {
      handleChange(e) {
        let newValue = e.target.value;
        let regExp = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
        if (newValue.match(regExp)) {
          this.$emit('input', new Date(RegExp.$1, RegExp.$2 -1, RegExp.$3));
        } else {
          e.target.value = this.formattedDate;
        }
        this.handleBlur();
      },
      handleFocus() {
        this.isVisible = true;
      },
      handleBlur() {
          this.isVisible = false;
      },
      getCurrentDate(i, j) {
        return this.visibleData[(i-1)*7 + (j-1)];
      },
      isCurrentMonth(data) {
        const [y, m] = getYearMontDate(data);
        const {year, month} = this.tempTime;
        return y === year && m === month;
      },
      isCurrentDate(data) {
        const [y, m, d] = getYearMontDate(data);
        const [year, month, date] = getYearMontDate(new Date);
        return y === year && m === month && d === date;
      },
      selectDate(data) {
        this.$emit('input', data);
        this.handleBlur();
      },
      isSelected(data) {
        const { year, month, date } = this.time;
        const [ y, m, d ] = getYearMontDate(data);
        return year === y && month === m && date === d;
      },
      /* 改月和年*/ 
      changeMonth(count) {
        // let month = this.tempTime.month + count;
        // if (month >= 0 && month < 12 ) {
        //   this.tempTime.month += count;
        // }else if (month < 0) {
        //   this.changeYear(-1);
        //   this.tempTime.month = 11;
        // }else if (month >=12 ) {
        //   this.changeMonth(1);
        //   this.tempTime.month = 0;
        // }

        // 改进
        this.stepMonthYear('Month', count);
      },
      changeYear(count) {
        this.stepMonthYear('FullYear', count);
      },
      stepMonthYear(key, count) {
        const oldDate = new Date(this.tempTime.year, this.tempTime.month);
        const newDate = oldDate[`set${key}`](oldDate[`get${key}`]() + count);
        const [year, month] = getYearMontDate(new Date(newDate));
        this.tempTime.year = year;
        this.tempTime.month = month;
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
      .cell, .header-text span, .s-date-picker-content-header .s-icon {
        opacity: .6;
        cursor: pointer;
         &:hover {
           color: $primary;
           fill: $primary;
         }
      }
      .body-col {
        cursor: pointer;
        opacity: .6;
      }
      .body-col.isCurrentMonth:not(.isSelected) {
        opacity: 1;
        &:hover {
           color: $primary;
           fill: $primary;
         }
      }
      
      .body-col.isSelected{
        background: $primary;
        color: #fff;
        border-radius: 50%;
      }
      .body-col.isCurrentDate {
        color: $primary;
        background: #fff;
      }
  }
}
</style>