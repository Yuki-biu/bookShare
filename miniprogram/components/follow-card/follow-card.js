// components/follow-card/follow-card.js
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
    userName: '',
    avatarUrl: '' 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 通过传入的userID在库中搜索头像和昵称等信息
    getUserInfo() {

    }
  }
})
