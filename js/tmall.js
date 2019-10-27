$(function() {

	//所有a标签变色
	$("a").hover(function() {
		$(this).css({
			"color": "red"
		})
	}, function() {
		$(this).css({
			"color": ""
		})
	})
	



	//顶部固定栏显示下滑

	$(window).scroll(function() {
		var win_top = $(this).scrollTop(); //获取滚动条位置
		//console.log(win_top, 'aa');
		if (win_top > 668) {
			$("#fixed_Top").stop().slideDown();

		} else {
			$("#fixed_Top").stop().slideUp();
		}
	})

//顶部栏隐藏的div显示 收藏夹 网站导航等 
$(".top_right li").hover(function(){
	$(this).children("div").css("display","block")
	$(this).addClass("lovesfather");
},function(){
	$(this).children("div").css("display","none")
	$(this).removeClass("lovesfather");
})





	//导航列表变色
	$(".nav_first_ul li").hover(function() {
		$(this).css({
			"background-color": "white"
		})
		$(this).children("a").css({
			"color": "red"
		})

	}, function() {
		$(this).css("background-color", "")
		$(this).children("a").css({
			"color": ""
		})
	})




	//轮播图start
	var imags = new Array("nav_img1.jpg", "nav_img2.jpg", "nav_img3.jpg", "nav_img4.jpg", "nav_img5.jpg",
		"nav_img6.jpg");
	var backcolors = new Array("rgb(114,185,217)", "rgb(232,232,232)", "rgb(232,232,232)", "rgb(255,84,2)",
		"rgb(254,148,72)", "rgb(24,194,217)")
	var hotimg
	/* console.log(imags); */
	var index = 0;
	var flag = false;

	function setindex(index) {
		$("#banner>.container>img").attr({
			src: "img/天猫图片/banner/" + imags[index]
		});
		$("#banner>.container>ul li").eq(index).css("background-color", "#fff");
		$("#banner>.container>ul li").eq(index).siblings().css("background-color", "");
		$("#banner").css("background-color", backcolors[index]);
	}
	//暂停轮播图
	$("#banner>.container").hover(function() {
		flag = true;
	}, function() {
		flag = false;
	})

	//鼠标触发 放长方形上
	$("#banner>.container>ul li").mouseover(function() {
		index = $(this).index();
		setindex(index);
	});


	setInterval(function() {
		if (flag) {
			return 0;
		}
		var imags_length = imags.length; //图片数组长度
		if (index < imags_length - 1) {
			index++;
		} else {
			index = 0;
		}
		/* 	console.log(index) */
		setindex(index);
	}, 1000);
	//轮播图end



	//列表详情start
	var js = 1;
	$(".nav_first_ul>li").hover(function() {
		$(this).children(".nav_details").css("display", "block");
	}, function() {
		$(this).children(".nav_details").css("display", "none");
	});
	//列表详情end

	//热销品牌刷新按钮
	$("#hot_log button").hover(function() {
		$(this).children("svg").css("transform", "rotate(360deg)"); //刷新转圈
		$(this).css({
			"background-color": "rgb(255,0,54)",
			"color": "white"
		}); //变背景色

	}, function() {
		//刷新按钮恢复
		$(this).children("svg").css("transform", "rotate(0deg)");
		$(this).css({
			"background-color": "",
			"color": "#55A532"
		});

	}).click(function() {
		if (js % 2 != 0) {
			$("#hot_log a img").attr({
				src: "img/天猫图片/top_logo/giao.jpg"
			})
		} else {
			$("#hot_log a img").attr({
				src: "img/天猫图片/top_logo/top_log1.PNG"
			})
		}


		$("#hot_log a ").css("transform", "rotateY(" + (js * 180) + "deg)"); //整体翻转
		$(".hot_log_background").css("transform", "rotateY(" + (-js * 180) + "deg)"); //优惠券在翻回来
		js++;

	})


	//显示优惠券方法
	$("#hot_log a").hover(function() {
		//灰色div显示
		$(this).children(".hot_log_background").css("display", "block")
	}, function() {
		$(this).children(".hot_log_background").css("display", "none")
	})


	//显示红色边框
	$("#shopp a").hover(function() {
		$(this).css("border", " red 1px solid");
	}, function() {
		$(this).css("border", "transparent 1px solid");
	})


	//给所有a标签地址 随便给的
	$("a").attr({
		href: "https://1111.tmall.com/?spm=875.7931836/B.2015001.1.66144265lvfYcA&wh_weex=true&wh_biz=tm&acm=lb-zebra-148799-741251.1003.4.6841428&wx_main_hc=true&scm=1003.4.lb-zebra-148799-741251.OTHER_1_6841428"
	})

})
