# Tip

---
代码示例
---
```
  KISSY.use("gallery/kcharts/1.3/tip/index",function(S,Tip){
    var tip = new Tip({
      rootNode:"#demo1"
	  });
      //动态移动到[200,200]
    tip.animateTo(200,200,function(){
        //设置内容
        tip.setContent("this is content!");
    });
  });
```

---
Config（详细配置）
---
### rootNode
{ id|HTMLElement } 容器 默认为body

### clsName
{string} 主题类名 默认"ks-chart-default" 可选"ks-chart-analytiks","ks-chart-analytiks" 也可自定义样式类名

### boundry
{object} 边界

  - `x` { number } 水平距离
  - `y` { number } 垂直距离
  - `width` { number } 宽度
  - `height` { number } 高度 

### tpl
{string} 模版 参照KISSY/Template

### alignX
{string} 水平对齐方式 可选"left","center","right" 默认"left"

### alignY
{string} 垂直对齐方式 可选"top","middle","bottom" 默认"top"

### offset
{object} 偏移量

  - `x` { number } 水平距离
  - `y` { number } 垂直距离

### anim
{object} 动画配置

  - `easing` { string } 动画效果 默认"easeOut"
  - `duration` { number } 动画周期 默认0.25

### corner
{object} 尖角

  - `isShow` { boolean } 是否显示
  - `tpl` { string } 模版 参照KISSY/Template
  - `css` { object } css样式


---
Method（方法）
---

### show()
显示tip

### hide()
隐藏tip

### isVisable()
tip是否可见，返回布尔值

### moveTo(x,y)
快速定位到相对于rootNode的位置

### animateTo(x,y)
移动到相对于rootNode的位置

### renderTemplate(tpl,data)
将tpl渲染data后填充tip内容

### setContent(content)
填充content至tip

### render()
渲染
