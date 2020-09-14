//app.js
App({
  onLaunch: function () {
    wx.db = {}
    let info = wx.getSystemInfoSync()
    wx.db.statusBarHeight = info.statusBarHeight

    if(info.platform === 'android') {
      wx.db.navBarHeight = 48
    } else {
      wx.db.navBarHeight = 44
    }
  },
  globalData: {
    userInfo: null
  }
})
