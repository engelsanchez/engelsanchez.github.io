$(function(){
	var remoteSections = { reading:1,resume:1};
	var sections = [];
	var requestSection = window.location.hash.replace(/_/,"");
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
			if(currentSection && currentSection != name){
				deselectBtn(currentSection);
			}

			if(remoteSections[name]){
				if(currentSection)
					$("#"+currentSection).fadeOut(200);
				$.get(name+".html", 
					function(data){
						$("#"+name).html(data).fadeIn(200);
					}, 
					function(){alert("Failed to fetch section "+name);});
			} else {
				if(currentSection)
					$("#"+currentSection).fadeOut(200,	function(){ $("#"+name).fadeIn(200); });
				else
					$("#"+name).fadeIn(200);
			}

			selectBtn(name);
			currentSection = name;
			window.location.hash = "_"+name;
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
	for(var i=0;i<sections.length;++i){
		var btn = sections[i];
		var btnId = "#"+btn+"-btn";
		$(btnId).click(clickHandler(btn)).mouseenter(inHandler(btn)).mouseleave(outHandler(btn));
		if(i == currentIdx)
			$(btnId).click();
		
	}
//	var homebg = Raphael("homebg", 400, 400);
//	homebg.circle(0, 0, 50).attr({"stroke":"#bbf", "stroke-width":2});

	// Initial placement for love items
	var center = { x: 329, y: 80 };
	var r = {x:240, y:60 };
	var yfactor = r.y / (1.0 * r.x);
	var loveItems = $(".love-item");
	var nLoveItems = loveItems.length;
	var angleStep = 360 / nLoveItems;
	var initAngle = 0;
	var lx = 100 / 2.0, ly = 40 / 2.0;
  
	var updateFn = function(){
		var angle = initAngle;
		loveItems.each(function(){
			var x = center.x - Math.sin(Math.PI * angle / 180) * r.x - lx;
			var y = center.y + yfactor * ( Math.cos(Math.PI * angle / 180) * r.x ) - ly;
			angle += angleStep;
			$(this).css({top: y + "px", left: x + "px" });
		});
		initAngle += .2;
		initAngle = (initAngle+360) % 360;  // watch out, I think this converts to int first
		setTimeout(updateFn, 400);
	};
	
	updateFn();
});
