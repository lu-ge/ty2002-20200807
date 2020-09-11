$(function () {
    class popup {
        constructor() {
            this.o_pop = document.querySelector('input');
            //遮罩层
            this.o_mark = document.querySelector('#mark');
            //框
            this.o_float = document.querySelector('#float');
            //头
            this.o_hea = document.querySelector('#header');
            //关闭按钮
            this.o_close = document.querySelector('#close');

            // 获取用户名
            this.$uname = $('#uname');
            // 获取密码
            this.$upwd = $('#upwd');
            // 获取登录按钮
            this.$but = $('.heaBut');
            // 调用事件
            this.addEvent();
            // 拖拽事件
            this.drag();
            // 登录事件
            this.login()
        }
        // 给弹出加事件
        addEvent() {
            this.o_pop.onclick = function () {
                this.o_mark.style.display = 'block';
            }.bind(this);
            this.o_close.onclick = function () {
                this.o_mark.style.display = 'none'
            }.bind(this);
        }
        drag(){
            this.o_float.onmousedown = function(evt){
                let e = evt || window.event;
                //事件源
                let target = e.target || e. srcElement;
                //筛选
                if(target.id === 'header'){
                    //鼠标的相对坐标值
                    let disX = e.offsetX;
                    let disY = e.offsetY;
                    //document对象添加移动事件
                    document.onmousemove = function(evt){
                        let e = evt || window.event;
                        //求left 与 top的值
                        let left = e.pageX - disX;
                        let top = e.pageY - disY;
                        //边界
                        if(left <= 0){
                            left = 0;
                        }else if(left >= document.documentElement.clientWidth - this.o_float.offsetWidth){
                            left = document.documentElement.clientWidth - this.o_float.offsetWidth;
                        }
                        if(top <= 0){
                            top = 0;
                        }else if(top >= document.documentElement.clientHeight - this.o_float.offsetHeight){
                            top = document.documentElement.clientHeight - this.o_float.offsetHeight;
                        }
                        //设置弹框的坐标值
                        this.o_float.style.left = left + 'px';
                        this.o_float.style.top = top + 'px';
                    }.bind(this);
                    //弹起事件
                    document.onmouseup = function(){
                        //取消移动 事件
                        document.onmousemove = null;
                    }
                    //取消拖拽的默认行为
                    document.ondragstart = function(){
                        return false;
                    }
                }
            }.bind(this);
        }
        // 登录事件
        login() {
            let arr = [false, false];
            this.$uname.blur(function () {
                let re = /^[A-Za-z]{6,12}$/;
                let s_uname = this.value;
                if (!re.test(s_uname)) {
                    arr[0] = false;
                    $(this).next().html('字母6~12位');
                    return;
                } else {
                    $(this).next().html('');
                    arr[0] = true;
                }
            })
            this.$upwd.blur(function () {
                let re = /^\S{6,18}$/;
                let s_upwd = this.value;
                if (!re.test(s_upwd)) {
                    arr[1] = false;
                    $(this).next().html('6~18位非空白');
                } else {
                    $(this).next().html('');
                    arr[1] = true;
                }
            })
            this.$but.click(function () {
                if (arr.indexOf(false) === -1) {
                    alert('登录成功');
                } else {
                    alert('请完善表单');
                }
            })
        }
    }
    new popup();
})