<?php
    //设置字符集
    header("Content-type:text/html;charset=utf-8");
    //连接数据库
    $db = mysqli_connect('localhost','root','root','ty2003');
    

    //编写sql语句
    $sql = "SELECT * FROM `wq` WHERE 1";
    //返回值：集合
    //执行sql语句
    $set = mysqli_query($db,$sql);
    //mysqli_fetch_array
    while($arr = mysqli_fetch_array($set)){
        $list[] = $arr;
    }
    //返回前端
    echo json_encode($list);