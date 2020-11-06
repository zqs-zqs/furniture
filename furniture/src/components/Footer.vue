<template>
    <div class="footer">
        <div class="footer-list">
            <ul>
                <li>
                    <span>关于我们</span>
                    <ul>
                        <li><a href="javascript:;">品牌介绍</a></li>
                        <li><a href="javascript:;">加盟方式</a></li>
                        <li><a href="javascript:;">联系我们</a></li>
                    </ul>
                </li>
                <li>
                    <span>在线服务</span>
                    <ul>
                        <li><a href="javascript:;">品牌介绍</a></li>
                        <li><a href="javascript:;">加盟方式</a></li>
                        <li><a href="javascript:;">联系我们</a></li>
                    </ul>
                </li>
                <li>
                    <span>支付方式</span>
                    <ul>
                        <li><a href="javascript:;">品牌介绍</a></li>
                        <li><a href="javascript:;">加盟方式</a></li>
                        <li><a href="javascript:;">联系我们</a></li>
                    </ul>
                </li>
                <li>
                    <span>关注我们</span>
                    <ul>
                        <li><img src="../../public/img/footer/wx.jpg" alt=""></li>
                        <li><a href="javascript:;">加盟方式</a></li>
                    </ul>
                    </li>
                <li><img src="../../public/img/logo.webp" alt=""></li>
            </ul>
            <!-- <el-menu>
                <el-menu-item>
                    <template slot="title">关于我们</template>
                    <el-menu-item>品牌介绍</el-menu-item>
                    <el-menu-item>加盟方式</el-menu-item>
                    <el-menu-item>联系我们</el-menu-item>
                    </el-menu-item>
                <el-menu-item>
                    <template slot="title">在线服务</template>
                    <el-menu-item>品牌介绍</el-menu-item>
                    <el-menu-item>加盟方式</el-menu-item>
                    <el-menu-item>联系我们</el-menu-item>
                    </el-menu-item>
                <el-menu-item>
                    <template slot="title">支付方式</template>
                    <el-menu-item>品牌介绍</el-menu-item>
                    <el-menu-item>加盟方式</el-menu-item>
                    <el-menu-item>联系我们</el-menu-item>
                    </el-menu-item>
                <el-menu-item>
                    <template slot="title">关注我们</template>
                    <el-menu-item>
                        <span>电话联系</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>微信官方</span>
                    </el-menu-item>
                    <el-menu-item>联系我们</el-menu-item>
                    </el-menu-item>
                <el-menu-item><img src="../../public/img/logo.webp" alt=""></el-menu-item>
            </el-menu> -->
            <div class="last">
                <span>Copyright © 2010-2017 家居商城. All rights reserved.</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .footer{
        padding: 60px 10rem 0;
        background: #f2f2f2 none repeat center top;
    }
    .footer>.footer-list>ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    .footer>.footer-list>ul>li>ul{
        list-style: none;
        padding: .5rem 0;
    }
    .footer>.footer-list>ul>li>ul>li{
        padding: .5rem 0;
    }
    .footer>.footer-list>ul>li>ul>li>a{
        font-size: 14px;
        text-decoration: none;
        color: #a3a3a3;
    }
    .footer>.footer-list>ul>li>ul>li>img{
        width: 3.5rem;
    }
    .last{
        padding: 1rem;
        color: #a3a3a3;
        font-size: 12px;
    }

    /* .el-menu {
    list-style: none;
    position: relative;
    background-color: transparent;
} */
</style>