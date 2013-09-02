/*! kcharts - v1.2 - 2013-09-02 2:14:02 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/scatterchart/theme",function(){var l="{COLOR}",t={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:l},hoverAttr:{stroke:"#fff",r:5,fill:l,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:l},hoverAttr:{stroke:"#fff",r:5,fill:l,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:l},hoverAttr:{stroke:"#fff",r:5,fill:l,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}}};return t}),KISSY.add("gallery/kcharts/1.2/scatterchart/index",function(l,t,e,i,r,n,s,a,o,c,h,f){var d,u=l.all,p=l.Event,g="ks-chart-",x=g+"default",v=g+"evtlayout",y=v+"-rects",_="{COLOR}",m=function(l){var t=this;t._cfg=l,t._cfg.zoomType="xy",t.init()};return l.extend(m,i,{init:function(){var t=this;if(i.prototype.init.call(t,t._cfg),t.chartType="scatterchart",t._$ctnNode[0]){var e={themeCls:x,autoRender:!0,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},colors:[],subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:_,opacity:.6},hoverAttr:{stroke:"#fff",r:5,fill:_,"stroke-width":0,opacity:1}},legend:{isShow:!1},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}};t._finished=[],x=t._cfg.themeCls||e.themeCls,t._cfg=l.mix(l.mix(e,o[x],f,f,!0),t._cfg,f,f,!0),t.color=d=new n({themeCls:x}),t._cfg.colors.length>0&&d.removeAllColors();for(var r in t._cfg.colors)d.setColor(t._cfg.colors[r]);t._cfg.autoRender&&t.render(!0)}},drawTitle:function(){var t=this,e=t.htmlPaper,i=x+"-title",r=t._cfg,n=t._innerContainer,s=.6*n.y;r.title.isShow&&""!=r.title.content&&(t._title=e.rect(0,0,t._$ctnNode.width(),s).addClass(i).css(l.mix({"line-height":s+"px"},r.title.css)).html(r.title.content))},drawSubTitle:function(){var t=this,e=t.htmlPaper,i=x+"-subtitle",r=t._cfg,n=t._innerContainer,s=.4*n.y;r.subTitle.isShow&&""!=r.subTitle.content&&(t._subTitle=e.rect(0,.6*n.y,t._$ctnNode.width(),s).addClass(i).css(l.mix({"line-height":s+"px"},r.subTitle.css)).html(r.subTitle.content))},processAttr:function(t,e){var i=l.clone(t);for(var r in i)i[r]&&"string"==typeof i[r]&&(i[r]=i[r].replace(_,e));return i},diffStocksSize:function(){var t=this,e=t._cfg.points.attr.r,r=t._datas.total,n=[];for(var s in r)n=n.concat(i.prototype.getArrayByKey.call(null,r[s].data,2));if(n.length)for(var s in t._points){var a=i.prototype.getArrayByKey.call(null,r[s].data,2);l.log(a);for(var o in t._points[s])a.length>0&&(t._points[s][o].r=a[o]*e)}else{l.log("haha");for(var s in t._points)for(var o in t._points[s])t._points[s][o].r=e}},drawAllStocks:function(){var l=this;l._stocks={_stocks:[]};for(var t in l._points)l._stocks[t]={stocks:l.drawStocks(t)}},drawStocks:function(l){var t=this,e=[],i=t.color.getColor(l).DEFAULT;for(var r in t._points[l]){var n=t._points[l][r];e[r]=t.drawStock(n.x,n.y,n.r,{stroke:i,fill:i,r:n.r})}return e},drawStock:function(l,t,e,i){var r=this,n=r.paper,s=r._cfg.points.attr;return n.circle(l,t,e,i).attr(s).attr(i)},drawGridsX:function(){for(var l=this,t=l._centerPoints,e=0,i=t.length;i>e;e++){var r=l.drawGridX(t[e]);l._gridsX.push(r)}return l._gridsX},drawGridX:function(l,t){var e=this,i=e._innerContainer.tl.y,r=e._innerContainer.height,t=t||e._cfg.xGrids.css,n=e.htmlPaper,s=e._cfg.themeCls+"-gridsx";return n.lineY(l.x,i,r).addClass(s).css(e._cfg.xGrids.css)},drawGridY:function(l,t){var e=this,i=e._innerContainer.width,t=t||e._cfg.yGrids.css,r=e.htmlPaper,n=e._cfg.themeCls+"-gridsy";return r.lineX(l.x,l.y,i).addClass(n).css(t)},drawGridsY:function(){for(var l=this,t=l._innerContainer.tl.x,e=l._pointsY,i=0,r=e.length;r>i;i++)l._gridsY[i]={0:l.drawGridY({x:t,y:e[i].y}),num:l.coordNum[i]}},drawAxisX:function(){var l=this,t=l._innerContainer,e=t.bl,i=t.width,r=l.htmlPaper,n=l._cfg.themeCls+"-axisx";return l._axisX=r.lineX(e.x,e.y,i).addClass(n).css(l._cfg.xAxis.css||{}),l._axisX},drawAxisY:function(){var l=this,t=l._innerContainer,e=t.tl,i=t.height,r=l.htmlPaper,n=l._cfg.themeCls+"-axisy";return l._axisY=r.lineY(e.x,e.y,i).addClass(n).css(l._cfg.yAxis.css||{}),l._axisY},drawLabelsX:function(){var l=this;for(var t in l._pointsX)l._labelX[t]=l.drawLabelX(t,l._pointsX[t].number)},drawLabelsY:function(){var l=this;for(var t in l._pointsY)l._labelY[t]={0:l.drawLabelY(t,l._pointsY[t].number),num:l._pointsY[t].number};return l._labelY},drawLabelX:function(t,i){var r,n=this,s=n.htmlPaper,a=n._pointsX,o=a.length||0,c=n._cfg.themeCls+"-xlabels",h="{{data}}",d="";return o>t?(h=n._cfg.xLabels.template||h,d=l.isFunction(h)?h(t,i):e(h).render({data:i}),r=a[t],r[0]=s.text(r.x,r.y,"<span class="+c+">"+d+"</span>","center").children().css(n._cfg.xLabels.css),r[0]):f},drawLabelY:function(t,i){var r=this,n=r.htmlPaper,s=r._cfg.themeCls+"-ylabels";return tpl="{{data}}",content="",tpl=r._cfg.yLabels.template||tpl,content=l.isFunction(tpl)?tpl(t,i):e(tpl).render({data:i}),content&&n.text(r._pointsY[t].x,r._pointsY[t].y,"<span class="+s+">"+content+"</span>","right","middle").children().css(r._cfg.yLabels.css)},renderTip:function(){var t=this,e=t._cfg,i=t._innerContainer,r=e.tip.boundryDetect?{x:i.tl.x,y:i.tl.y,width:i.width,height:i.height}:{},n=l.mix(e.tip,{rootNode:t._$ctnNode,clsName:e.themeCls,boundry:r});return t.tip=new h(n),t.tip},renderEvtLayout:function(){var l,t=this,e=t._cfg,i=t._innerContainer,r=(i.tl.y,i.height),n=t._evtEls._rects=[];l=t._evtEls.paper?t._evtEls.paper:t._evtEls.paper=new s(t._$ctnNode,{clsName:v,prependTo:!1,width:i.width,height:r,left:i.tl.x,top:i.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var a in t._points){var n=[];for(var o in t._points[a]){var c=2*(t._points[a][o].r||e.points.attr.r);n[o]=l.rect(t._points[a][o].x-c/2,t._points[a][o].y-c/2,c,c).attr({line_index:a,index:o}).addClass(y)}t._evtEls._rects[a]=n}},clearEvtLayout:function(){var l=this;if(l._evtEls._rects)for(var t in l._evtEls._rects)for(var e in l._evtEls._rects[t])l._evtEls._rects[t][e].remove()},renderLegend:function(){var t=this,e=t._cfg.legend,i=e.container&&u(e.container)[0]?u(e.container):t._$ctnNode,r=t._innerContainer,n=t.color._colors,s=n.length,o=t._cfg,c=t._cfg.series,h=l.map(c,function(l,t){t%=s;var e={},i=n[t];return e.text=l.text,e.DEFAULT=i.DEFAULT,e.HOVER=i.HOVER,e}),f=l.merge({interval:20,iconright:5,showicon:!0},o.legend.globalConfig);return t.legend=new a({container:i,paper:t.paper,bbox:{width:r.width,height:r.height,left:r.x,top:r.y},align:o.legend.align||"bc",offset:o.legend.offset||[0,30],globalConfig:f,config:h}),t.legend.on("click",function(l){var t=l.index,e=(l.text,l.icon,l.el);1!=e.hide?(this.hidePoints(t),e.hide=1,e.disable()):(this.showPoints(t),e.hide=0,e.enable())},this),t.legend},showPoints:function(t){var e=this;i.prototype.recoveryData.call(e,t),e._clonePoints[t]=e._points[t],e.animateGridsAndLabels(),e.animateSiblingsPoints(t),e.diffStocksSize(),e._stocks[t]={stocks:e.drawStocks(t)},e.clearEvtLayout(),e.renderEvtLayout(),e.bindEvt(),l.log(e)},hidePoints:function(l){var t=this;i.prototype.removeData.call(t,l),delete t._clonePoints[l],t.animateGridsAndLabels();for(var e in t._stocks[l].stocks)t._stocks[l].stocks[e].remove();t.animateSiblingsPoints(l),t.clearEvtLayout(),t.renderEvtLayout(),t.bindEvt()},animateSiblingsPoints:function(l){var t=this;for(var e in t._stocks)if(l!=e)for(var i in t._stocks[e].stocks)t._points[e]&&t._stocks[e].stocks[i].animate({cx:t._points[e][i].x,cy:t._points[e][i].y},400)},animateGridsAndLabels:function(){var l=this,t=l._cfg.zoomType;if("y"==t){for(var e in l._labelX)l._labelX[e]&&l._labelX[e][0]&&u(l._labelX[e][0]).remove(),l._gridsX[e]&&l._gridsX[e][0]&&u(l._gridsX[e][0]).remove();l.drawGridsX(),l.drawLabelsX()}else if("x"==t){for(var e in l._labelY)l._labelY[e]&&l._labelY[e][0]&&l._labelY[e][0].remove(),l._gridsY[e]&&l._gridsY[e][0]&&l._gridsY[e][0].remove();l.drawGridsY(),l.drawLabelsY()}else if("xy"==t){for(var e in l._labelY)l._labelY[e]&&l._labelY[e][0]&&l._labelY[e][0].remove(),l._gridsY[e]&&l._gridsY[e][0]&&l._gridsY[e][0].remove();l.drawGridsY(),l.drawLabelsY();for(var e in l._labelX)l._labelX[e]&&l._labelX[e][0]&&u(l._labelX[e][0]).remove(),l._gridsX[e]&&l._gridsX[e][0]&&u(l._gridsX[e][0]).remove();l.drawGridsX(),l.drawLabelsX()}},render:function(t){var e=this,i=e._cfg,n=i.themeCls;t&&e._$ctnNode.html(""),e.paper=r(e._$ctnNode[0],i.width,i.height,{position:"absolute"}),e.htmlPaper=new s(e._$ctnNode,{clsName:n}),e._clonePoints=e._points,e.drawTitle(),e.drawSubTitle(),i.tip.isShow&&e.renderTip(),i.xGrids.isShow&&e.drawGridsX(),i.yGrids.isShow&&e.drawGridsY(),i.xAxis.isShow&&e.drawAxisX(),i.yAxis.isShow&&e.drawAxisY(),i.xLabels.isShow&&e.drawLabelsX(),i.yLabels.isShow&&e.drawLabelsY(),e.diffStocksSize(),e.drawAllStocks(),i.legend.isShow&&e.renderLegend(),e.renderEvtLayout(),e.afterRender(),e.bindEvt(),l.log(e)},bindEvt:function(){var t=this,e=t._evtEls;l.clone(t._cfg.points.hoverAttr),p.detach(u("."+y,u("."+v,t._$ctnNode)),"mouseenter"),p.on(u("."+y,u("."+v,t._$ctnNode)),"mouseenter",function(l){var e=u(l.currentTarget),i=e.attr("index"),r=e.attr("line_index");t._points[r][i].dataInfo&&(t.stockChange(r,i),t._cfg.tip.isShow&&t.tipHandler(r,i))}),p.detach(e.paper.$paper,"mouseleave"),p.on(e.paper.$paper,"mouseleave",function(){t.tip&&t.tip.hide(),t.paperLeave()})},stockChange:function(l,t){var e=this,i=e._stocks[l],r={target:i.stocks[t],currentTarget:i.stocks[t],lineIndex:Math.round(l),stockIndex:Math.round(t)};e.fire("stockChange",r)},tipHandler:function(t,e){var i,r,n=this,s=n.color.getColor(t).DEFAULT,a=n.tip,o=n._cfg,c=o.tip.template,h=a.getInstance();c&&(i=n._points[t][e].dataInfo,l.isFunction(c)?a.setContent(c(i)):a.renderTemplate(c,i),r=n._points[t][e],a.isVisable()?a.animateTo(r.x,r.y):a.moveTo(r.x,r.y),h.css(n.processAttr(o.tip.css,s)))},paperLeave:function(){var l=this;l.fire("paperLeave",l)},afterRender:function(){var l=this;l.fire("afterRender",l)},getPaper:function(){return this.htmlPaper},clear:function(){this.paper.clear()}}),m},{requires:["base","gallery/template/1.0/index","gallery/kcharts/1.2/basechart/index","gallery/kcharts/1.2/raphael/index","gallery/kcharts/1.2/tools/color/index","gallery/kcharts/1.2/tools/htmlpaper/index","gallery/kcharts/1.2/legend/index","./theme","gallery/kcharts/1.2/tools/touch/index","gallery/kcharts/1.2/tip/index"]});