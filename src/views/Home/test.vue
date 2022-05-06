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
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage11.m1905.cn%2Fuploadfile%2F2012%2F0816%2F20120816063019437.jpg&refer=http%3A%2F%2Fimage11.m1905.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654397044&t=d7129ae8ec917507fd0743ed1ddba9e6",
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
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs2.best-wallpaper.net%2Fwallpaper%2Fiphone%2F1812%2FUnderworld-Blood-Wars-Kate-Beckinsale-snow-guns_iphone_640x1136.jpg&refer=http%3A%2F%2Fs2.best-wallpaper.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654399890&t=12c679195d78cc1ed9791cde56c34f7d",
      video_desc: "该片讲述了为获得地下世界的生存统治权，具有贵族气质的吸血鬼和生性凶残野蛮的狼人他们无时无刻不在暗夜中寻找机会干掉对方，一场大战一触即发的故事",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rr7r4yk8.html",
      video_type: "action",
      video_title: "黑夜传说",
    },
    {
      id: 17,
      image: "https://img1.baidu.com/it/u=783089834,1917850615&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=741",
      video_desc: "当一个退休的特工发现他将成为中央情报局暗杀总统的代罪羔羊时，他再也无法安然享受他的退休人生……",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rw7zk8w4.html",
      video_type: "action",
      video_title: "退役任务",
    },
    {
      id: 18,
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fihd.me%2Fposter%2Flpst%2Fp2198830099.jpg&refer=http%3A%2F%2Fihd.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654402042&t=1face68bb44ea4df2813f427b20c6f30",
      video_desc: "荣誉无数的警官在庆功宴喝的大醉酩酊他开车到街上将一个骑自行车的人撞成重伤，为了掩盖事实他撒了谎。从此一波接一波的一样事件接踵而至，他的生命就此改变。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrmycfec.html",
      video_type: "gun_battle",
      video_title: "罪不可赦",
    },
    {
      id: 19,
      image: "https://img2.baidu.com/it/u=3900965477,730813019&fm=253&fmt=auto&app=138&f=JPEG?w=240&h=355",
      video_desc: "影片讲述德州骑警察调查一系列发生在一个海伦娜的小镇的不明死亡案件，大卫(海姆斯沃斯饰)在海伦娜镇调查谋杀案时，却惊人发现了20年前杀害自己父亲的凶手亚伯罕(哈里森饰)。亚伯罕也将与大卫上演一出精彩对抗。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rr7p7ytc.html",
      video_type: "gun_battle",
      video_title: "海伦娜之路",
    },
    {
      id: 20,
      image: "https://pic5.iqiyipic.com/image/20210916/d4/40/v_109702087_m_601_m9_180_236.jpg",
      video_desc: " 欧内斯特和他的儿子杰罗姆花掉了家里最后一笔积蓄买了一头机器人骡子，他们决定用这头电子骡子为在山上钻井的工作人员运送口粮。他们从未想过，这一举动竟然完全改变了他们的未来。费莱姆对欧内斯特的女儿玛丽设下陷阱，目的只为取回属于他的土地，因为他的父亲在21世纪工业化养殖的全盛时期曾经拥有过这片土地。随着弗莱姆的精于算计和天衣无缝的谎言，他的阴谋正一步步走向实现。而这一系列行动将永远改变他们年轻的命运。而欧内斯特的儿子杰罗姆也将做出一个艰难的抉择。",
      video_info: "",
      video_link: "https://www.iqiyi.com/v_19rrkp07yg.html",
      video_type: "gun_battle",
      video_title: "夺命城",
    },
    {
      id: 15,
      image: "",
      video_desc: "",
      video_info: "",
      video_link: "",
      video_type: "gun_battle",
      video_title: "夺命城",
    },
    {
      id: 15,
      image: "",
      video_desc: "",
      video_info: "",
      video_link: "",
      video_type: "gun_battle",
      video_title: "夺命城",
    },
    {
      id: 15,
      image: "",
      video_desc: "",
      video_info: "",
      video_link: "",
      video_type: "gun_battle",
      video_title: "夺命城",
    },
    {
      id: 15,
      image: "",
      video_desc: "",
      video_info: "",
      video_link: "",
      video_type: "gun_battle",
      video_title: "夺命城",
    },
  ];
}
</script>
<style lang="scss" scoped></style>
