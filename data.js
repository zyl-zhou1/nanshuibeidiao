// 南水北调大事记数据 (1952-1980年)
const timelineData = [
    {
        year: 1952,
        summary: "毛泽东主席提出南水北调宏伟设想，汉江流域规划启动",
        importance: 5,
        events: [
            {
                date: "4月5日",
                description: "荆江分洪工程全面开工",
                importance: 1,
                image: null
            },
            {
                date: "5月24日",
                description: "水利部长傅作义向荆江分洪工地建设者授予毛泽东、周恩来亲笔题词锦旗；6月20日，荆江分洪主体工程提前15天竣工",
                importance: 2,
                image: null
            },
            {
                date: "8月～12月",
                description: "黄河水利委员会开展黄河源查勘，研究通天河色吾曲——黄河多曲引水线路，为长江上游引水济黄奠定基础",
                importance: 2,
                image: null
            },
            {
                date: "10月30日",
                description: "毛主席视察黄河时首次提出南水北调宏伟设想",
                importance: 5,
                image: "1952年，毛泽东主席视察黄河时提出“南水北调”的伟大设想.jpg"
            },
            {
                date: "10月",
                description: "水利部组织近百人查勘团查勘汉江中、下游河段，确定丹江口为良好坝址，加快汉江流域规划和丹江口工程勘测设计",
                importance: 4,
                image: null
            }
        ]
    },
    {
        year: 1953,
        summary: "毛主席视察长江，指示抓紧南水北调工作",
        importance: 5,
        events: [
            {
                date: "2月19日～22日",
                description: "毛主席乘'长江舰'视察长江，指示抓紧南水北调工作，重点研究汉江引水方案",
                importance: 5,
                image: null
            },
            {
                date: "首次提出",
                description: "从丹江口水库引水济黄济淮的设想",
                importance: 3,
                image: null
            },
            {
                date: "1953年",
                description: "13名工程技术人员组成水利援藏干部工作组开赴昌都，成为首批援藏水利开拓者",
                importance: 1,
                image: null
            },
            {
                date: "5月22日",
                description: "毛泽东再次批示'南水北调工作要抓紧'",
                importance: 4,
                image: null
            },
            {
                date: "林一山带队",
                description: "赴汉江流域开展大型考察",
                importance: 2,
                image: null
            }
        ]
    },
    {
        year: 1954,
        summary: "苏联专家参与规划，丹江口坝址初步确定",
        importance: 3,
        events: [
            {
                date: "3月至7月",
                description: "苏联专家参与长江规划，初步选定三斗坪为三峡大坝坝址",
                importance: 2,
                image: null
            },
            {
                date: "10月",
                description: "国家计委等部门会同苏联专家组查勘丹江口坝址，提出汉江综合利用、梯级开发初步意见",
                importance: 3,
                image: null
            },
            {
                date: "1954年",
                description: "永定河官厅水库竣工，为大型水库建设积累经验",
                importance: 1,
                image: null
            },
            {
                date: "12月中旬",
                description: "毛泽东、刘少奇、周恩来听取三峡工程汇报，指示抓紧规划科研工作",
                importance: 2,
                image: null
            }
        ]
    },
    {
        year: 1955,
        summary: "汉江流域规划编制，丹江口列入五年计划",
        importance: 4,
        events: [
            {
                date: "3月",
                description: "长委会编制《汉江流域规划》报告",
                importance: 2,
                image: null
            },
            {
                date: "1955年",
                description: "第一届全国人大二次会议通过《关于根治黄河水害和开发黄河水利的综合规划的决议》",
                importance: 2,
                image: null
            },
            {
                date: "兴建丹江口水库",
                description: "被列入国家第一个五年计划重点建设工程",
                importance: 4,
                image: null
            }
        ]
    },
    {
        year: 1956,
        summary: "丹江口水利枢纽确定为第一期工程",
        importance: 4,
        events: [
            {
                date: "3月",
                description: "长办提出《汉江流域规划简要报告》；5至6月，水利部审查通过，肯定丹江口水利枢纽为第一期工程；7月，启动丹江口水利枢纽勘测、初步设计等工作",
                importance: 4,
                image: null
            },
            {
                date: "1956年",
                description: "汉水杜家台分洪工程建成",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1957,
        summary: "丹江口工程正常高水位方案确定",
        importance: 3,
        events: [
            {
                date: "3月",
                description: "水利部同意丹江口水利枢纽为第一期工程，长办确定正常高水位160米至170米方案",
                importance: 3,
                image: null
            },
            {
                date: "1957年",
                description: "三门峡水利枢纽、浙江新安江水电站开工",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1958,
        summary: "丹江口工程正式开工，南水北调首次见于中央文献",
        importance: 5,
        events: [
            {
                date: "1月中旬",
                description: "中共中央南宁会议安排讨论三峡工程，毛泽东请周恩来挂帅负责",
                importance: 2,
                image: null
            },
            {
                date: "2月27日",
                description: "周恩来总理等听取丹江口工程汇报，明确工程综合利用方向、前期工作要求等",
                importance: 4,
                image: "1958年2月27日，周恩来总理（右二）在视察三峡途中，提出将丹江口工程列入第二个五年计划.jpg"
            },
            {
                date: "3月",
                description: "中共中央成都会议形成《中共中央关于三峡水利枢纽和长江流域规划的意见》，毛泽东再次提出引江、引汉济黄等问题",
                importance: 3,
                image: null
            },
            {
                date: "3月6日",
                description: "周恩来明确丹江口工程纳入第二个五年计划；3月7日，成都会议作出兴建丹江口水利枢纽工程的决定",
                importance: 4,
                image: null
            },
            {
                date: "3月25日",
                description: "中共中央政治局成都会议明确丹江口工程争取1959年施工准备或正式开工",
                importance: 3,
                image: null
            },
            {
                date: "4月",
                description: "中共中央政治局会议批准三峡工程相关意见，强调积极准备、充分可靠方针",
                importance: 2,
                image: null
            },
            {
                date: "4月25日",
                description: "水电部下达丹江口水利枢纽初步设计任务书（草案），明确工程四大任务",
                importance: 3,
                image: null
            },
            {
                date: "6月4～6日",
                description: "湖北省委、水电部召开丹江口工程鉴定会议，确定设计蓄水位、装机容量等关键指标",
                importance: 3,
                image: null
            },
            {
                date: "6月12日",
                description: "汉江丹江口工程委员会和工程局成立，明确组织架构和负责人",
                importance: 2,
                image: null
            },
            {
                date: "6月23日",
                description: "任仕舜提交丹江口工程马上动工报告；7月28日，水电部批复同意",
                importance: 2,
                image: null
            },
            {
                date: "8月",
                description: "中共中央北戴河会议通过《关于水利工作的指示》，'南水北调'一词首次见于中央正式文献；1958-1960年中央召开4次全国南水北调会议，制定工作计划",
                importance: 5,
                image: null
            },
            {
                date: "8月8日",
                description: "湖北省委发出支援丹江口工程指示，确定9月1日正式开工",
                importance: 3,
                image: null
            },
            {
                date: "8月28～30日",
                description: "汉江丹江口工程委员会召开第二次会议，讨论施工方案和开工准备",
                importance: 1,
                image: null
            },
            {
                date: "9月1日",
                description: "汉江丹江口工程举行开工典礼，淅川县组织2.8万民兵参与建设",
                importance: 4,
                image: "１９５８年９月开工到１９５９年１２月汉江截流   .jpg"
            },
            {
                date: "9月",
                description: "水电部明确丹江口水利枢纽引汉灌溉、济黄济淮任务；后续1968年下闸蓄水、1973年清泉沟引丹灌区渠首建成、1974年陶岔渠首建成",
                importance: 4,
                image: null
            },
            {
                date: "10月19日",
                description: "湖北省委在丹江口工地召开现场会议，提出'以土赶水'等施工方案",
                importance: 1,
                image: null
            },
            {
                date: "10月31日",
                description: "汉江丹江口工程局改为总指挥部；11月20日，正式成立，明确总指挥长和政治委员",
                importance: 2,
                image: null
            },
            {
                date: "11月3日",
                description: "张体学向周恩来总理请示丹江口工程相关问题，总理批示同意",
                importance: 2,
                image: null
            },
            {
                date: "11月5日",
                description: "丹江口水利枢纽右岸低水围堰开工；12月25日，胜利合龙",
                importance: 3,
                image: null
            },
            {
                date: "12月15日",
                description: "水利电力部副部长刘澜波、李锐视察丹江口工地",
                importance: 1,
                image: null
            },
            {
                date: "12月20日",
                description: "王任重、林一山视察丹江口工地并作报告",
                importance: 1,
                image: null
            },
            {
                date: "1958年",
                description: "刘家峡水利枢纽开工建设",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1959,
        summary: "南水北调总体布局确定，汉江截流成功",
        importance: 5,
        events: [
            {
                date: "1959年",
                description: "《长江流域利用规划要点报告》提出南水北调'上、中、下游分别调水'总体布局，明确中线工程近期从丹江口水库引水",
                importance: 5,
                image: null
            },
            {
                date: "1月",
                description: "河南省南阳市淅川县确定新县城城址",
                importance: 1,
                image: null
            },
            {
                date: "1月3～5日",
                description: "丹江口水利工程总部召开第一次职工代表会议",
                importance: 1,
                image: null
            },
            {
                date: "1月23日",
                description: "长办组织中外专家赴丹江口工地解决技术问题",
                importance: 1,
                image: null
            },
            {
                date: "1月",
                description: "淅川县动员8008名青年赴青海支援边疆建设",
                importance: 1,
                image: null
            },
            {
                date: "2月",
                description: "中科院、水电部召开'西部地区南水北调考察研究工作会议'，确定南水北调指导方针",
                importance: 4,
                image: null
            },
            {
                date: "3月7～11日",
                description: "水电部和长办召开丹江口工程基础鉴定会议",
                importance: 2,
                image: null
            },
            {
                date: "3月29日",
                description: "水电部副部长钱正英视察丹江口工地",
                importance: 1,
                image: null
            },
            {
                date: "3月31日",
                description: "汉江出现三月份最大洪水，低水围堰溃口后抢险成功",
                importance: 1,
                image: null
            },
            {
                date: "5月11日",
                description: "湖北省委发出加强支援丹江口工程的指示",
                importance: 1,
                image: null
            },
            {
                date: "7月6日",
                description: "水电部质量检查组指出丹江口工程质量存在问题",
                importance: 2,
                image: null
            },
            {
                date: "9月18日",
                description: "水电部副部长李葆华视察丹江口工地",
                importance: 1,
                image: null
            },
            {
                date: "9月24日",
                description: "李先念副总理视察丹江口工地",
                importance: 1,
                image: "1959年12月26日，中共中央政治局委员、国务院副总理李先念（右），在施工现场听取湖北省省长兼丹江口工程总指挥长张体学汇报情况。.jpg"
            },
            {
                date: "9月26日",
                description: "胡耀帮视察丹江口工地",
                importance: 1,
                image: null
            },
            {
                date: "10月",
                description: "南阳地区4万多名干部、民工赴丹江口工地，施工队伍近10万人；10月20日，成立截流司令部",
                importance: 2,
                image: null
            },
            {
                date: "12月26日",
                description: "丹江口水利工程完成汉江截流，李先念副总理参加庆祝大会",
                importance: 4,
                image: null
            }
        ]
    },
    {
        year: 1960,
        summary: "丹江口大坝开始建设，工程稳步推进",
        importance: 3,
        events: [
            {
                date: "丹江口大坝",
                description: "开始建设",
                importance: 3,
                image: null
            },
            {
                date: "3月8～11日",
                description: "董必武视察丹江口工地",
                importance: 1,
                image: null
            },
            {
                date: "3月13～15日",
                description: "全国人大、政协湖北省视察团视察丹江口工地",
                importance: 1,
                image: null
            },
            {
                date: "3月28～31日",
                description: "中共汉江丹江口水利工程委员会召开第一次党代会",
                importance: 1,
                image: null
            },
            {
                date: "5月1日",
                description: "汉江丹江口坝址下游跨江悬索大桥建成，9月4日被洪水冲毁",
                importance: 1,
                image: null
            },
            {
                date: "9月7日",
                description: "汉江出现九月份最大洪水，二期围堰安全渡汛",
                importance: 1,
                image: null
            },
            {
                date: "9月12日",
                description: "水电总局黄宇齐局长视察丹江口工地并作指示",
                importance: 1,
                image: null
            },
            {
                date: "1960年",
                description: "河南林县引漳入林工程动工",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1961,
        summary: "丹江口工程质量检查，国务院部署整改",
        importance: 4,
        events: [
            {
                date: "2月28日",
                description: "钱正英副部长指示丹江口工程不停工，安排5000万元投资集中用于混凝土",
                importance: 2,
                image: null
            },
            {
                date: "5月18日",
                description: "越南水利电力代表团考察丹江口工地",
                importance: 1,
                image: null
            },
            {
                date: "6月22日",
                description: "水电总局协调三门峡工程局支援丹江口机械设备及技术人员",
                importance: 1,
                image: null
            },
            {
                date: "7月～8月",
                description: "丹江口工程总指挥部进行人员精简",
                importance: 1,
                image: null
            },
            {
                date: "8月28日",
                description: "'汉江丹江口水利工程总指挥部'更名为'水利电力部汉江丹江口工程局'",
                importance: 1,
                image: null
            },
            {
                date: "11月1～19日",
                description: "水电部党组和湖北省委联合质量检查组指出丹江口大坝存在严重质量问题；12月23日，水利水电总局提出质量处理和施工安排意见",
                importance: 4,
                image: null
            },
            {
                date: "1961年",
                description: "水电部副局长冯仲云开展质量检查，强调大坝质量问题需妥善处理",
                importance: 3,
                image: null
            }
        ]
    },
    {
        year: 1962,
        summary: "丹江口工程停工处理质量问题",
        importance: 5,
        events: [
            {
                date: "1月11日",
                description: "林一山向周总理、水电部党组提交《关于丹江口工程质量事故的报告》，建议停工处理；1月18日，工程停止坝混凝土浇筑",
                importance: 4,
                image: null
            },
            {
                date: "2月8日",
                description: "周恩来总理主持召开丹江口工程质量处理会议，明确停工处理质量、施工服从设计等要求",
                importance: 5,
                image: null
            },
            {
                date: "2月16日",
                description: "水电部党组向党中央提出大坝质量处理与施工安排报告",
                importance: 4,
                image: null
            },
            {
                date: "3月5日",
                description: "中共中央批复同意水电部党组报告，丹江口主体工程正式停工",
                importance: 5,
                image: null
            },
            {
                date: "9月30日",
                description: "水电部下达丹江口大坝补强处理设计指示",
                importance: 3,
                image: null
            },
            {
                date: "10月29～11月3日",
                description: "长办组织讨论大坝补强轮廓方案并上报",
                importance: 2,
                image: null
            }
        ]
    },
    {
        year: 1963,
        summary: "丹江口大坝质量补强方案确定",
        importance: 3,
        events: [
            {
                date: "2月27日",
                description: "长办报送丹江口大坝混凝土质量处理工程设计任务书；5月，水电部审查大坝轮廓补强方案",
                importance: 2,
                image: null
            },
            {
                date: "3月29～30日",
                description: "丹江口工程局党委召开会议，开展'五反'运动",
                importance: 1,
                image: null
            },
            {
                date: "6月6日",
                description: "国务院批复丹江口大坝质量事故设计任务书，要求完善整体工程设计任务书",
                importance: 2,
                image: null
            },
            {
                date: "6月18日",
                description: "水电部等上报大坝质量事故处理和重新编制设计任务书报告，明确地震设防烈度、处理方案等",
                importance: 3,
                image: null
            },
            {
                date: "8月",
                description: "长办上报汉江丹江口水利枢纽整体工程修正设计任务书",
                importance: 2,
                image: null
            },
            {
                date: "10月",
                description: "长办上报丹江口水利枢纽附属企业设计报告并获审查批复",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1964,
        summary: "丹江口水库续建工程获批",
        importance: 4,
        events: [
            {
                date: "1月27日",
                description: "水电部下达大坝质量事故处理补强轮廓方案讨论意见",
                importance: 3,
                image: null
            },
            {
                date: "国务院批复",
                description: "（64）国计字572号文件批复丹江口水库续建工程规划；4月21日，豫鄂两省商定移民'河南管迁，湖北管安'原则",
                importance: 3,
                image: null
            },
            {
                date: "5月15日",
                description: "水电部答复长办整体工程修整设计任务书，提出分期建设方案",
                importance: 2,
                image: null
            },
            {
                date: "6月",
                description: "长办上报左岸河床坝段厚防渗板技术设计报告，水电部后续下达审批意见",
                importance: 2,
                image: null
            },
            {
                date: "11月7日",
                description: "水电部上报国务院缩小丹江口工程建设规模请示报告，提出三种方案并推荐防洪结合发电方案",
                importance: 3,
                image: null
            },
            {
                date: "12月7日",
                description: "国务院批复同意按防洪结合发电方案设计施工",
                importance: 4,
                image: null
            },
            {
                date: "12月16日",
                description: "丹江口水利工程恢复坝体混凝土浇筑",
                importance: 4,
                image: null
            }
        ]
    },
    {
        year: 1965,
        summary: "丹江口工程续建设计完善",
        importance: 3,
        events: [
            {
                date: "1月13日",
                description: "丹江口工程混凝土一条龙系统正式投产",
                importance: 1,
                image: null
            },
            {
                date: "1月21日",
                description: "水电总局确定丹江口水运驳转枢纽采用绳索牵引方案",
                importance: 1,
                image: null
            },
            {
                date: "1956年3月",
                description: "长委会完成《汉江流域规划简要报告》，确定丹江口水利枢纽相关设计标准",
                importance: 3,
                image: null
            },
            {
                date: "4月21日",
                description: "豫鄂两省确定'河南管迁，湖北管安'移民政策，6.9万人迁往湖北",
                importance: 3,
                image: null
            },
            {
                date: "5月",
                description: "长办上报丹江口水利枢纽续建工程初步设计报告并获审查",
                importance: 2,
                image: null
            },
            {
                date: "8月",
                description: "湖北省人委等上报《关于丹江口水利枢纽建设标准的请示》，建议抬高坝顶高程至162米",
                importance: 3,
                image: null
            },
            {
                date: "11月6日",
                description: "水利水电总局通知丹江口电站不装小机组，调运三门峡15万千瓦机组",
                importance: 1,
                image: null
            },
            {
                date: "12月",
                description: "首批越南实习生来工地实习，至1971年共培训512人",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1966,
        summary: "丹江口工程全面恢复建设",
        importance: 4,
        events: [
            {
                date: "1月1日",
                description: "汉丹铁路全线通车，解决工程物资运输问题",
                importance: 2,
                image: null
            },
            {
                date: "3月",
                description: "水电部审查通过丹江口水电站机电部分技术设计",
                importance: 1,
                image: null
            },
            {
                date: "3月",
                description: "成立南水北调工程审查委员会",
                importance: 3,
                image: null
            },
            {
                date: "3月中旬",
                description: "丹江口水库蓄水，淅川县首批14868名外迁移民搬迁完毕",
                importance: 2,
                image: null
            },
            {
                date: "5月",
                description: "水电部和交通部确定丹江口水利枢纽通航建筑物过坝方式",
                importance: 1,
                image: null
            },
            {
                date: "6月23日",
                description: "国务院批复同意丹江口大坝坝顶按162米施工，初期按145米移民蓄水",
                importance: 4,
                image: null
            },
            {
                date: "7月6日",
                description: "湖北省委向中央提交丹江口水库1967年底发电的报告",
                importance: 1,
                image: null
            },
            {
                date: "8月3日",
                description: "水电部向中央提交丹江口水库1967年底发电的报告",
                importance: 1,
                image: null
            },
            {
                date: "9月8日",
                description: "交通部等上报丹江口升船机规模请示报告",
                importance: 1,
                image: null
            },
            {
                date: "9月10日",
                description: "国家计委等批复同意丹江口水库1967年底发电",
                importance: 2,
                image: null
            },
            {
                date: "10月20日",
                description: "国家计委批复丹江口升船机规模及建成时间",
                importance: 1,
                image: null
            },
            {
                date: "10月22日",
                description: "丹江口工程创日浇筑混凝土最高记录；11月创月浇筑最高记录",
                importance: 1,
                image: null
            },
            {
                date: "12月13日",
                description: "水电部通知调运三门峡15万瓩水轮发电机组给丹江口水电站",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1967,
        summary: "丹江口水库下闸蓄水",
        importance: 4,
        events: [
            {
                date: "3月",
                description: "丹江口电厂筹备处成立",
                importance: 1,
                image: null
            },
            {
                date: "3月24日",
                description: "丹江口工程进水口闸门开始安装",
                importance: 1,
                image: null
            },
            {
                date: "8月27日～11月",
                description: "水电部军管会等组织质量鉴定组检查验收丹江口枢纽已完工程",
                importance: 2,
                image: null
            },
            {
                date: "11月5日",
                description: "丹江口工程举行下闸蓄水典礼",
                importance: 4,
                image: null
            },
            {
                date: "11月8日",
                description: "水电部批复丹江口水库继续按防洪照顾发电方案建设",
                importance: 2,
                image: null
            },
            {
                date: "11月18日",
                description: "丹江口水库落闸蓄水，淅川县马镫镇以下被淹没",
                importance: 3,
                image: null
            }
        ]
    },
    {
        year: 1968,
        summary: "丹江口水电站首台机组发电",
        importance: 4,
        events: [
            {
                date: "3月16日",
                description: "丹江口工程局革委会成立",
                importance: 1,
                image: null
            },
            {
                date: "5月7日",
                description: "丹江口水电站第一台机组安装成功并试运转",
                importance: 3,
                image: null
            },
            {
                date: "5月30日",
                description: "丹江口工程局革委会报送蓄水验收工程质量鉴定报告",
                importance: 1,
                image: null
            },
            {
                date: "6月10月",
                description: "水电部军管会批示丹江口通航建筑物按162米高程设计施工",
                importance: 1,
                image: null
            },
            {
                date: "7月20日",
                description: "李先念副总理对丹江口防汛工作作出电话指示",
                importance: 2,
                image: null
            },
            {
                date: "8月26日",
                description: "湖北省革委会上报丹江口升船机规模建议",
                importance: 1,
                image: null
            },
            {
                date: "10月1日",
                description: "丹江口水电站第一台水轮机组开始发电",
                importance: 4,
                image: null
            },
            {
                date: "10月10日",
                description: "国家计委等批复丹江口水利枢纽过坝运输方案",
                importance: 1,
                image: null
            },
            {
                date: "10月11日",
                description: "丹樊一回输电线投产",
                importance: 1,
                image: null
            },
            {
                date: "10月30日",
                description: "水电部军管会等批复同意丹江口枢纽高程130以下部分工程验收",
                importance: 1,
                image: null
            },
            {
                date: "11月27日",
                description: "湖北省革委会批复同意丹江口升船机分期兴建设计方案",
                importance: 1,
                image: null
            },
            {
                date: "12月29日",
                description: "水电部军管会生产指挥部批复丹江口升船设计方案",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1969,
        summary: "丹江口工程配套建设完善",
        importance: 3,
        events: [
            {
                date: "2月22日",
                description: "工程局筹备黄龙滩电站建设",
                importance: 1,
                image: null
            },
            {
                date: "5月1日",
                description: "丹黄线建成，丹江口电站向黄龙滩工地送电",
                importance: 1,
                image: null
            },
            {
                date: "5月4日至23日",
                description: "豫鄂两省确定丹江口水库移民'远迁不如近迁，近迁不如就地后靠自安'原则",
                importance: 2,
                image: null
            },
            {
                date: "5月15日",
                description: "豫鄂两省及长办联合上报国务院，建议将丹江口水库蓄水位提高到155米",
                importance: 3,
                image: null
            },
            {
                date: "5月",
                description: "水电部提出修建三峡建议，毛泽东从战备角度未同意，支持先修葛洲坝",
                importance: 2,
                image: null
            },
            {
                date: "7月1日",
                description: "丹江口水电站用22万伏线路向武汉送电",
                importance: 1,
                image: null
            },
            {
                date: "9月12日",
                description: "丹江口水电站第二号机组发电",
                importance: 1,
                image: null
            },
            {
                date: "12月18日",
                description: "水电部军管会将汉江丹江口工程局改为水电部第十工程局",
                importance: 1,
                image: null
            },
            {
                date: "淅川县",
                description: "兴建一批工厂以工补农",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1970,
        summary: "丹江口大坝一期工程基本完成",
        importance: 4,
        events: [
            {
                date: "4月25日",
                description: "丹江至河南平顶山22万伏高压输电线路建成送电",
                importance: 1,
                image: null
            },
            {
                date: "7月29日",
                description: "丹江口大坝浇筑至162米高程，第一期工程基本完成",
                importance: 4,
                image: null
            },
            {
                date: "8月1日",
                description: "丹江口铝厂投产",
                importance: 1,
                image: null
            },
            {
                date: "8月24日",
                description: "水电部上报国务院，建议丹江口水利枢纽蓄水位1971年汛后提高到155米",
                importance: 2,
                image: null
            },
            {
                date: "9月30日",
                description: "丹江口电石厂建成报产",
                importance: 1,
                image: null
            },
            {
                date: "10月18～20日",
                description: "豫鄂两省商定移民高程157米及相关经费标准",
                importance: 2,
                image: null
            },
            {
                date: "12月",
                description: "第十工程局派出800多干部职工支援南河水库建设",
                importance: 1,
                image: null
            },
            {
                date: "1970年",
                description: "葛洲坝水利枢纽工程开工，毛泽东批示同意",
                importance: 2,
                image: null
            }
        ]
    },
    {
        year: 1971,
        summary: "丹江口工程配套建设完善",
        importance: 3,
        events: [
            {
                date: "5月",
                description: "联合发掘宋湾下王岗古文化遗址",
                importance: 1,
                image: null
            },
            {
                date: "5月",
                description: "武汉军区司令员曾思玉视察丹江口工程",
                importance: 1,
                image: null
            },
            {
                date: "5月6日",
                description: "丹江口水电站第三号机组发电，为我国第一台自制15万瓩大型水轮发电机组",
                importance: 3,
                image: null
            },
            {
                date: "7月7～10日",
                description: "第十工程局召开第一次党代会",
                importance: 1,
                image: null
            },
            {
                date: "7月10日",
                description: "丹南11万伏线路投产",
                importance: 1,
                image: null
            },
            {
                date: "9月26日",
                description: "丹栾11万伏二回线投产",
                importance: 1,
                image: null
            },
            {
                date: "11月",
                description: "淅川旧县城全部被库水淹没",
                importance: 1,
                image: null
            },
            {
                date: "12月",
                description: "第十工程局职工开始调往三三○工地",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1972,
        summary: "丹江口水库设计水位确定",
        importance: 4,
        events: [
            {
                date: "2月2日",
                description: "丹江口水电站第4号机组开始发电",
                importance: 1,
                image: null
            },
            {
                date: "4月7～10日",
                description: "张体学动员丹江口工地支援三三〇工程",
                importance: 1,
                image: null
            },
            {
                date: "4月19日",
                description: "李先念副总理指示同意安装丹江口水电站第六台机组；华国锋同志指示水库要发挥效益",
                importance: 2,
                image: null
            },
            {
                date: "4月16日",
                description: "豫鄂两省上报移民、发电量分配等相关问题",
                importance: 1,
                image: null
            },
            {
                date: "4月28日",
                description: "丹江口铁合金厂第一号炉投产",
                importance: 1,
                image: null
            },
            {
                date: "5月8日",
                description: "国务院批复同意丹江口水库设计水位155米、移民水位157米",
                importance: 4,
                image: null
            },
            {
                date: "7月19日",
                description: "华罗庚来丹江口推广优选法、统筹法",
                importance: 1,
                image: null
            },
            {
                date: "8月1日",
                description: "丹汉二回线正式投产送电",
                importance: 1,
                image: null
            },
            {
                date: "9月25日",
                description: "丹江口水电站第五号机组开始发电",
                importance: 1,
                image: null
            },
            {
                date: "10月2日",
                description: "丹江口---淅川110千伏输变电工程动工",
                importance: 1,
                image: null
            },
            {
                date: "11月8日",
                description: "周恩来总理指示丹江口工程要总结经验",
                importance: 2,
                image: null
            },
            {
                date: "12月1日",
                description: "调整第十工程局领导班子",
                importance: 1,
                image: null
            },
            {
                date: "12月",
                description: "丹樊二回线投产",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1973,
        summary: "丹江口水利枢纽基本建成",
        importance: 4,
        events: [
            {
                date: "4月8日",
                description: "丹郧输电线路投产",
                importance: 1,
                image: null
            },
            {
                date: "6月",
                description: "丹江口水库清泉沟引水工程建成",
                importance: 2,
                image: null
            },
            {
                date: "9月25日",
                description: "丹江口水电站第六号水轮发电机组发电，10月1日正式投产",
                importance: 3,
                image: null
            },
            {
                date: "9月",
                description: "丹江口水利枢纽升船机机电设备安装完毕，10月试运转",
                importance: 1,
                image: null
            },
            {
                date: "10月7日",
                description: "国务院指示丹江口1973年汛末最高水位按157米控制",
                importance: 2,
                image: null
            },
            {
                date: "10月",
                description: "丹淅11万伏线路投产",
                importance: 1,
                image: null
            },
            {
                date: "10月19日",
                description: "丹江口水库坝前水位第一次达到156.75米，大坝安全渡汛",
                importance: 1,
                image: null
            },
            {
                date: "1973年",
                description: "大坝建设完工，坝高162米、蓄水位157米、全长2494米，总投资10.2亿",
                importance: 4,
                image: null
            },
            {
                date: "丹江口水库",
                description: "蓄水至淅川县滔河口",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1974,
        summary: "丹江口工程全面建成，南水北调通道明确",
        importance: 4,
        events: [
            {
                date: "1月18日",
                description: "朱德委员长询问丹江口水库引水华北可行性，明确其为南水北调重要通道",
                importance: 4,
                image: null
            },
            {
                date: "2月24日",
                description: "《人民日报》报道汉江丹江口水利枢纽初期工程胜利建成",
                importance: 4,
                image: null
            },
            {
                date: "3月",
                description: "陶岔引丹电灌站工程动工，次年底试运水成功",
                importance: 2,
                image: null
            },
            {
                date: "6月17日",
                description: "丹汉22万伏线路投产",
                importance: 1,
                image: null
            },
            {
                date: "9月14日",
                description: "《人民日报》报道丹江渠道主体工程建成通水",
                importance: 3,
                image: null
            },
            {
                date: "9月22日",
                description: "丹江口水库超水位蓄水，库区群众受灾，相关部门拨发救济",
                importance: 1,
                image: null
            },
            {
                date: "10月4日",
                description: "丹江口水利枢纽堰顶泄洪量达15800秒立米，部分设施受损后修复",
                importance: 1,
                image: null
            },
            {
                date: "10月21日",
                description: "丹江口水库坝前水位第一次达到157.7米，超正常蓄水位",
                importance: 1,
                image: null
            },
            {
                date: "10月",
                description: "葛洲坝工程复工",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1975,
        summary: "丹江口水库运行管理完善",
        importance: 4,
        events: [
            {
                date: "2月14日",
                description: "国家计委批准丹江口水库正常蓄水位157米，移民高程159米",
                importance: 4,
                image: null
            },
            {
                date: "2月24日",
                description: "湖北省委印发成立湖北省丹江口水电工程管理局的通知",
                importance: 2,
                image: null
            },
            {
                date: "3月8日",
                description: "三三○工程局与第十工程局召开联席会议，明确单位去留等问题",
                importance: 1,
                image: null
            },
            {
                date: "3月13日",
                description: "召开三方联席物质财务会议，协商物资设备转移",
                importance: 1,
                image: null
            },
            {
                date: "4月27日",
                description: "水电部举办丹江口大坝观测会议",
                importance: 1,
                image: null
            },
            {
                date: "8月6日",
                description: "湖北省委批复成立湖北省丹江口水电工程管理局临时党委",
                importance: 1,
                image: null
            },
            {
                date: "8月12日",
                description: "上报丹江口左岸土石坝付坝滑坡处理报告",
                importance: 1,
                image: null
            },
            {
                date: "8月21日",
                description: "第十工程局上报1976年大坝加固处理计划",
                importance: 1,
                image: null
            },
            {
                date: "10月3日",
                description: "丹江口水库最大泄量达20900秒立米，大坝无异常",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1976,
        summary: "南水北调近期工程规划启动",
        importance: 4,
        events: [
            {
                date: "1976年",
                description: "水利部提出《南水北调近期工程规划报告》上报国务院；后续完成东线相关可行性研究及专题研究",
                importance: 4,
                image: null
            }
        ]
    },
    {
        year: 1977,
        summary: "移民安置问题处理",
        importance: 2,
        events: [
            {
                date: "5月9日",
                description: "均县革委会上报移民安置遗留问题请示报告",
                importance: 1,
                image: null
            },
            {
                date: "11月26日",
                description: "均县革委会上报移民迁建遗留问题报告；12月4日，郧阳地区等联合请求解决库区移民安置建设遗留问题",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1978,
        summary: "南水北调正式写入国家规划",
        importance: 5,
        events: [
            {
                date: "1978年",
                description: "五届全国人大一次会议《政府工作报告》正式提出兴建南水北调工程",
                importance: 5,
                image: null
            },
            {
                date: "9月",
                description: "陈云就南水北调问题致信钱正英，建议完善规划方案；10月，水电部发文要求加强南水北调规划工作",
                importance: 4,
                image: null
            },
            {
                date: "12月",
                description: "水电部成立南水北调规划办公室，统筹协调全国南水北调工作",
                importance: 5,
                image: null
            },
            {
                date: "南水北调办公室",
                description: "明确东、中、西线工程责任单位；黄委会重启西线工程勘察，提出3条支流调水方案",
                importance: 4,
                image: null
            },
            {
                date: "国务院",
                description: "审议通过黄河'八七'分水方案",
                importance: 2,
                image: null
            }
        ]
    },
    {
        year: 1979,
        summary: "南水北调规划工作推进",
        importance: 3,
        events: [
            {
                date: "5月8日",
                description: "王任重副总理召集豫、鄂两省及管理局负责人会议，解决水库调度、移民等问题",
                importance: 2,
                image: null
            },
            {
                date: "1979年",
                description: "全国第一次水资源评价工作开始",
                importance: 1,
                image: null
            }
        ]
    },
    {
        year: 1980,
        summary: "邓小平视察丹江口，联合国专家考察",
        importance: 4,
        events: [
            {
                date: "7月22日",
                description: "邓小平同志视察丹江口水利枢纽工程，询问工程效益及大坝二期加高情况",
                importance: 4,
                image: "1980年7月，邓小平同志视察丹江口水利枢纽.jpg"
            },
            {
                date: "10月3日～11月3日",
                description: "联合国专家与我国专家联合考察南水北调中线和东线，认为技术上可行",
                importance: 3,
                image: null
            },
            {
                date: "1980年",
                description: "水利部组织中线工程线路全面查勘，长江委提出规划要点报告及补充报告，制定科研计划",
                importance: 3,
                image: null
            }
        ]
    }
];

// 获取年份的最高重要性事件图片
function getYearMainImage(yearData) {
    const eventsWithImages = yearData.events.filter(event => event.image);
    if (eventsWithImages.length > 0) {
        // 返回重要性最高的事件图片
        const highestImportance = Math.max(...eventsWithImages.map(event => event.importance));
        const mainEvent = eventsWithImages.find(event => event.importance === highestImportance);
        return '照片/' + mainEvent.image;
    }
    return null;
}