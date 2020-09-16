// components/calendar/calendar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // lastMonth: {
    //   type: String,
    //   value: '◀'
    // },
    // nextMonth: {
    //   type: String,
    //   value: '▶'
    // },
    weekText: {
      type: Array,
      value: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '2020年8月',
    emptyGridBefore: [],  // 上个月
    thisMonthDays: [],  // 这个月
    emptyGridAfter: [],  // 下个月
    format: '', // 格式化日期
    year: 0,
    month: 0,
    date: 0,
    // 大写为常量 用来匹配是否为当天
    YEAR: 0,
    MONTH: 0,
    DATE: 0,
  },

  ready: function() {
    this.today()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    today() { // 默认选中当天 并初始化组件
      let DATE = new Date(),
          year = DATE.getFullYear(),
          month = DATE.getMonth() + 1,
          date = DATE.getDate(),
          select = year + '-' + this.zero(month) + '-' + this.zero(date)

      this.setData({
        format: select,
        year: year,
        month: month,
        date: date,
        YEAR: year,
        MONTH: month,
        DATE: date
      })

      // 初始化日历组件
      this.display(year, month, date)
    },

    display(year, month, date) {
      this.setData({
        year,
        month,
        date,
        title: year + '年' + this.zero(month) + '月'
      })
      this.createDays(year, month)
      this.createEmptyGrids(year, month)
    },

    // 绘制当月占格
    createDays(year, month) {
      let thisMonthDays = [],
          days = this.getThisMonthDays(year, month)
          
      for (let i = 1; i <= days; i++ ) {
        thisMonthDays.push({
          date: i,
          dateFormat: this.zero(i),
          monthFormat: this.zero(month),
          week: this.data.weekText[new Date(Date.UTC(year, month - 1, i)).getDay()]
        })
      }

      this.setData({
        thisMonthDays
      })
    },

    // 获取当月空出的天数
    createEmptyGrids(year, month) {
      let week = new Date(Date.UTC(year, month - 1, 1)).getDay(),
          emptyGridBefore = [],
          emptyGridAfter = [],
          emptyDays = (week == 0 ? 7 : week);
      // 当月的天数
      let thisMonthDays = this.getThisMonthDays(year, month)
      //上个月的天数
      let preMonthDays = month - 1 < 0 ? this.getThisMonthDays(year - 1, 11) : this.getThisMonthDays(year, month - 1)

      // 空出的日期
      for (let i = 1; i <= emptyDays; i++) {
        emptyGridBefore.push(preMonthDays - emptyDays + i)
      }

      let after = (42 - thisMonthDays - emptyDays) - 7 >= 0 
                  ? (42 - thisMonthDays - emptyDays) - 7 : (42 - thisMonthDays - emptyDays)

      for( let i = 1; i <= after; i++) {
        emptyGridAfter.push(i)
      }

      this.setData({
        emptyGridBefore,
        emptyGridAfter
      })
    },

    getThisMonthDays(year, month) {
      return new Date(year, month, 0).getDate()
    },

    zero(i) {
      return i >= 10 ? i : ('0' + i)
    }
  }
})
