import React, { Component } from 'react';
import "./appPage.css"
class appPage extends Component {
    componentWillMount(){
        if(window.location.href.indexOf("#reloaded")===-1){
            window.location.href=window.location.href+"#reloaded";
            window.location.reload();
        }
        (function(win, doc) {
            change()
            function change() {
            var remSize = window.innerWidth / 7.5 || 50  /*设计稿是以width = 750px 为基准的*/
            document.querySelector('html').style.fontSize = (remSize > 100 ? 100 : remSize) + 'px'
            }
            win.addEventListener('resize', change, false)
            win.addEventListener(
                'orientationchange',
                change,
                false
            ) /* 这个是移动端设备横屏、竖屏转换时触发的事件处理函数 */
        })(window, document)
    }
    goAndroid(){
        var u = navigator.userAgent;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        if(isiOS){
            window.location.href = 'https://apps.apple.com/cn/app/id1485189805'
        }else if(isAndroid){
            window.location.href = 'http://www.yueapp.cn/apk/%E5%80%BE%E7%BA%A62.0.1.apk'
        }
    }
    render() {
        return (
            <div className="container">
                <img src={require("../../assets/imgs/bgApp.png")} alt=""/>
                <img src={require("../../assets/imgs/logoApp.png")} alt=""/>
                <i onClick={this.goAndroid}>立即下载</i>
            </div>
        );
    }
}

export default appPage;