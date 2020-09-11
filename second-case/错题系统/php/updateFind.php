<?php
    //设置字符集
    header("Content-type:text/html;charset=utf-8");
    //连接数据库
    $db = mysqli_connect('localhost','root','root','ty2003');

    //接收参数
    $id = $_POST['id'];

    //查
    $sql = "SELECT * FROM `wq` WHERE wid=$id";
    //执行
    $set = mysqli_query($db,$sql);

    echo json_encode(mysqli_fetch_array($set));