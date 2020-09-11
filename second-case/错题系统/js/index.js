//查数据库中所有的数据---显示在前端页面

//添加错题

//删除错题


//修改错题

class Index{
    constructor(){
        //调用显示错题的方法
        this.showWQ();
        //调用添加错题的方法
        this.addWQ();
    }
    //显示错题
    showWQ(){
        //获取tbody
        let o_tbody = _get('#tbody')[0];
        //向后端请求数据
        ajax.get('./php/showwq.php',(data)=>{
            //请求加来的数据都String类型，所以需要解析
            console.log(data);

            
            let arr = JSON.parse(data);
            
            //遍历数组
            arr.forEach((value)=>{
                let tr = _create('tr');
                //设置类名
                tr.className = "text-center middle";
                let str = `
                    <td>${value.wid}</td>
                    <td>${value.wcontent}</td>
                    <td>${value.wwhere}</td>
                    <td>${value.widea}</td>
                    <td>
                        <button class="btn del" data-wq-id="${value.wid}">删除</button>
                    </td>
                    <td>
                        <button class="btn upd" data-wq-id="${value.wid}">
                            <span class="glyphicon glyphicon-cog">修改</span>
                        </button>
                    </td>
                `;
                //放到tr中
                tr.innerHTML = str;
                //tr放到tbody中
                o_tbody.appendChild(tr);
            })
            //删除错题
            this.removeWQ();
            //修改错题
            this.updateWQ();
        })
    }
    //添加错题
    addWQ(){
        //获取错题内容的文本框
        let o_content = _get('#wq-content')[0];
        //获取错在哪儿的文本框
        let o_where = _get('#wq-where')[0];
        //获取想法的文本框
        let o_idea = _get('#wq-idea')[0];
        //获取提交按钮
        let o_sub = _get('#wq-save-question')[0];
        //添加事件
        o_sub.onclick = function(){
            //参数：  key=value&key=value
            let data = `content=${o_content.value}&where=${o_where.value}&idea=${o_idea.value}`;
            ajax.post('./php/addwq.php',data,()=>{
                //刷新
                location.reload(true);
            })
        }
    }
    //删除错题
    removeWQ(){
        //获取所有的删除按钮
        let dels = _get('#tbody .del');
        //添加事件
        for(let i = 0,len = dels.length;i < len;i ++){
            dels[i].onclick = function(){
                //获取到主键
                let id = this.getAttribute('data-wq-id');
                //向后端请求删除（数据库）当前记录
                ajax.get(`./php/removeWQ.php?id=${id}`,()=>{
                    alert('删除成功！');
                })
                //删除前端当前这行的记录
                this.parentNode.parentNode.remove();
            }
        }
    }
    //修改错题
    updateWQ(){
        //获取body
        let o_body = _get('body')[0];
        //获取所有的修改按钮
        let upd = _get('#tbody .upd');
        //添加事件
        for(let i = 0,len = upd.length;i < len;i ++){
            upd[i].onclick = function(){
                //获取到主键
                let id = this.getAttribute('data-wq-id');
                //查询当前修改记录的信息
                ajax.post('./php/updateFind.php',`id=${id}`,(data)=>{
                    // console.log(data);
                    let obj = JSON.parse(data);

                    //创建一个遮罩
                    let mark = _create('div');
                    
                    //创建弹窗
                    let float = _create('div');
                    //设置遮罩的样式
                    mark.style.cssText = "width : 100%;height : 100%;background:black;opacity:0.5;position : absolute;left : 0;top : 0;z-index : 10000;";
                    //设置弹窗的样式
                    float.style.cssText = "width : 400px;height : 300px;background:skyblue;position : absolute;left:230px;top : 150px;z-index : 10001;";
                    float.style.left = document.documentElement.clientWidth / 3 + 'px';
                    //设置float里面的元素
                    float.innerHTML = `
                        <form action="./php/update.php" method="post">
                            <p>错题内容：<input type="hidden" value="${obj.wid}" name="wid"><input type="text" value="${obj.wcontent}" name="wcontent"></p>
                            <p>错在哪里：<input type="text" value="${obj.wwhere}" name="wwhere"></p>
                            <p>您的想法：<input type="text" value="${obj.widea}" name="widea"></p>
                            <p> <input type="submit" value="修改"></p>
                        </form>
                    `;
                    o_body.appendChild(mark);
                    o_body.appendChild(float);
                })
            }
        }
    }
}

new Index();



//工具
//获取元素
function _get(selector){
    return document.querySelectorAll(selector);
}
//创建元素
function _create(ele){
    return document.createElement(ele);
}
