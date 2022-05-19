const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const product4 = document.getElementById("product4");
const product5 = document.getElementById("product5");
const product6 = document.getElementById("product6");
const product7 = document.getElementById("product7");
// init controller
var controller = new ScrollMagic.Controller();

var images = [
  "./static/animations/section_1/0001.png",
  "./static/animations/section_1/0002.png",
  "./static/animations/section_1/0003.png",
  "./static/animations/section_1/0004.png",
  "./static/animations/section_1/0005.png",
  "./static/animations/section_1/0006.png",
  "./static/animations/section_1/0007.png",
  "./static/animations/section_1/0008.png",
  "./static/animations/section_1/0009.png",
  "./static/animations/section_1/0010.png",
  "./static/animations/section_1/0011.png",
  "./static/animations/section_1/0012.png",
  "./static/animations/section_1/0013.png",
  "./static/animations/section_1/0014.png",
  "./static/animations/section_1/0015.png",
  "./static/animations/section_1/0016.png",
  "./static/animations/section_1/0017.png",
  "./static/animations/section_1/0018.png",
  "./static/animations/section_1/0019.png",
  "./static/animations/section_1/0020.png",
  "./static/animations/section_1/0021.png",
  "./static/animations/section_1/0022.png",
  "./static/animations/section_1/0023.png",
  "./static/animations/section_1/0024.png",
  "./static/animations/section_1/0025.png",
  "./static/animations/section_1/0026.png",
  "./static/animations/section_1/0027.png",
  "./static/animations/section_1/0028.png",
  "./static/animations/section_1/0029.png",
  "./static/animations/section_1/0030.png",
  "./static/animations/section_1/0031.png",
  "./static/animations/section_1/0032.png",
  "./static/animations/section_1/0033.png",
  "./static/animations/section_1/0034.png",
  "./static/animations/section_1/0035.png",
  "./static/animations/section_1/0036.png",
  "./static/animations/section_1/0037.png",
  "./static/animations/section_1/0038.png",
  "./static/animations/section_1/0039.png",
  "./static/animations/section_1/0040.png",
  "./static/animations/section_1/0041.png",
  "./static/animations/section_1/0042.png",
  "./static/animations/section_1/0043.png",
  "./static/animations/section_1/0044.png",
  "./static/animations/section_1/0045.png",
  "./static/animations/section_1/0046.png",
  "./static/animations/section_1/0047.png",
  "./static/animations/section_1/0048.png",
  "./static/animations/section_1/0049.png",
  "./static/animations/section_1/0050.png",
  "./static/animations/section_1/0051.png",
  "./static/animations/section_1/0052.png",
  "./static/animations/section_1/0053.png",
  "./static/animations/section_1/0054.png",
  "./static/animations/section_1/0055.png",
  "./static/animations/section_1/0056.png",
  "./static/animations/section_1/0057.png",
  "./static/animations/section_1/0058.png",
  "./static/animations/section_1/0059.png",
  "./static/animations/section_1/0060.png",
  "./static/animations/section_1/0061.png",
  "./static/animations/section_1/0062.png",
  "./static/animations/section_1/0063.png",
  "./static/animations/section_1/0064.png",
  "./static/animations/section_1/0065.png",
  "./static/animations/section_1/0066.png",
  "./static/animations/section_1/0067.png",
  "./static/animations/section_1/0068.png",
  "./static/animations/section_1/0069.png",
  "./static/animations/section_1/0070.png",
  "./static/animations/section_1/0071.png",
  "./static/animations/section_1/0072.png",
  "./static/animations/section_1/0073.png",
  "./static/animations/section_1/0074.png",
  "./static/animations/section_1/0075.png",
  "./static/animations/section_1/0076.png",
  "./static/animations/section_1/0077.png",
  "./static/animations/section_1/0078.png",
  "./static/animations/section_1/0079.png",
  "./static/animations/section_1/0080.png",
  "./static/animations/section_1/0081.png",
  "./static/animations/section_1/0082.png",
  "./static/animations/section_1/0083.png",
  "./static/animations/section_1/0084.png",
  "./static/animations/section_1/0085.png",
  "./static/animations/section_1/0091.png",
  "./static/animations/section_1/0092.png",
  "./static/animations/section_1/0093.png",
  "./static/animations/section_1/0094.png",
  "./static/animations/section_1/0095.png",
  "./static/animations/section_1/0096.png",
  "./static/animations/section_1/0097.png",
  "./static/animations/section_1/0098.png",
  "./static/animations/section_1/0099.png",
  "./static/animations/section_1/0101.png",
  "./static/animations/section_1/0102.png",
  "./static/animations/section_1/0103.png",
  "./static/animations/section_1/0104.png",
  "./static/animations/section_1/0105.png",
  "./static/animations/section_1/0106.png",
  "./static/animations/section_1/0107.png",
  "./static/animations/section_1/0108.png",
  "./static/animations/section_1/0109.png",
  "./static/animations/section_1/0110.png",
  "./static/animations/section_1/0111.png",
  "./static/animations/section_1/0112.png",
  "./static/animations/section_1/0113.png",
  "./static/animations/section_1/0114.png",
  "./static/animations/section_1/0115.png",
  "./static/animations/section_1/0116.png",
  "./static/animations/section_1/0117.png",
  "./static/animations/section_1/0118.png",
  "./static/animations/section_1/0119.png",
  "./static/animations/section_1/0120.png",
  "./static/animations/section_1/0121.png",
  "./static/animations/section_1/0122.png",
  "./static/animations/section_1/0123.png",
  "./static/animations/section_1/0124.png",
  "./static/animations/section_1/0125.png",
  "./static/animations/section_1/0126.png",
  "./static/animations/section_1/0127.png",
  "./static/animations/section_1/0128.png",
  "./static/animations/section_1/0129.png",
  "./static/animations/section_1/0130.png",
];
var obj = { curImg: 0 };
var tween1 = TweenMax.to(obj, 0.5, {
  curImg: images.length - 1, 
  roundProps: "curImg", 
  repeat: 3, 
  // immediateRender: true,		
  ease: Linear.easeNone, 
  onUpdate: function () {
    $("#myimg1").attr("src", images[obj.curImg]); 
  },
});

 
var scene1 = new ScrollMagic.Scene({
  triggerElement: product1,
  duration: 1000,
})
  .setTween(tween1)
  .addTo(controller)
  .addIndicators();


