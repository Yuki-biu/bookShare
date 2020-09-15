// component/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    }, 
    statusBarColor: {
      type: String,
      value: '#fff'
    },
    navBarColor: {
      type: String,
      value: '#fff'
    },
    titleColor: {
      type: String,
      value: '#000'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarStyle: "",
    navBarStyle: "",
    topHeight: 0
  },

  lifetimes: {
    attached: function() {
      let navBarStyle = `background-color:${this.data.navBarColor};
      height:${wx.db.navBarHeight}px; color:${this.data.titleColor}`

      let statusBarStyle = `background-color:${this.data.statusBarColor};
      height:${wx.db.statusBarHeight}px;`

      let topHeight = wx.db.navBarHeight + wx.db.statusBarHeight

      this.setData({
        navBarStyle,
        statusBarStyle,
        topHeight
      })

      // console.log(this.data)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
