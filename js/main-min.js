$(function(){var a=ysd.YSDGlobal.root+"cms/api",b=$("#main");
	$.getJSON(a,function(a){if(a&&a.result=="success"){$("#item-template").tmpl(a.projects).prependTo("#main");
		var b=$("a.item"),d=$(".placeHolder");
		b.each(function(){var a=new ysd.index.YSDIndexItem;a.init($(this))});
		var e=Math.min(b.length,d.length);for(var f=0;f<e;f++)$(d.get(f)).remove()}c.close()});
	var c=new ysd.share.YSDLoading;c.open();
	var d=250,e=$(window).height(),f=Math.ceil(e/d),g=f*4;for(var h=0;h<g;h++)b.append('<div class="placeHolder"></div>');
	var i=new ysd.share.YSDBalloon;i.init("index");i.intro()});
ysd.index.YSDIndexItem=function(){return{$item:undefined,$bg:undefined,$images:undefined,id1:undefined,id2:undefined,shuffleRate:10,count:0,init:function(a){_.bindAll(this);this.$item=a;this.$bg=this.$item.find("div.bg");
this.$images=this.$item.find("div.image img");
this.$item.mouseenter(this.mouseenterHandler);
this.$item.mouseleave(this.mouseleaveHandler)},mouseenterHandler:function(a){clearInterval(this.id1);clearTimeout(this.id2);
	this.count=0;this.loop();this.id1=setInterval(this.loop,50)},showInfo:function(){clearInterval(this.id1);
		this.$item.find(".bg").show();
		this.$item.find(".text").show();
		this.count=0},mouseleaveHandler:function(a){clearInterval(this.id1);
			this.$item.find(".bg").hide();this.$item.find(".text").hide()},showImage:function(a){this.$images.each(function(b){b==a?$(this).show():$(this).hide()})},loop:function(){var a=this.$images.length,b=Math.min(a,4);if(a>1)if(this.count>=b){this.showInfo();
				this.showImage(Math.round(Math.random()*(this.$images.length-1)))}else{this.showImage(this.count);
					this.count++}else this.showInfo()}}};