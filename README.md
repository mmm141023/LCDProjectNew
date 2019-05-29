# 编程小道场

把数字转化为lcd灯的表现形式，打印在控制台上。下面是0~9的样子：

    ._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
    |.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
    |_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|


例子: 910


    ._. ... ._.
    |_| ..| |.|
    ..| ..| |_|


## 参考资料

- [Array#join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join?v=example)
- [Array#push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=example)
- [Sting Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## 答题流程
1. 请用户仔细阅读题目要求和题目描述

2. 请访问下面「提交作业」一栏中的`编程题模板库地址`，再点击右上角的`fork`按钮到自己的仓库。

   ![](http://ocuwjo7n4.bkt.clouddn.com/2018-07-15-WeChatWorkScreenshot_2091b439-1282-4990-9380-9fdb88f6da66.png)

3. 下载仓库到本地。

   ![](http://ocuwjo7n4.bkt.clouddn.com/2018-07-15-WeChatWorkScreenshot_ed14ca41-f4ac-45c7-b5c7-07451a291cac.png)

   - 方法一：在命令行中使用以下命令在用户本地任意目录下clone此题目库
   ```
   git clone your_repo_address
   ```
   - 方法二：直接下载 ZIP 压缩包到本地，然后解压缩。

   NOTE：如果提示git命令未找到请先阅读参考资料

4. 用任意编辑器打开 clone 或者下载下来的文件夹，内部会存在两个文件夹
    ```
    spec  //测试文件夹
    src   //源文件
    ```
    - 阅读spec 文件夹中的测试文件，以了解题目的测试要求。
    - 在`main.js`文件内输入自己的作业代码

5. 请使用**git提交(commit)**并**上传(push)**，之后将自己github仓库地址:（https://github.com/username/repo） 填入到提交地址一栏 。注意：请输入 `https`开头的地址，而非 `git@github.com`开头的地址

6. 获取分支

7. 提交

8. 等待结果



## 如何本地运行测试，检验自己的代码是否正确

 阅读 [如何安装 npm 并管理 npm 版本 | npm 中文文档](https://www.npmjs.com.cn/getting-started/installing-node/)


1.  打开终端，进入到项目本地地址。
2. 输入下列指令，使用命令行安装依赖：
    ```
    npm install
    ```
3. 运行下面指令，执行测试：
    ```
    npm test
    ```
    如下图，显示 `0 failures`，表示你的作业答案正确
    ![](http://ocuwjo7n4.bkt.clouddn.com/2018-07-26-083013.png)

可以通过测试来检测本地代码是否完成作业要求，测试通过即可提交到github。把git库地址和分支填到「提交作业」一栏中，并提交作业。
