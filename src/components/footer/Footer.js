import React, { Component } from 'react';
import "./Footer.css"
class Footer extends Component {
    state={
        pageName:""
    }
    // 跳转到蜀备号
    goShuBei=()=>{
        window.location.href="http://beian.miit.gov.cn/state/outPortal/loginPortal.action;jsessionid=pDm8aUpeDbMldXiieWDma4T5LWiv25cVddgN6W2ZIFjf67304339!-461117538%EF%BC%89"
    }
    // 跳转到公安备号
    goGongAn=()=>{
        window.location.href="http://www.beian.gov.cn/portal/registerSystemInfo"
    }
    componentWillMount(){
        const pageName = this.props.pageName
        if(pageName==="用户协议"){
            this.setState({
                pageName
            })
        }
    }
    render() {
        return (
            <div className={this.state.pageName==="用户协议"?"footerColor footer":"footer"}>
                <span>COPYRIGHT@2019成都智诚创梦信息技术有限公司&nbsp;&nbsp;&nbsp;ICP备案号：<strong onClick={this.goShuBei}>蜀ICP备19025014号-5</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong onClick={this.goGongAn}>川公网安备51010702002001号<i></i></strong></span>
            </div>
        );
    }
}

export default Footer;