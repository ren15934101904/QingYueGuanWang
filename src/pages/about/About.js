import React, { Component } from 'react';
import Header from '../../components/header/Header.js'
import Footer from '../../components/footer/Footer.js'

import "./About.css"

class About extends Component {
    render() {
        return (
            <div className="container">
                <Header pageName="关于我们"/>
                <div className="main02">
                    <div className="topImg">
                        <h1>关于我们</h1>
                        <div className="text">
                                倾约是成都智诚创梦信息技术有限公司研发运营的社交产品。我们通过AI技术为用户推荐最合适的人，<br/>交到真正的朋友。倾约基于社交之上会推出更多兴趣玩法，让社交更加高效，让用户更加积极。<br/>倾约的愿景是通过AI技术让大家找到合适的人，减少无效交友提高成功率，快速约见面
                        </div>
                    </div>
                    <div className="text">
                        <img src={require("../../assets/imgs/map.png")} alt=""/>
                        <ul className="footerText">
                            {/* <li>
                                联系电话：<br/>12354645124
                                <img src={require("../../assets/imgs/电话.png")} alt=""/>
                            </li> */}
                            <li>
                                邮箱：<br/>zcitdong@qq.com
                                <img src={require("../../assets/imgs/邮箱.png")} alt=""/>
                            </li>
                            <li>
                                地址：<br/>成都市高新区天府大道中段银泰中心2号楼
                                <img src={require("../../assets/imgs/地址.png")} alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default About;