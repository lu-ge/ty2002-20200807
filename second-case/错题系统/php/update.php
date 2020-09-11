<?php
    //设置字符集
    header("Content-type:text/html;charset=utf-8");
    //连接数据库
    $db = mysqli_connect('localhost','root','root','ty2003');

    //参数
    $wid = $_POST['wid'];
    $content=$_POST['wcontent'];
    $where = $_POST['wwhere'];
    $idea = $_POST['widea'];

    $sql = "UPDATE `wq` SET `wcontent`='$content',`wwhere`='$where',`widea`='$idea' WHERE wid=$wid";
    $row =  mysqli_query($db,$sql);
    if($row){
        echo "<script>alert('修改成功');location.href='../index.html';</script>";
    }