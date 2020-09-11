<?php
    //设置字符集
    header("Content-type:text/html;charset=utf-8");
    //连接数据库
    $db = mysqli_connect('localhost','root','root','ty2003');

    //接收参数
    $id = $_GET['id'];

    //sql
    $sql = "DELETE FROM `wq` WHERE wid=$id";
    //执行
    mysqli_query($db,$sql);