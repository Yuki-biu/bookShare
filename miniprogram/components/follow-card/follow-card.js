// components/follow-card/follow-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userID: {
      type: String,
      value: ''
    },
    infoType: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    infoTypes: ['评论了', '点赞了你的社区动态', '关注了你'],
    infoDetail: '你看到我啦？那你获取数据失败辣!试一试会不会变成省略号',
    infoTime: '2020-09-15',
    userName: '神乐神乐神乐神乐神乐神乐神乐神乐神乐神乐',
    hasDetail: true,
    avatarUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600164985690&di=6ee2862862266ee7c44f27adf46c4487&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fc29e4c72331db35e3fab2fed6f2de67fce4b64fd.jpg' 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 通过传入的userID在库中搜索头像和昵称等信息
    getUserInfo() {

    },
    hideDetail() {
      if (this.data.infoType == '2') {
        this.setData({
          hasDetail: false
        })
      }
    }
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      // console.log('attached')
      this.hideDetail()
    }
  }
})
