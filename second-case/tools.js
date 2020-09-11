//求三个数中的最大值
function maxOfthreeNumber(a,b,c){
    //max中存放的是a与b中的最大值
    var max = a > b ? a : b;
    return c > max ? c : max; //返回的结果是 c 与 max 中的最大值。
}
//求n的阶乘
function fac(n){  //n = 5;
    var j = 1;
    for(var i = 1;i <= n;i ++){ //1  2  3  4  5
        j *= i;  // j = 1 * 1 * 2 * 3 * 4 * 5
    }
    return j; //120
}
//通过id获取元素对象
function $(id){
    return document.getElementById(id);
}
//复制数组
function copyArray01(arr){
    return arr.slice(0);
}
function copyArray02(arr){
    return arr.concat();
}
function copyArray03(arr){
    var list = [];
    for(var i = 0,len = arr.length;i < len;i ++){
        list.push(arr[i]);
        //list[i] = arr[i];
    }
    return list;
}
//选择排序
function fnSortBySelectorFromSmallToBig(arr){
    for(var i = 0;i < arr.length - 1;i ++){
        for(var j = i + 1;j < arr.length;j ++){
            if(arr[i] > arr[j]){
                var t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
    return arr;
}

//随机整数
function randInt(min,max){
    if(min > max){
        var t = min;
        min = max;
        max = t;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}