# 说明
这是我的第一个react demo.

若想在`gitpage`上看到效果. 先在`setting`的`GitHub Pages`生成网址`https://helloyongwei.github.io/react-helloworld/`. 
因为我们的主页是在`react-helloworld/build`下. 则要在`package.json`中设置下.

其次, 将`"homepage" : "http://helloyongwei.github.io/react-helloworld/build"`添加到`package.json`. 解释: `react-helloworld`是库, `build`是库中的目录

然后, 执行`npm run build`, 再`git push`.

最后在浏览器中打开: `https://helloyongwei.github.io/react-helloworld/build/index.html`.



