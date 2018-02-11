//answer.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    question_id: 0,
    feed: [],
    feed_length: 0
  },
  //事件处理函数
  bindItemTap: function() {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  onLoad: function (options) {
    var question_id = options.question_id;
    this.setData({question_id: question_id})
    var that = this;
    this.getData();
  },
  getData: function () {
    var feed = util.getData2();
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  },
  tapName: function(event){
    console.log(event)
  }
})
