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
    // 通用数据
    infoTypes: ['评论了', '点赞了你的社区动态', '关注了你', '发布了动态：'],
    infoDetail: '你看到我啦？那你获取数据失败辣!试一试会不会变成省略号',
    infoTime: '2020-09-15',
    userName: '晴明',
    avatarUrl: '/images/test6.jpg',
    // 评论&&点赞
    hasDetail: true,
    // 关注
    isFollow: false,
    // 动态卡片数据
    isLike: false,
    likeIcons: ['/images/like.png', '/images/like_no.png'],
    likeIcon: '',
    commentIcon: '/images/comment.png',
    imgsUrl: [
      '/images/test1.jfif',
      '/images/test2.jpg',
      '/images/test3.jpg',
      '/images/test4.jpg',
      '/images/test5.jpg',
      '/images/test6.jpg',
      '/images/test7.jpg',
      '/images/test8.jpg',
      '/images/test9.jpg',
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 通过传入的userID在库中搜索头像和昵称等信息
    getUserInfo() {

    },
    // 判断是否需要摘要信息
    hideDetail() {
      if (this.data.infoType == '2' || this.data.infoType == '3') {
        this.setData({
          hasDetail: false
        })
      }
    },
    // 点击关注按钮
    changeFollow() {
      this.setData({
        isFollow: !this.data.isFollow
      })
    },
    // 点击点赞按钮
    changeLike() {
      this.setData({
        isLike: !this.data.isLike
      })
      this.giveLikeIcon()
    },
    // 同步改变点赞图标
    giveLikeIcon() {
      if (this.data.isLike) {
        this.setData({
          likeIcon: this.data.likeIcons[0]
        })
      } else {
        this.setData({
          likeIcon: this.data.likeIcons[1]
        })
      }
    }
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      // console.log('attached')
      this.hideDetail()
      this.giveLikeIcon()
    }
  }
})
