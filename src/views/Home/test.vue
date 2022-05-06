<!--
 * @Author: juvia
 * @Date: 2022-05-06 10:36:50
 * @LastEditors: juvia
 * @LastEditTime: 2022-05-06 18:08:09
 * @FilePath: \Vignette-master\src\views\Home\test.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
-->
<template lang="pug">
  div(
  ) 故其疾如风，其徐如林，侵掠如火，不动如山，难知如阴，动如雷震。
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Emit } from "vue-property-decorator";
// import modal from "@/components/modal.vue"
import * as service from "@/service";
@Component({
  components: {
    // modal
  },
})
export default class module extends Vue {
  // 用于接收参数
  // @Prop() public readonly title!: string;
  private list: Array<any> = [
    {
      id: 6,
      image:
        "https://img1.baidu.com/it/u=3618503912,1558541585&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=420",
      video_desc:
        "马修(乔什·哈奈特)是一个年轻的芝加哥投资银行家，两年之前，他曾经深深爱恋的一个女孩不落痕迹地从他的生活中消失遁形了，受此重击的马修因此陷入了深深的痛苦之中。如今，他又重新回到了这个伤心地，试图从不堪回首的过往中解开这个难解的心结。而为了从这个梦魇中摆脱出来，马修甚至希望可以在故地重游的过程中结识一个完全不同类型的女孩，进而开展一段全新的恋情。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_10jtqmonjz8.html",
      video_type: "love",
      video_title: "谜情公寓",
    },
    {
      id: 7,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fphoto%2Fl%2Fpublic%2Fp304237438.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654447717&t=f9d925058426f63dc74cbbd3fc2f794b",
      video_desc:
        "科尔曼·希尔科（安东尼·霍普金斯饰）是一位著名的古典文学教授。处于事业颠峰的科尔曼，却因为最近在课堂上的一句话而使自己陷入了危机，被人指为种族主义者。为了掩饰一些不为人知的秘密，他谎称自己患了癌症，想以生病为借口躲避人们的攻击。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rr7rexvg.html",
      video_type: "love",
      video_title: "人性污点",
    },
    {
      id: 8,
      image:
        "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baike/s=220/sign=cae4f446f2d3572c62e29bdeba126352/2934349b033b5bb509df835136d3d539b600bc11.jpg",
      video_desc:
        "艾瑞克·巴纳与奥利维亚·王尔德在此片中饰演一对兄妹，他们从一场赌场抢劫中全身而退，开始了逃亡之旅。当他们逃到冰天雪地的边境地带，偶遇一个落魄的拳击手，而他无辜的家庭被这两位煞星搅得天翻地覆",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrmnpjkw.html",
      video_type: "love",
      video_title: "陷阱",
    },
    {
      id: 9,
      image:
        "https://pics2.baidu.com/feed/0eb30f2442a7d933eebd8de6d7163c1a72f001f0.jpeg?token=f998a8be297d66240b764aa9f8aaa3e2",
      video_desc:
        "20世纪20年代，一对新婚夫妇从波士顿搬到北卡罗来纳州的山上，在那里开始打造他们的林业帝国。第一次到山上的赛琳娜（詹妮弗·劳伦斯饰）很快适应了那里的生活，瞭望、捕蛇甚至在野外救了丈夫乔治（布莱德利·库珀饰）的命，做起事来丝毫不比男人逊色。然而，赛琳娜无意中发现了丈夫不为人知的过去，他已婚，还有一个儿子。流产的赛琳娜面对丈夫的不忠和谎言，自己的命运随之改变，她和丈夫的婚姻也开始发生了戏剧性的演变。流产的妻子狠毒的策划杀死她丈夫的私生子，因为她不允许她的王国有任何污点。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrnngp68.html",
      video_type: "love",
      video_title: "赛琳娜",
    },
    {
      id: 10,
      image:
        "https://img2.baidu.com/it/u=4144453998,1641634761&fm=253&fmt=auto&app=138&f=JPEG?w=270&h=405",
      video_desc:
        "布莱克·莱弗利 (Blake Lively) 饰演的阿戴琳，已经成家并有了一个女儿，她遭遇一场严重的意外事故，九死一生之后，离奇的事情也发生了，阿戴琳不再变老，年龄永远定格在29岁",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rr7p2yks.html",
      video_type: "love",
      video_title: "时间尽头的恋人",
    },
    {
      id: 11,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171105%2Fe8f3e8b9935649d1bac6cc6c849a37ed.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654398395&t=2d4bbe0c5226accb75ca4e5b78b9f1f3",
      video_desc:
        "29岁的助理编辑爱丽丝(Alice)同时也是一位有抱负的作家，她冰雪聪明，机智幽默同时也带着叛逆色彩。在一家著名的出版公司里，孜孜不倦的述写自己的故事，爱丽丝努力想置身于公司高点，然而却总被和Milan——父亲最好的朋友——之间的青涩关系而钳固不前。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rra5kq2c.html",
      video_type: "love",
      video_title: "书写人生",
    },
    {
      id: 12,
      image:
        "https://pics6.baidu.com/feed/d62a6059252dd42a5b515468fdc5dab2cbeab89b.jpeg?token=e5a9f2de95f1adcd330fdf87aa28b0b3",
      video_desc:
        "本片讲述卡特里娜飓风期间，在美国新奥尔良州的第九区低地发生的一宗抢劫案。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_211q3jx3izg.html",
      video_type: "action",
      video_title: "夺命城",
    },
    {
      id: 13,
      image:
        "https://img0.baidu.com/it/u=2827656597,3377501573&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=582",
      video_desc:
        "电影讲述成龙扮演的中年人本来只是被邻居请去临时照顾家中的小孩。有个孩子无意中下载到一个密码，结果引来了秘密特工。胆小怕事的成龙不得不与那些全副武装的神秘人员直接对抗起来。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrj6sok8.html",
      video_type: "action",
      video_title: "邻家特工",
    },
    {
      id: 14,
      image:
        "https://img1.baidu.com/it/u=4127556652,1324508345&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=709",
      video_desc:
        "电影讲述了在一个偏远的岛屿上，参加婚姻训练营的人遭到了一条六头鲨鱼的袭击，他们必须在海滩及海岸上与六头鲨进行搏斗，最终将其消灭的故事",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_r9msg94onw.html",
      video_type: "action",
      video_title: "夺命六头鲨",
    },
    {
      id: 15,
      image:
        "https://img0.baidu.com/it/u=226230555,227026142&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500",
      video_desc:
        "美国总统（摩根·弗里曼饰）在遭遇无人机恐怖袭击后身受重伤陷入昏迷，随行人员在多次爆炸中全军覆没，唯一的幸存者——总统多年贴身保镖迈克·班宁（杰拉德·巴特勒饰）却成最大嫌疑犯，被FBI控告企图暗杀总统。班宁必须给自己洗刷冤屈，同时阻止真正的刺杀总统计划，在多方势力围追堵截下，走投无路的他只能寻求一名神秘人的保护。曾经的英雄保镖如今变为通缉犯，班宁将如何脱离险境、保护总统，破解背后的阴谋",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rvnqtj5s.html",
      video_type: "action",
      video_title: "天使陷落",
    },
    {
      id: 16,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs2.best-wallpaper.net%2Fwallpaper%2Fiphone%2F1812%2FUnderworld-Blood-Wars-Kate-Beckinsale-snow-guns_iphone_640x1136.jpg&refer=http%3A%2F%2Fs2.best-wallpaper.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654399890&t=12c679195d78cc1ed9791cde56c34f7d",
      video_desc:
        "该片讲述了为获得地下世界的生存统治权，具有贵族气质的吸血鬼和生性凶残野蛮的狼人他们无时无刻不在暗夜中寻找机会干掉对方，一场大战一触即发的故事",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rr7r4yk8.html",
      video_type: "action",
      video_title: "黑夜传说",
    },
    {
      id: 17,
      image:
        "https://img1.baidu.com/it/u=783089834,1917850615&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=741",
      video_desc:
        "当一个退休的特工发现他将成为中央情报局暗杀总统的代罪羔羊时，他再也无法安然享受他的退休人生……",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rw7zk8w4.html",
      video_type: "action",
      video_title: "退役任务",
    },
    {
      id: 18,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fihd.me%2Fposter%2Flpst%2Fp2198830099.jpg&refer=http%3A%2F%2Fihd.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654402042&t=1face68bb44ea4df2813f427b20c6f30",
      video_desc:
        "荣誉无数的警官在庆功宴喝的大醉酩酊他开车到街上将一个骑自行车的人撞成重伤，为了掩盖事实他撒了谎。从此一波接一波的一样事件接踵而至，他的生命就此改变。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrmycfec.html",
      video_type: "gun_battle",
      video_title: "罪不可赦",
    },
    {
      id: 19,
      image:
        "https://img2.baidu.com/it/u=3900965477,730813019&fm=253&fmt=auto&app=138&f=JPEG?w=240&h=355",
      video_desc:
        "影片讲述德州骑警察调查一系列发生在一个海伦娜的小镇的不明死亡案件，大卫(海姆斯沃斯饰)在海伦娜镇调查谋杀案时，却惊人发现了20年前杀害自己父亲的凶手亚伯罕(哈里森饰)。亚伯罕也将与大卫上演一出精彩对抗。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rr7p7ytc.html",
      video_type: "gun_battle",
      video_title: "海伦娜之路",
    },
    {
      id: 20,
      image:
        "https://img2.baidu.com/it/u=2010309303,1433887389&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
      video_desc:
        "饱受战争创伤的雇佣赏金猎人柯林斯，被迫前往伦敦，追捕一名被指认变节的中情局特工，并欲破获纠缠其间的俄罗斯核弹头与金钱交易案件",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rqs9x54w.html",
      video_type: "gun_battle",
      video_title: "恶魔突袭队",
    },
    {
      id: 21,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fvorcdn.xiaodutv.com%2F78b0f41c59b2bbceceeb10b9233c8ef8&refer=http%3A%2F%2Fvorcdn.xiaodutv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654445144&t=5a8e8b6cacf8f541e6d099acd862435d",
      video_desc:
        "为了生存，肯尼下定决心去医治因十五年前母亲的去世而导致自闭症的弟弟马克，想要新生活的肯尼希望一切都慢慢好起来。只是没有想到，弟弟再次陷入“黑暗恶势力”的陷阱里，兄弟两个再次被推倒了恶魔的世界，他们可以寻找到真实的自己开始新生活吗？",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrn9cxwk.html",
      video_type: "gun_battle",
      video_title: "死亡之握",
    },
    {
      id: 22,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pianbar.com%2FImage%2F201606%2Fp2270496925.jpg&refer=http%3A%2F%2Fimg.pianbar.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654445183&t=22436d5f920789e4ee5b81a6a97e6663",
      video_desc:
        " 故事描述在美国南方的密州小镇，一个腐朽且死气沉沉的富户，因为一名强悍的年轻佃农闯入他的生活而引致情况发生了整个变化。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrmk90l0.html",
      video_type: "gun_battle",
      video_title: "夏日春情",
    },
    {
      id: 23,
      image:
        "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/baike/s%3D220/sign=3d2086b56709c93d03f209f5af3cf8bb/c995d143ad4bd11387c77b895aafa40f4bfb0507.jpg",
      video_desc:
        "一个善良的经历过二战的兽医变成银行抢匪。在战后的背景下，Eddie Boyd去好莱坞成为明星的梦想和照顾他年轻的家庭背道而驰。于是他发现了一个可以同时实现这两件事情的一个方法——用好莱坞风格抢劫银行，但他的想法，使他走上了危险和悲剧的道路。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrg1dln8.html",
      video_type: "gun_battle",
      video_title: "公民黑帮",
    },
    {
      id: 24,
      image:
        "https://img2.baidu.com/it/u=1063125299,3559505517&fm=253&fmt=auto&app=138&f=JPEG?w=389&h=600",
      video_desc:
        "未来，2044年。时间旅行从被发明的一开始就属于非法，只有当黑帮组织想清理某个特定对象、又不愿意在此世界留下任何痕迹时，才会出动“环形使者”。他们专门负责处决那些被时间传送回彼世界的目标。之所以称为“环形使者”，因为他们最终必须杀死未来的自己——这样才不会给未来主顾留下任何的麻烦。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrho8g6w.html",
      video_type: "crime",
      video_title: "环形使者",
    },
    {
      id: 25,
      image:
        "https://img2.baidu.com/it/u=504933752,2922556675&fm=253&fmt=auto&app=120&f=JPEG?w=334&h=500",
      video_desc:
        "网球手凯亨准备和不守妇道的妻子离婚，但妻子不答应，使他无法与新结识的女友相处，为此他非常烦恼。一天他在列车上遇到一位陌生人布鲁洛．安东尼，他要凯亨杀死自已的父亲，他帮凯亨杀死他的妻子。后来他真的杀死了凯亨的妻子，并且他在火车上捡到凯亨的打火机为证物以此相逼。凯亨不得已去杀安东尼的父亲，但并没有下手，只是把事情的真相告诉睡在床上的安东尼的父亲。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrho68iw.html",
      video_type: "crime",
      video_title: "火车怪客",
    },
    {
      id: 26,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage11.m1905.cn%2Fuploadfile%2F2013%2F1111%2F20131111011342813718.jpg&refer=http%3A%2F%2Fimage11.m1905.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654445549&t=4913965de6cd2ed6662ade67ae0f0a97",
      video_desc:
        "雨夜，雷伊跟艾比在酒店偷情。雷伊是酒吧伙计，而艾比则是酒吧老板玛迪的妻子。玛迪怀疑妻子出轨，因此雇佣侦探维斯调查。知悉真相的玛迪怒不可遏，潜入雷伊家，企图绑走妻子，却在厮打中受伤。玛迪密会维斯，决定花钱做掉二人。维斯潜入雷伊家翻到了艾比的手枪。回来后，维斯给玛迪看了两人被杀的照片，趁玛迪不备，将其击毙。雷伊发现玛迪尸体，误以为艾比所为，因此毁尸灭迹。晚上，雷伊再次回到酒吧，赫然发现了威斯假造的照片。这时，雷伊和艾比都不知道，死亡的威胁正在步步紧逼……",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrho6k0s.html",
      video_type: "crime",
      video_title: "血迷宫",
    },
    {
      id: 27,
      image:
        "https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/baike/h=153/sign=c13ae52e0ef431ada3d2473c7837ac0f/9d82d158ccbf6c81f3872c54be3eb13532fa40dd.jpg",
      video_desc:
        "博兰顿和菲利普都是哈佛的高才生，一天，都是同性恋的两人合谋杀害了同学戴维，并藏尸于一个大箱子中。或许是出于炫耀，他们做出了一个惊人的举动。那就是用装着戴维尸体的箱子当餐桌，邀请了戴维的父母、未婚妻、同学和茹伯特教授来赴宴。他们谎称戴维外出了，和客人们在戴维的“棺材”上进行着宴会。胆小的菲利普从宴会开始就开始坐立不安，但是博兰顿却不慌不忙，在客人中滔滔不绝。然而，聪明的茹伯特教授从博兰顿的谈话中渐渐察觉出事有蹊跷……",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrho66no.html",
      video_type: "crime",
      video_title: "夺魂索",
    },
    {
      id: 28,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcms-bucket.ws.126.net%2F2019%2F07%2F24%2Fab50b804b75643e2aeb8cf6baa5cc678.jpeg%3FimageView%26thumbnail%3D550x0&refer=http%3A%2F%2Fcms-bucket.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654445699&t=16f851e6b921f79e3ebb84021600ce53",
      video_desc:
        " 影片翻拍自1973年史蒂夫·麦奎因与达斯汀·霍夫曼主演的同名经典越狱电影，讲述了湖南哥饰演的职业扒手亨利被人陷害杀害一名皮条客，从而流放至大海环绕的法属圭亚那的监狱服刑，因为胸前有一处蝴蝶纹身，所以同窗狱友都叫他“巴比龙”。 　　在踏入监狱的那一天开始，巴比龙就策划越狱，但越狱是需要用金钱去贿赂看守，同时购买逃跑船只的，于是他将目光投向了同时服刑的伪造专家，同时是百万富翁，由拉米·马雷克饰演的Louis，用保证德加安全的方式获得其金钱资助，两人结成同盟…",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrfdzrqw.html",
      video_type: "crime",
      video_title: "巴比龙",
    },
    {
      id: 29,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F902397dda144ad341b619251dba20cf430ad850d&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654445856&t=ef5ced56aedd6ff52c4ef23783ee7296",
      video_desc:
        "影片将故事设定在一列通勤列车上，一位十年如一日乘坐列车上下班的商界人士麦考利，偶遇一位主动搭讪的“神秘乘客”乔安娜。乔安娜为麦考利提供了一个极具诱惑性的任务——找出车上的一位乘客，即可获得一笔巨额现金作为回报。但在寻找的过程中，麦考利逐渐发现自己卷入到一场致命的危险处境中。他是否能够从这辆“恐怖列车”中成功逃脱，背后又隐藏着怎样的惊天阴谋。随着列车不断加速，真相逐一揭开...",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rre581tg.html",
      video_type: "crime",
      video_title: "通勤营救",
    },
    {
      id: 30,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-b38384a5afe51a855b2901f1a3068d6c_qhd.jpg%3Fsource%3D57bbeac9&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654446374&t=fe5527802375bbf363866b45e1f2a67b",
      video_desc:
        "在古老传说和魔法相互碰撞的魔力时代，某神秘组织唯一幸存的一名武士格雷戈里 经四处巡游找到了预言中天赋异能的英雄——最后的第七子 ——“家里排行老七的男孩，而他的父亲同样也是家中排行第七的儿子”。这位起于田亩、与英雄形象相去甚远的年轻人在身经百战的师父的陪同下，开启了征服黑暗女王 和其手下具有超自然力量的刺客军团的勇敢之旅 。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrnzk1k4.html",
      video_type: "fantasy",
      video_title: "第七子：降魔之战",
    },
    {
      id: 31,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage11.m1905.cn%2Fuploadfile%2F2013%2F1121%2F20131121105243971747.jpg&refer=http%3A%2F%2Fimage11.m1905.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654446456&t=a87775e8cf1e415e46157f557a695e61",
      video_desc:
        "女主角索妮娅生于一个小康之家，过着平静的生活；有一天，她的父母被一名恶毒的皇族杀害。索妮娅伤心欲绝之际，誓要为父母报仇。她原来拥有一种神秘力量，可是她不可爱上男人，除非那个男人强过她，否则，她的神力就会消失。幸好在追寻那个毒后途中，遇上一名心仪的男人……",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rr9a9hws.html",
      video_type: "fantasy",
      video_title: "女王神剑",
    },
    {
      id: 32,
      image:
        "https://img0.baidu.com/it/u=1575180486,1547297621&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=500",
      video_desc:
        " 欧文的叔叔在经营着一家以动物表演闻名的马戏团，但一场大火却让叔叔意外去世，马戏团的表演场也全部化为灰烬。此时，继承马戏团的重担落在了欧文身上，但他却显得犹豫不决，而在叔叔的葬礼上，欧文的大伯霍勒肖放话要继承马戏团和宝藏，小丑红鼻头也将一盒贴着“绝对不能吃”的动物饼干交给了欧文，令局势更加混乱…",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rr0f192o.html",
      video_type: "fantasy",
      video_title: "神奇马戏团之动物饼干",
    },
    {
      id: 33,
      image:
        "https://img0.baidu.com/it/u=2119130956,1460125781&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=713",
      video_desc:
        "一个美国女大学生桑德拉，为了替学校报纸寻找独家新闻，来到英国伦敦采访一个电影导演。在调查和采访的过程中，她参加了魔术师希德一次魔术戏法表演，在密闭的箱中她遇见了一个离世 的资深记者鬼魂。记者生前是一个为了拿到独家新闻无所不尽其用的人。他在去往阴间的船上从一个被害的前任秘书口中得知“塔罗牌杀手”竟然是英俊多金的贵族彼得。他不想让这有爆炸性的新闻埋葬，于是找上桑德拉希望她帮他完成心愿。面对这个千载难逢的机会，桑德拉决定深入虎穴，拉上魔术师希德假扮父女混进上流社会，接近彼得。事情顺利得令人惊讶，桑德拉与彼得成了甜蜜的一对。然而塔罗牌杀手又继续行动……",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rr7rhmwg.html",
      video_type: "fantasy",
      video_title: "独家新闻",
    },
    {
      id: 34,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fphoto%2Fl%2Fpublic%2Fp2500359804.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654446754&t=f888e9fa897afaabd974098029a8b4a6",
      video_desc:
        "故事的地点分别发生在美国、英国和法国。美国，蓝领乔治可以和死人说话。他的超能力，一度让他成为全美宠儿。精明的哥哥准备把他打造为全方位娱乐红人。然而他放弃了一切在建筑工地上 工作。法国，记者玛丽是2004年印度洋海啸中的生还者。那次经历之后，她似乎拥有了通灵能力。英国，学生马库斯刚失去了双胞胎兄弟杰森，他正在绝望地想要寻找答案。与死亡擦肩的神秘、对未知世界的迷茫、痛失至亲的悲伤、寻找答案的迫切，在冥冥中将这三个本来毫无关系的人连在了一起，进而颠覆了他们未来的一切……",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rraoa378.html",
      video_type: "fantasy",
      video_title: "从今以后",
    },
    {
      id: 35,
      image:
        "https://img1.baidu.com/it/u=1042228888,1309069913&fm=253&fmt=auto&app=138&f=JPEG?w=268&h=378",
      video_desc:
        "颓唐邋遢的哈伯曾经是某个名噪一时的儿童秀主持人，但他早已不复当年的辉煌，节目收视率持续走低，哈伯则自暴自弃，饮酒作乐，任意妄为，甚至搞砸节目的录制。最终，他失去了这份干了半辈子的工作。在此之后，他打电话找来自己的粉丝以及唯一好友——刚刚通过医生考试的青年德文。醉醺醺的哈伯声称要从事人偶生意，而且还送给德文一个大号的Ooga Booga土著人偶。归家途中，德文意外遭遇一场抢劫案，谁知报警后却被带有种族偏见的警察当作劫犯射杀。德文含冤而死，未曾料他的灵魂却附到那个可怕的Ooga Booga人偶身上。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrmueylc.html",
      video_type: "fantasy",
      video_title: "复仇木偶人",
    },
    {
      id: 36,
      image:
        "https://img1.baidu.com/it/u=269552742,2210889379&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889",
      video_desc:
        "故事改编自二战上等兵军医戴斯蒙德·道斯的真实经历，他因为在冲绳岛战役中勇救75人生命而被授予美国国会荣誉勋章，同时也是首位获此荣誉的在战场上拒绝杀戮的医疗兵。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rr9ts93w.html",
      video_type: "warfare",
      video_title: "血战钢锯岭",
    },
    {
      id: 37,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage11.m1905.cn%2Fuploadfile%2F2012%2F0705%2F20120705112909855.jpg&refer=http%3A%2F%2Fimage11.m1905.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654447082&t=36072c002baf6c0b29d2927017602d2e",
      video_desc:
        "背景是1937年的西班牙内战。来自美国的大学老师罗勃跟白求恩一样到西班牙帮助当地人民抗击法西斯。他在完成炸火车任务后，被派一项新任务：跟自发组成的游击队联手，炸毁峡谷上的铁桥。他认识并爱上了美丽的玛莉亚。玛莉亚是市长的女儿，但父母均被法西斯杀害，玛莉亚也遭侮辱。在共同理想的催化下，他们相爱了，但罗勃却在这场战斗中牺牲。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrmx7jtg.html",
      video_type: "warfare",
      video_title: "战地钟声（原声）",
    },
    {
      id: 38,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F1c950a7b02087bf40ad16fb80f9a402c11dfa9ec6102&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654447248&t=b789c92034506d29376f4e20f14b22cc",
      video_desc:
        "电影讲述的是第二次世界大战太平洋战争重要转折点——中途岛海战：经此一役，日本海军受到“降维打击”，美日海上实力反转，从而扭转了整个太平洋战场的局势。影片通过参战士兵和飞行员一个个鲜活的故事，带领观众逐步进入1942年6月初发生在太平洋中途岛附近那场令人难以置信的战争……",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rvtyq35s.html",
      video_type: "warfare",
      video_title: "决战中途岛",
    },
    {
      id: 39,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage11.m1905.cn%2Fuploadfile%2F2012%2F0712%2F20120712051337896.jpg&refer=http%3A%2F%2Fimage11.m1905.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654447311&t=679d4ac1ec5ba53d208154975546f912",
      video_desc:
        "幼年丧母的日瓦戈被过继给母亲的朋友，自此与继母一家的小女儿冬妮娅一同成长，并顺利修完医学专业，成为了一名优秀的医生。在另一条平行的生命线上，出生于裁缝之家的拉娜正是十七岁的金色年华，母亲的情人维克多不时骚扰她，热衷于工人革命的未婚夫帕夏更让拉娜日日为其担忧。在工人运动风起云涌的日子里，日瓦戈目睹了当局对工人的残酷镇压，拉娜则因帕夏被卷入工人运动而遭到维克多的玷污，由于维克多的关系，日瓦戈与拉娜的人生终于汇合，在不久后混乱的一战中，他们终于不顾各自的伴侣陷入了热恋……不久布尔什维克掌握政权，返回家乡与冬妮娅团聚的日瓦戈发现生活却每况愈下，以至他们不得不远赴乡村谋生，岂料在遥远的北方村落，日瓦戈再次与拉娜相遇",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrho8dno.html",
      video_type: "warfare",
      video_title: "日瓦戈医生",
    },
    {
      id: 40,
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F9f3cba45e4bf7de597b13bdb54577d25bdf4d0315962d-DGLAV0_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654447366&t=665d6eddbd26ed009cfd771026e7caa5",
      video_desc:
        "改编自真人真事，以伊拉克战争为背景，讲诉海军陆战队下士梅根·利维和她的军犬瑞克斯一起拯救了多人生命的故事。在经历生死与相互救赎后，一人一犬建立深厚情感的故事。 它在真实的背景下以一种特殊的方式升华了人与狗的情感。狗不再是宠物，而是以战友身份与人相处；它们不再生活在人类的庇护下，而是反过来，用自己的身躯保护人类。 该片以“军犬”这个新奇的角度还原伊拉克战争，首次全面展现军犬在战区排爆、救人的惊心动魄的画面，真实刻画了女兵梅根·利维与军犬瑞克斯在战场上紧张、勇猛的状态。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrcekx34.html",
      video_type: "warfare",
      video_title: "战犬瑞克斯",
    },
    {
      id: 41,
      image: "https://t2.baidu.com/it/u=492406160,601899782&fm=20",
      video_desc:
        "影片讲述了一个失去性能力的退伍军人在未婚妻子的帮助下，寻回自信，最终获得幸福婚姻的感人故事，影片富含一定哲理，供大家静下心来，好好地思考！一队身负重伤，下肢截瘫的军人退伍回到了“普通”生活，他们当中有一个人曾经是一名优秀的运动员。当他得知自己失去男人的特征的时候，他拒绝见他的未婚妻 。最后，在他的未婚妻的努力帮助下，他重新建立自信，同失去男人特征的恐惧作斗争，终于获得了幸福的婚姻",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rr7qhbd8.html",
      video_type: "warfare",
      video_title: "男儿本色（1950）",
    },
  ];
}
</script>
<style lang="scss" scoped></style>
