$(document).ready(function() {
  const $target = $('#target');
  const targetSize = $target.outerWidth();
  const prePosition = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
  let loopIndex = 0
  let leave = false // 眼睛是否长期离开

  function moveTarget() {
    // Move the model target to where we predict the user is looking to
    if (training.currentModel == null || training.inTraining) {
      return;
    }
    training.getPrediction().then(prediction => {
      const width = $('body').width()
      const height = $('body').height()
      const left = prediction[0] * ($('body').width() - targetSize);
      const top = prediction[1] * ($('body').height() - targetSize);
      $target.css('left', left + 'px');
      $target.css('top', top + 'px');
      if (loopIndex < 5) {
        prePosition[loopIndex][0] = left
        prePosition[loopIndex][1] = top
        loopIndex = loopIndex + 1
      } else {
        const result = prePosition.reduce((pre, cur) => {
          // 判断每一项是否相等
          if (pre[0] === cur[0] && pre[1] === cur[1]) {
            return pre
          } else {
            return false
          }
        })
        if (result) {
          leave = true
        } else {
          leave = false
        }
        loopIndex = 0
      }
      // prePosition.fo
      // if (left < 10 || top < 10 || left > width - 10 || top > height - 10 || leave) {
      //   document.getElementById('audio-play').volume = 1
      // } else {
      //   document.getElementById('audio-play').volume = 0.1
      // }
      if (leave) {
        document.getElementById('audio-play').volume = 1
      } else {
        document.getElementById('audio-play').volume = 0.1
      }
    });
  }

  setInterval(moveTarget, 100);

  async function loadData() {
    dataset.fromJSON(dataJsonObj);
    training.fitModel();
  }

  loadData()
});
