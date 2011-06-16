$(function(){
	var sections = [];
	var requestSection = window.location.hash;
	var currentIdx = 0;
	$("div.section").each(function(){
		if("#"+this.id == requestSection){
			currentIdx = sections.length;
		}
		sections[sections.length] = this.id;
	});
	var currentSection;
	var selectBtn = function(btn){
		$("#"+btn+"-btn .btnbg").attr("src", "img/buttonselected.png")
		$("#"+btn+"-btn").animate({width:160});
	};
	var deselectBtn = function(btn){
		$("#"+btn+"-btn .btnbg").attr("src", "img/buttonnormal.png")
		$("#"+btn+"-btn").animate({width:128});
	};
	var clickHandler = function(name){
		return function(){
			if(!currentSection){
				$("#"+name).fadeIn(200);
				selectBtn(name);
			} else if(currentSection != name){
				deselectBtn(currentSection);
				$("#"+currentSection).fadeOut(200,	function(){ $("#"+name).fadeIn(200); });
				selectBtn(name);
			}
			currentSection = name;
			window.location.hash = name;
		}
	}
	var inHandler = function(name){
		return function(){
			if(currentSection != name){
				$("#"+name+"-btn .btnbg").attr("src", "img/buttonhover.png");
			}
		}
	}
	var outHandler = function(name){
		return function(){
			if(currentSection != name){
				$("#"+name+"-btn .btnbg").attr("src", "img/buttonnormal.png");
			}
		}
	}
	for(var i =0;i<sections.length;++i){
		var btn = sections[i];
		var btnId = "#"+btn+"-btn";
		$(btnId).click(clickHandler(btn)).mouseenter(inHandler(btn)).mouseleave(outHandler(btn));
		if(i == currentIdx)
			$(btnId).click();
		
	}
  var homebg = Raphael("homebg", 400, 400);
  homebg.circle(0, 0, 50).attr({"stroke":"#bbf", "stroke-width":2});
});
