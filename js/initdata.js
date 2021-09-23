$(function () {
  const alarmBox = document.getElementsByClassName('alarmBox')[0]
  const alarmscroll = document.getElementsByClassName('alarmscroll')[0]
  const scrollHeight = alarmscroll.scrollHeight - alarmBox.offsetHeight
  console.log(alarmBox.offsetHeight, alarmscroll.scrollHeight, scrollHeight);

  const scrollframes = ` @keyframes scroll-run{
    
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
      -webkit-transform: translate3d(0, -${scrollHeight}px, 0);
      transform: translate3d(0, -${scrollHeight}px, 0);
  }
}`
  // 创建style标签
  const style = document.createElement('style');
  // 将 keyframes样式写入style内
  style.innerHTML = scrollframes;
  // 将style样式存放到head标签
  document.getElementsByTagName("head")[0].appendChild(style);

  alarmscroll.style.cssText = `
  -webkit-animation: 10s scroll-run linear infinite normal;
   animation: 10s scroll-run linear infinite normal;
  `

  const nowDate = new Date()
  const dateNow = nowDate.getFullYear() + '-' + (nowDate.getMonth()+1) + '-' + nowDate.getDate()
  $('.box1').html(dateNow)

  $.growl.warning({ 
    title: "设备失窃", 
    message: "每次开机对比，有报警提示（由于电竞酒店机器配置高，国内已经出现很多被客人带低端配件进去更换掉造成损失的情况） 在房态窗口里会在第一次启动记录电脑配置，以后每次开机都会对比配置是否正常，配置不符会报警，这个配置更新只有老板账号才能修改； 退房的时候，如果房间电脑是关闭状态、或者硬件比对不正确，是无法退房的，需要查房的人把电脑开起来，比对符合的话方可点退房，退房后电脑自动关闭，无需再人工操作" 
  });
  console.log(document.body.clientWidth);
})