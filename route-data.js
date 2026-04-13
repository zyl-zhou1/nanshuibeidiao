// 南水北调工程路线数据
// 数据来源：官方工程数据
// 修正日期：2026年3月

const southNorthWaterTransferData = {
    eastRoute: {
        name: "东线工程",
        status: "已建成（一期）",
        description: "利用江苏省已有的江水北调工程，从长江下游扬州江都抽引长江水，利用京杭大运河及与其平行的河道逐级提水北送，经洪泽湖、骆马湖、南四湖、东平湖。出东平湖后分两路输水：一路向北经隧洞穿过黄河输水到天津；另一路向东经济南输水到烟台、威海。",
        totalLength: 1466.50,  // 千米 - 修正为准确数据
        annualWaterTransfer: 148,  // 亿立方米 - 修正为规划数据
        cumulativeWaterTransfer: 60,  // 亿立方米（截至2025年）
        planningStages: "三期",
        routePoints: [
            { x: 119.4, y: 32.4, name: "扬州江都", type: "start" },
            { x: 119.2, y: 33.0, name: "高邮", type: "node" },
            { x: 119.0, y: 33.3, name: "宝应", type: "node" },
            { x: 118.8, y: 33.5, name: "淮安", type: "node" },
            { x: 118.6, y: 33.8, name: "洪泽湖", type: "lake" },
            { x: 118.3, y: 34.1, name: "宿迁", type: "node" },
            { x: 118.0, y: 34.3, name: "骆马湖", type: "lake" },
            { x: 117.8, y: 34.5, name: "徐州", type: "node" },
            { x: 117.2, y: 34.8, name: "微山湖", type: "lake" },
            { x: 116.9, y: 35.0, name: "济宁", type: "node" },
            { x: 116.8, y: 35.2, name: "南四湖", type: "lake" },
            { x: 116.5, y: 35.8, name: "东平湖", type: "lake" },
            { x: 116.2, y: 36.2, name: "聊城", type: "node" },
            { x: 116.0, y: 36.5, name: "位山", type: "node" },
            { x: 115.8, y: 36.8, name: "穿黄隧洞", type: "key" },
            { x: 115.5, y: 37.2, name: "衡水", type: "node" },
            { x: 115.0, y: 37.8, name: "保定", type: "node" },
            { x: 117.2, y: 39.1, name: "天津", type: "end" }
        ],
        keyProjects: ["江都水利枢纽", "京杭大运河渠道", "洪泽湖调蓄", "骆马湖调蓄", "南四湖调蓄", "东平湖调蓄", "穿黄隧洞", "胶东输水干线"],
        benefits: "解决山东、河北、天津等地水资源短缺问题，为沿线城市提供工业和生活用水"
    },
    middleRoute: {
        name: "中线工程",
        status: "已建成",
        description: "从加坝扩容后的丹江口水库陶岔渠首闸引水，沿线开挖渠道，经唐白河流域西部过方城垭口，沿黄淮海平原西部边缘，在郑州以西李村附近穿过黄河，沿京广铁路西侧北上，基本自流到北京、天津。",
        totalLength: 1431.945,  // 千米（其中总干渠1276.414千米，天津输水干线155.531千米）- 精确数据
        annualWaterTransfer: 130,  // 亿立方米 - 修正为规划数据
        cumulativeWaterTransfer: 680,  // 亿立方米（截至2025年）
        planningStages: "两期",
        routePoints: [
            { x: 111.5, y: 32.6, name: "丹江口水库", type: "start" },
            { x: 111.8, y: 32.9, name: "陶岔渠首", type: "key" },
            { x: 112.2, y: 33.1, name: "南阳", type: "node" },
            { x: 112.5, y: 33.3, name: "方城垭口", type: "key" },
            { x: 112.8, y: 33.5, name: "平顶山", type: "node" },
            { x: 113.0, y: 33.8, name: "许昌", type: "node" },
            { x: 113.3, y: 34.0, name: "新郑", type: "node" },
            { x: 113.5, y: 34.3, name: "郑州", type: "node" },
            { x: 113.6, y: 34.6, name: "李村穿黄", type: "key" },
            { x: 113.5, y: 35.0, name: "焦作", type: "node" },
            { x: 113.4, y: 35.5, name: "新乡", type: "node" },
            { x: 113.8, y: 36.0, name: "安阳", type: "node" },
            { x: 114.2, y: 36.5, name: "邯郸", type: "node" },
            { x: 114.5, y: 37.0, name: "邢台", type: "node" },
            { x: 114.8, y: 37.5, name: "石家庄", type: "node" },
            { x: 115.0, y: 38.2, name: "保定", type: "node" },
            { x: 115.5, y: 38.8, name: "涿州", type: "node" },
            { x: 116.4, y: 39.9, name: "北京", type: "end" },
            { x: 117.2, y: 39.1, name: "天津", type: "end" }
        ],
        keyProjects: ["丹江口大坝加高", "陶岔渠首闸", "总干渠", "穿黄隧洞", "北京输水管道", "天津输水干线"],
        benefits: "为北京、天津、河北、河南等省市提供生活和工业用水，改善受水区生态环境"
    },
    westRoute: {
        name: "西线工程",
        status: "规划中",
        description: "主要解决涉及青海、甘肃、宁夏、内蒙古、陕西、山西等6省（自治区）黄河上中游地区和渭河关中平原的缺水问题。计划从长江上游通天河、雅砻江、大渡河调水至黄河上游。具体方案正在深入研究论证中。",
        totalLength: null,  // 规划中，长度待定
        annualWaterTransfer: 170,  // 亿立方米（规划目标）
        cumulativeWaterTransfer: 0,
        planningStages: "规划中",
        routePoints: [
            { x: 95.0, y: 33.5, name: "通天河", type: "source" },
            { x: 97.0, y: 32.5, name: "通天河支流", type: "node" },
            { x: 100.5, y: 32.0, name: "雅砻江", type: "source" },
            { x: 102.0, y: 31.5, name: "雅砻江支流", type: "node" },
            { x: 103.5, y: 31.0, name: "大渡河", type: "source" },
            { x: 102.0, y: 32.0, name: "阿坝", type: "node" },
            { x: 101.5, y: 33.0, name: "若尔盖", type: "node" },
            { x: 101.5, y: 35.0, name: "黄河上游", type: "end" },
            { x: 103.5, y: 36.0, name: "兰州", type: "node" },
            { x: 106.0, y: 38.0, name: "银川", type: "node" },
            { x: 108.5, y: 37.5, name: "延安", type: "node" },
            { x: 109.0, y: 34.5, name: "西安", type: "node" }
        ],
        keyProjects: ["通天河引水渠", "雅砻江引水渠", "大渡河引水渠", "黄河上游调蓄工程"],
        benefits: "解决西北地区水资源短缺问题，为黄河上中游地区提供生态和农业用水"
    },
    summary: {
        totalPlanningScale: 448,  // 亿立方米
        eastPlanningScale: 148,   // 亿立方米
        middlePlanningScale: 130, // 亿立方米
        westPlanningScale: 170,   // 亿立方米
        constructionPeriod: "40～50年",
        totalBeneficiaries: "1.85亿人",
        totalCities: 40,
        cumulativeWaterTransfer: "800亿立方米"
    }
};

// 导出数据（支持模块导入）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = southNorthWaterTransferData;
}