var images2 = [ "./static/animations/section_2/0001.png",
  "./static/animations/section_2/0002.png",
  "./static/animations/section_2/0003.png",
  "./static/animations/section_2/0004.png",
  "./static/animations/section_2/0005.png",
  "./static/animations/section_2/0006.png",
  "./static/animations/section_2/0007.png",
  "./static/animations/section_2/0008.png",
  "./static/animations/section_2/0009.png",
  "./static/animations/section_2/0010.png",
  "./static/animations/section_2/0011.png",
  "./static/animations/section_2/0012.png",
  "./static/animations/section_2/0013.png",
  "./static/animations/section_2/0014.png",
  "./static/animations/section_2/0015.png",
  "./static/animations/section_2/0016.png",
  "./static/animations/section_2/0017.png",
  "./static/animations/section_2/0018.png",
  "./static/animations/section_2/0019.png",
  "./static/animations/section_2/0020.png",
  "./static/animations/section_2/0021.png",
];

var obj2 = { curImg: 0 };
var tween2 = TweenMax.to(obj2, 0.5, {
  curImg: images.length - 1, 
  roundProps: "curImg", 
  repeat: 3, 
//  immediateRender: true,		
  ease: Linear.easeNone, 
  onUpdate: function () {
    $("#myimg2").attr("src", images2[obj2.curImg]); 
  },
});

 
var scene2 = new ScrollMagic.Scene({
  triggerElement: product2,
  duration: 2000,
})
  .setTween(tween2)
  .addTo(controller)
  .addIndicators();

// -------------------------------------------------------


 var images3 = [ "./static/animations/section_2/0009.png",
 "./static/animations/section_2/0010.png",
 "./static/animations/section_2/0011.png",
 "./static/animations/section_2/0012.png",
 "./static/animations/section_2/0013.png",
 "./static/animations/section_2/0014.png",
 "./static/animations/section_2/0015.png",
 "./static/animations/section_2/0016.png",
 "./static/animations/section_2/0017.png",
];

var obj3 = { curImg: 0 };
var tween3 = TweenMax.to(obj3, 0.5, {
  curImg: images.length - 1, 
  roundProps: "curImg", 
  repeat: 3, 
//  immediateRender: true,		
  ease: Linear.easeNone, 
  onUpdate: function () {
    $("#myimg3").attr("src", images3[obj3.curImg]); 
  },
});

