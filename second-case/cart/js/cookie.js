
function createCookie(key,value,json){
    json = json || {};
    let cookieStr = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    if(!isNaN(json.expires)){
        let date = new Date();
        date.setDate(date.getDate() + json.expires);
        cookieStr += ';expires=' + date;
    }
    if(json.path){
        cookieStr += ';path=' + json.path;
    }
    if(json.domain){
        cookieStr += ';domain=' + json.domain;
    }
    if(json.secure){
        cookieStr += ';secure';
    }
    document.cookie = cookieStr;
}

function getCookie(key){
    let arr = document.cookie.split('; ');
    for(let i = 0,len = arr.length;i < len;i ++){
        let list = arr[i].split('=');
        if(list[0] === encodeURIComponent(key)){
            return decodeURIComponent(list[1]);
        }
    }
}
function removeCookie(key,json){
    json = json || {};
    if(json){
        document.cookie = encodeURIComponent(key) + '=;path=' + json.path + ';expires=' + new Date(0);
    }else{
        document.cookie = encodeURIComponent(key) + ';expires=' + new Date(0);
    }
}
