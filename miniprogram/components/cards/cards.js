// components/cards/cards.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userID: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 用户头像和名字
    userAvatar: '/images/test7.jpg',
    userName: '小白',
    // 连续打卡天数
    recordDay: 233,
    // 读书小队名称
    groupName: '还未加入小队，快去加入一个吧~'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