// -------------------------------------------------------
var scene3 = new ScrollMagic.Scene({
  triggerElement: product3,
  duration: 2000,
})
  .setTween(tween3)
  .addTo(controller)
  .addIndicators();



// -------------------------------------------------------






  var images4 = [ "./static/animations/section_2/0009.png",
  "./static/animations/section_2/0010.png",
  "./static/animations/section_2/0011.png",
  "./static/animations/section_2/0012.png",
  "./static/animations/section_2/0013.png",
  "./static/animations/section_2/0014.png",
  "./static/animations/section_2/0015.png",
  "./static/animations/section_2/0016.png",
  "./static/animations/section_2/0017.png",
];

var obj4 = { curImg: 0 };
var tween4 = TweenMax.to(obj4, 0.5, {
  curImg: images.length - 1, 
  roundProps: "curImg", 
  repeat: 3, 
//  immediateRender: true,		
  ease: Linear.easeNone, 
  onUpdate: function () {
    $("#myimg4").attr("src", images4[obj4.curImg]); 
  },
});

 
var scene4 = new ScrollMagic.Scene({
  triggerElement: product4,
  duration: 2000,
})
  .setTween(tween4)
  .addTo(controller)
  .addIndicators();





// -------------------------------------------------------



  var images5 = [ "./static/animations/section_2/0009.png",
  "./static/animations/section_2/0010.png",
  "./static/animations/section_2/0011.png",
  "./static/animations/section_2/0012.png",
  "./static/animations/section_2/0013.png",
  "./static/animations/section_2/0014.png",
  "./static/animations/section_2/0015.png",
  "./static/animations/section_2/0016.png",
  "./static/animations/section_2/0017.png",
];

var obj5 = { curImg: 0 };
var tween5 = TweenMax.to(obj5, 0.5, {
  curImg: images.length - 1, 
  roundProps: "curImg", 
  repeat: 3, 
//  immediateRender: true,		
  ease: Linear.easeNone, 
  onUpdate: function () {
    $("#myimg5").attr("src", images5[obj5.curImg]); 
  },
});

 
var scene5 = new ScrollMagic.Scene({
  triggerElement: product5,
  duration: 2000,
})
  .setTween(tween5)
  .addTo(controller)
  .addIndicators();
// -------------------------------------------------------


// -------------------------------------------------------



var images6 = [ "./static/animations/section_2/0009.png",
"./static/animations/section_2/0010.png",
"./static/animations/section_2/0011.png",
"./static/animations/section_2/0012.png",
"./static/animations/section_2/0013.png",
"./static/animations/section_2/0014.png",
"./static/animations/section_2/0015.png",
"./static/animations/section_2/0016.png",
"./static/animations/section_2/0017.png",
];

var obj6 = { curImg: 0 };
var tween6 = TweenMax.to(obj6, 0.5, {
curImg: images.length - 1, 
roundProps: "curImg", 
repeat: 3, 
//  immediateRender: true,		
ease: Linear.easeNone, 
onUpdate: function () {
  $("#myimg6").attr("src", images6[obj6.curImg]); 
},
});


var scene6 = new ScrollMagic.Scene({
triggerElement: product6,
duration: 2000,
})
.setTween(tween6)
.addTo(controller)
.addIndicators();




// -------------------------------------------------------



var images7 = [ "./static/animations/section_2/0009.png",
"./static/animations/section_2/0010.png",
"./static/animations/section_2/0011.png",
"./static/animations/section_2/0012.png",
"./static/animations/section_2/0013.png",
"./static/animations/section_2/0014.png",
"./static/animations/section_2/0015.png",
"./static/animations/section_2/0016.png",
"./static/animations/section_2/0017.png",
];

var obj7 = { curImg: 0 };
var tween7 = TweenMax.to(obj7, 0.5, {
curImg: images.length - 1, 
roundProps: "curImg", 
repeat: 3, 
//  immediateRender: true,		
ease: Linear.easeNone, 
onUpdate: function () {
  $("#myimg7").attr("src", images7[obj7.curImg]); 
},
});


var scene7 = new ScrollMagic.Scene({
triggerElement: product7,
duration: 2000,
})
.setTween(tween7)
.addTo(controller)
.addIndicators();



