let ajax = {
    get : function(url,fn){
        let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('GET',url,true);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    if(typeof fn === 'function'){
                        fn(xhr.responseText);
                    }
                }
            }
        }
    },
    post : function(url,data,fn){
        let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('POST',url,true);
        xhr.setRequestHeader('content-type','Application/x-www-form-urlencoded;charset=utf-8');
        xhr.send(data);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    if(typeof fn === 'function'){
                        fn(xhr.responseText);
                    }
                }
            }
        }
    }
}