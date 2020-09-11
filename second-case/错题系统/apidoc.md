1. 显示错题列表的接口
method : GET|POST
url : ./php/showwq.php

success : json

2. 添加错题的接口
method : POST
url : ./php/addwq.php
参数：
    数据类型  参数名称   描述
    String   content   错题内容
    String   where     错在哪里
    String   idea      你的想法

3. 删除错题的接口
method : GET
url : ./php/delwq.php
参数：
    数据类型   参数名称   描述
    Int         id       错题编号

4. 修改-查询
method : GET
url : ./php/update_find.php
参数：
    数据类型   参数名称  描述
    Int         id      错题编号
seccess : json

5. 修改接口
method : POST
url : ./php/update.php
参数：
    数据类型   参数名称  描述
    Int        id       错题编号
    String     content  错题内容
    String     where    错在哪里
    String     idea     你的想法