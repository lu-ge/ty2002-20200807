

class  Slider{
    constructor(selector){
      
        this.big_box = this.$(selector);
        this.ul_li = this.big_box.children[0].children;
        this.num = this.ul_li.length;
        this.ol_li = this.createEle();
        //5. 获取左按钮
        this.lt_btn = this.$('#ltBtn');
        //6. 获取右按钮
        this.rt_btn = this.$('#rtBtn');
        //7. 控制轮播的当前下标
        this.indexA = 0;
        //8. 添加事件
        this.addEvent();
        //9. 调用轮播方法
        this.slide();
        //10. 记录计时器返回值
        this.timer = null;
        //11. 调用自动轮播
        this.autoPlay();
    }
    //自动轮播
   autoPlay(){
        this.timer = setInterval(() => {
            this.indexA ++;
            if(this.indexA === this.num){
                this.indexA = 0;
            }
            this.slide();
        }, 1000);
        //移入大盒子，停自动轮播
        this.big_box.onmouseenter = function(){
            clearInterval(this.timer);
        }.bind(this);
        //移出大盒子，开始自动轮播
        this.big_box.onmouseleave = function(){
            this.autoPlay();
        }.bind(this);
    }
    //轮播方法
    slide(){
        // 1. 大图轮播--display
        //     1. 所有大图none
        //     2. 当前大图black
        // 2. 小圆点--background
        //     1. 所有圆点red
        //     2. 当前圆点blue
        for(let i = 0;i < this.num;i ++){
            //大图
            this.ul_li[i].style.display = 'none';
            // 小圆点
            this.ol_li[i].style.background = '';
        }
        //当前大图
        this.ul_li[this.indexA].style.display = 'block';
        //当前圆点
        this.ol_li[this.indexA].style.background = '#fff';
    }
    //添加事件
    addEvent(){
        // 1. 左按钮---点击
        //         indexA --
        //     if(indexA === -1){
        //         indexA = length - 1
        //     }
        //     调用轮播方法
        this.lt_btn.onclick = function(){
            this.indexA --;
            if(this.indexA === -1){
                this.indexA = this.num - 1;
            }
            this.slide();
        }.bind(this);
        // 2. 右按钮 ---点击
        //         indexA ++
        //     if(indexA === length){
        //         indexA = 0;
        //     }
        //     调用轮播方法
        this.rt_btn.onclick = function(){
            this.indexA ++;
            if(this.indexA === this.num){
                this.indexA = 0;
            }
            this.slide();
        }.bind(this);
        // 3. 小圆点 ---移入
        //     indexA = 当前移入小圆点的下标
        //     调用轮播方法
        var that = this; //记录外面的this(new出来的对象)
        for(var i = 0;i < this.num;i ++){
            this.ol_li[i].index = i; //给每一个li添加一个自定义属性，记录自己的下标值
            this.ol_li[i].onmouseenter = function(){
                //取出当前li中index属性的值（自己的下标）
                that.indexA = this.index;
                that.slide();
            };
        }
    }

    //创建元素
    createEle(){
        // 1. 左按钮
        let left = this.$create('span');
        //添加内容
        left.innerHTML = '&lt;';
        //给按钮设置id
        left.id = 'ltBtn';
        //将左按钮放到大盒子中
        this.big_box.appendChild(left);
        // 2. 右按钮
        let right = this.$create('span');
        //添加内容
        right.innerHTML = '&gt;';
        //给按钮设置id
        right.id = 'rtBtn';
        //将右按钮放到大盒子中
        this.big_box.appendChild(right);
        // 4. 小圆点
        //创建ol
        let ol = this.$create('ol');
        //创建一个数组
        let arr = [];
        for(let i = 0;i < this.num;i ++){
            //创建li
            let li = this.$create('li');
            //加入ol
            ol.appendChild(li);
            //加入数组
            arr.push(li);
        }
        //ol放到大盒子
        this.big_box.appendChild(ol);
        //返回所有的li
        return arr;
    }
    //工具方法（获取元素对象）
    $(selector){
        return document.querySelector(selector);
    }
    //创建元素工具
    $create(ele){
        return document.createElement(ele);
    }
}
