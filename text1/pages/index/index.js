// pages/index/index.js
Page({
  data: {
  motto:"hello world",
  userInfo:{}
    },
    btnPlay:function(){
      wx.playBackgroundAudio({
        dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        success:function(){
         console.log(res)
        }
      })
    },
    onReady:function(){
      wx.onBackgroundAudioPlay(function (){
        console.log("start playing")
      });
      wx.onBackgroundAudioPause(function (){
        console.log("pause")
      });
    },
    btnGetInfo:function(){
      wx.getBackgroundAudioPlayerState({
        success:function(){
          console.log(res)
        }
      })
    },
    btnPause:function(){
      wx.pauseBackgroundAudio()({
        success: function(res) {
        }
      })
    },
    btnStop:function(){
      wx.stopBackgroundAudio()({
        success: function (res) {
        }
      })
    }

 
})