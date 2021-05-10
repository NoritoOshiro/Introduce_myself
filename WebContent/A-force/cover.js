var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
      var responsiveImage = [
        { src: 'D469D5F2-06B5-4AA7-9298-95A67C4D7C6B.jpg'},
        { src: 'image/IMG_2424.jpeg'},
        { src: 'image/IMG_6302.jpeg'}
      ];
    } 


$('#slider').vegas({
    overlay: true,
    transition: 'blur',
    transitionDuration: 2000,
    delay: 10000,
    animationDuration: 20000,
    animation: 'kenburns',
    slides: responsiveImage,
  });