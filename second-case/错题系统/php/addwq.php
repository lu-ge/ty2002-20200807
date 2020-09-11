<?php
    //设置字符集
    header("Content-type:text/html;charset=utf-8");
    //连接数据库
    $db = mysqli_connect('localhost','root','root','ty2003');

    //接收前端传递的参数
    $content = $_POST['content'];
    $where = $_POST['where'];
    $idea = $_POST['idea'];

    //写入数据库
    $sql = "INSERT INTO `wq`(`wcontent`, `wwhere`, `widea`) VALUES ('$content','$where','$idea')";
    //执行sql
    mysqli_query($db,$sql);