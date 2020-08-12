import React, { Component } from 'react';
import rdom from 'react-dom'
import Header from '../../components/header/Header.js'
import Footer from '../../components/footer/Footer.js'

import "./index.css"

class index extends Component {
    // 数据
    state={
        list:[],
        // 点击按钮，滚动图片
        num : 0,
        // 控制导航按钮播放
        circle : 0,
        // 防抖处理
        bool:true
    }
    // 动画函数
    animate(obj,target,callback){
        clearInterval(obj.timer)
        obj.timer = setInterval(function(){
            var step = (target - obj.offsetTop) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step) 
            if(obj.offsetTop === target){
                clearInterval(obj.timer)
                callback && callback()
            }
            obj.style.top = obj.offsetTop + step + 'px'
        },15)
    }
    // 切换下一个模块事件
    goBottom(e){
        const circles = this.refs.circle;
        // 获取高度
        const focus = this.refs.main
        var focusHeight = focus.offsetHeight

        for(let i=0;i<circles.children.length;i++){
            circles.children[i].className = ''
        }   
        e.target.className = 'current';
        var index = parseInt(e.target.getAttribute('index')) 
        this.setState({
            num:index,
            circle:index
        })
        const ul = this.refs.focusUl;
        this.animate(ul, -index*focusHeight)
    }
    // 根据模块数显示导航按钮
    showCircle(){
        //  根据页面数量生成对应的 导航按钮并添加点击事件
        const num = this.refs.focusUl.children.length;
        const list=[]
        for(var i =0; i<num;i++){
            list.push(<li index={i} onClick={this.goBottom.bind(this)} key={i}></li>)
        }
        
        this.setState({list},()=>{
             // 设置第一个导航按钮样式
            this.refs.circle.children[0].className="current"
        })
    }
    // 鼠标滚动事件
    handleScroll(e) {
        const {bool}=this.state;
        if(bool){
            e = e || window.event; 
            const ele = rdom.findDOMNode(this);
            if (e.nativeEvent.deltaY < 0) {
                /* scrolling up */
                if(ele.scrollTop <= 0) {
                    this.modelGo(-1)
                }
            } 
            else{
                /* scrolling down */
                if(ele.scrollTop + ele.clientHeight >= ele.scrollHeight) {
                    this.modelGo(1)
                }
            }
        }
    }
    // 模块移动
    modelGo(data){
        let {num,circle} = this.state;
        const ul = this.refs.focusUl;
        if(num===ul.children.length-1&&data===1){
            return false;
        }
        if(num===0&&data===-1){
            return false;
        }
        num+=data
        this.setState({num})

        const focus = this.refs.main
        var focusHeight = focus.offsetHeight
        this.animate(ul, -num*focusHeight)

        circle+=data
        this.setState({circle})
        this.circleChange(data)
    }
    // 控制导航按钮样式
    circleChange(data){
        const ol = this.refs.circle
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className = ''
        }
        ol.children[this.state.circle+data].className = 'current'
    }
    // 组件渲染后运行
    componentDidMount(){
        this.showCircle();
    }
    componentWillMount(){
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            this.props.history.push('/appPage')
        }
    }
    // 跳转到ios下载链接
    goIos=()=>{
        window.location.href="https://apps.apple.com/cn/app/id1485189805"
    }
    goAndroid=()=>{
        window.location.href="http://www.yueapp.cn/apk/%E5%80%BE%E7%BA%A62.0.1.apk"
    }
    // 跳转到安卓下载链接
    render() {
        const {list} = this.state
        return (
            <div className="container">
                <Header pageName="首页"/>
                <div className="main" ref="main">
                    {/* <div className="focus" ref="focus"> */}
                        <ul ref="focusUl" onWheel={(e) =>this.handleScroll(e)} >
                            <li>
                                <div className="videoBox">
                                    <video autoPlay loop muted>
                                        <source src="http://77.yueapp.cn/gwsp.mp4" type="video/mp4"/>
                                        您的浏览器不支持 video 
                                    </video>
                                </div>
                                <div className="onePage">
                                    <h1>更加真实高效的社交</h1>
                                    <h3>有温度的聊天  快速约见面</h3>
                                    <div className="download">
                                    <div className="button" onClick={this.goIos}>
                                        <img src={require("../../assets/imgs/ios.png")} alt=""/>
                                        ios下载
                                    </div>
                                    <div className="button" onClick={this.goAndroid}>
                                        <img src={require("../../assets/imgs/安卓.png")} alt=""/>
                                        安卓下载
                                    </div>
                                    <img className="code" src={require("../../assets/imgs/二维码.png")} alt=""/>
                                    <div className="text">
                                        手机版扫描二维码<br/>直接下载
                                    </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={require("../../assets/imgs/1.png")} alt=""/>
                            </li>
                            <li>
                                <img src={require("../../assets/imgs/2.png")} alt=""/>
                            </li>
                            <li>
                                <img src={require("../../assets/imgs/3.png")} alt=""/>
                            </li>
                            <li>
                                <img src={require("../../assets/imgs/4.png")} alt=""/>
                            </li>
                        </ul>
                        <ol className="circle" ref="circle">
                            {list}
                        </ol>
                    {/* </div> */}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default index;