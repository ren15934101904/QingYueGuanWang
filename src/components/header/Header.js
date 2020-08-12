import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import "./Header.css"

class Header extends Component {
    // 自定义数据
    state={
        logoNameSrc:require("../../assets/imgs/logoNameWhite.png"),
        navColor:"nav",
        pageName:"首页",
        spanAddress:""
    }
    // 跳转到关于我们
    goAbout=()=>{
        this.props.history.push('/about')
    }
    // 跳转到用户协议
    goUser=()=>{
        this.props.history.push('/user')
    }
    // 返回主页
    goHome=()=>{
        this.props.history.push('/')
    }
    componentWillMount(){
        const {pageName} = this.props
        if(pageName!=="首页"){
            this.setState({
                logoNameSrc:require("../../assets/imgs/logoName.png"),
                navColor:"nav Black",
                pageName
            });
            if(pageName==="关于我们"){
                this.setState({
                    spanAddress:"aboutAddress"
                })
            }else{
                this.setState({
                    spanAddress:"UserAddress"
                })
            }
        }
    }
    render() {
        const {logoNameSrc,navColor,pageName,spanAddress} = this.state
        return (
            <div className={pageName==="用户协议"||pageName==="关于我们"? "header headerColor":"header"} ref="header">
                <div className="logo">
                    <img src={require("../../assets/imgs/logo.png")} alt=""/>
                    <img className="logoName" src={logoNameSrc} alt=""/>
                </div>
                <ul className={navColor}>
                    <li className={pageName==="首页"? "fontBold":""}><strong onClick={this.goHome}>首页</strong><span className={spanAddress}></span></li>
                    <li className={pageName==="关于我们"? "fontBold":""}><strong onClick={this.goAbout}>关于我们</strong></li>
                    <li className={pageName==="用户协议"? "fontBold":""}><strong onClick={this.goUser}>用户协议</strong></li>
                </ul>
            </div>
        );
    }
}

export default withRouter(Header);