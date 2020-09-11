//创建cookie
//document.cookie = 'key=value[;expires=日期对象;path=/;domain=域名;secure]
function createCookie(key,value,json){
    //初始化参数
    json = json || {};
    //key=value
    let cookieStr = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    //有效期
    if(!isNaN(json.expires)){
        let date = new Date();
        date.setDate(date.getDate() + json.expires);
        cookieStr += ';expires=' + date;
    }
    //path
    if(json.path){
        cookieStr += ';path=' + json.path;
    }
    //domain
    if(json.domain){
        cookieStr += ';domain=' + json.domain;
    }
    //secure
    if(json.secure){
        cookieStr += ';secure';
    }
    //创建cookie
    document.cookie = cookieStr;
}
// createCookie('name','zwt',{expires : 7,path : '/'});
// createCookie('url','www.1000phone.com',{expires : 6,path : '/'});
// createCookie('email','74110@qq.com',{expires : 5,path : '/'});

createCookie('name','',{expires : -1,path :'/'})
/*
    'url=www.1000phone.com; email=74110%40qq.com; name=zwt'

    查 ： indexOf  lastIndexOf  charAt  charCodeAt
    替： replace
    截： substring(start,end)

                start            end
    url            0   + length   21
    email          23             43
    name           45             53
        substr(start,length)
        slice(start,end)
    转： toUpperCase()
        toLowerCase()
        split()
    ES6： includes()  startsWith()  endsWith() repeat()



    数组
    'url=www.1000phone.com; email=74110%40qq.com; name=zwt'
    [
        'url=www.1000phone.com',
        'email=74110%40qq.com',
        'name=zwt'
    ]

    [
        [
            'url','www.1000phone.com'
        ],
        [
            'email','74110%40qq.com'
        ],
        [
            'name','zwt'
        ]
    ]
    正则
*/

// function getCookie(key){
//     let cookie_key = encodeURIComponent(key) + '='; //'url='
//     let cookie = document.cookie; //获取所有的cookie
//     let start = cookie.indexOf(cookie_key);
//     //如果找到了start,则开始寻end
//     if(start !== -1){
//         let end = cookie.indexOf(';',start);
//         if(end === -1){ //如果返回-1，说明找的是最后一个;因为最后没有;所以取到长度正好。
//             end = cookie.length;
//         }
//         //截取
//         return decodeURIComponent(cookie.substring(start + cookie_key.length,end));
//     }
// }

function getCookie(key){
    let arr = document.cookie.split('; ');
    //遍历数组
    for(let i = 0,len = arr.length;i < len;i ++){
        let list = arr[i].split('=');
        if(list[0] === encodeURIComponent(key)){
            return decodeURIComponent(list[1]);
        }
    }
}
// alert(document.cookie);
//获取cookie

// alert(getCookie('name'))   //周伟涛


//删除cookie
function removeCookie(key,json){
    //初始化参数
    json = json || {};
    if(json){
        document.cookie = encodeURIComponent(key) + '=;path=' + json.path + ';expires=' + new Date(0);
    }else{
        document.cookie = encodeURIComponent(key) + ';expires=' + new Date(0);
    }
}
// createCookie('姓名','周伟涛');
// removeCookie('email',{path : '/'});