function changeImages(event, bgImage, fgImage) {
  // 获取按钮组，移除所有按钮的选中状态
  const buttons = document.querySelectorAll('.cmp-button');
  buttons.forEach(button => button.classList.remove('cmp-btn-checked'));

  // 为当前点击的按钮添加选中状态
  event.target.classList.add('cmp-btn-checked');

  // 更新背景图片和前景图片的 src
  document.querySelector('.background-img img').src = bgImage;
  document.querySelector('.foreground-img img').src = fgImage;

  // 重置 slider 的位置
  const slider = document.getElementById('slider');
  slider.value = 50;
  document.querySelector('.foreground-img img').style.clipPath = `inset(0 50% 0 0)`;
  document.querySelector('.slider-button').style.left = `calc(50% - 25px)`;
  document.querySelector('.slider-line').style.left = `calc(50%)`;
}

// 替换 jQuery 的 slider 事件监听为原生 JavaScript
const slider = document.getElementById('slider');
slider.addEventListener('input', (e) => {
  const sliderPos = e.target.value;

  // 用 clip-path 裁切前景图片
  const foregroundImg = document.querySelector('.foreground-img img');
  foregroundImg.style.clipPath = `inset(0 ${100 - sliderPos}% 0 0)`;

  // 更新 slider 按钮和分割线的位置
  const sliderButton = document.querySelector('.slider-button');
  const sliderLine = document.querySelector('.slider-line');
  sliderButton.style.left = `calc(${sliderPos}% - 25px)`;
  sliderLine.style.left = `calc(${sliderPos}%)`;
});