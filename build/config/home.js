import PRESS from './press'
const text = {
  WEBSITE: {
    LOGO: {
      EN: 'DeepMotion',
      ZH: 'DeepMotion'
    },
    SLOGAN: {
      EN: 'Crowdsourcing the next-generation HD maps for safe autonomy. Localization & Mapping at 10cm accuracy.',
      ZH: '为下一代自动驾驶提供视觉为主的众包高精地图方案。10厘米级别的精度和定位服务。'
    }
  },

  // 顶部导航
  NAVIGATIONS: [{
    LABEL: {
      EN: 'HOME',
      ZH: '首页'
    },
    ROUTE: 'home'
  },
  // {
  //   LABEL: {
  //     EN: 'PRESS',
  //     ZH: '媒体动向'
  //   },
  //   ROUTE: 'press'
  // },
  {
    LABEL: {
      EN: 'CAREER',
      ZH: '加入我们'
    },
    ROUTE: 'career'
  }],

  // 首页头图，默认IMAGE，可选配置VIDEO
  BANNER: {
    TYPE: 'IMAGE',
    VIDEO: '',
    IMAGE: {
      SRC: './resource/banner/banner-index.jpg',
      ALT: {
        EN: '',
        ZH: ''
      }
    }
  },

  // 产品优势
  ADVANTAGE: [{
    TITLE: {
      EN: 'High Precision',
      ZH: '高精度'
    },
    DESCRIPTION: {
      EN: ['A 3D semantic map that is not only accurate, but also helps vehicles localize.', 'Localization and mapping both at 10cm accuracy.'],
      ZH: ['3D语义地图，既准确又能为车辆精确定位', '地图自身精度和定位能力都达到10厘米级别']
    }
  }, {
    TITLE: {
      EN: 'Low Cost',
      ZH: '低成本'
    },
    DESCRIPTION: {
      EN: ['Data from cameras and consumer-level sensors, does not need expensive ladars.', 'Fully automated production pipeline, no labor-intensive labeling.'],
      ZH: ['无需昂贵的雷达，仅需摄像头和普通传感器的数据', '无需劳动密集的标注，全自动生产流水线']
    }
  }, {
    TITLE: {
      EN: 'Portable',
      ZH: '轻量数据'
    },
    DESCRIPTION: {
      EN: ['Lightweight map size, 20KB/km', 'Fully vectorized maps in 3D, fits in local storage.'],
      ZH: ['20kb每公里的轻量地图', '全矢量化便于本地存储']
    }
  }, {
    TITLE: {
      EN: 'Real-time',
      ZH: '实时'
    },
    DESCRIPTION: {
      EN: ['Real-time 5G uploads of locally preprocessed sensor data.', 'Low cost sensors enable crowdsource deployment at massive scale.'],
      ZH: ['5G实时上传本地预处理传感器数据', '低成本传感器使众包能规模化']
    }
  }],

  // 我们产品
  PRODUCTS: {
    LABEL: {
      MODULETITLE: {
        EN: 'Products',
        ZH: '我们的产品'
      }
    },
    ITEMS: [{
      TITLE: {
        EN: 'DeepMotion Client: A sensor that sees miles ahead',
        ZH: 'DM-100：视觉感知遥遥领先的传感器'
      },
      DESCRIPTION: {
        EN: 'The DeepMotion sensor DM-100 is an intelligent ADAS device made of consumer-level stereo cameras, GPS and IMU modules. It not only provides state-of-the-arts ADAS functions such as Lane Departure Warning, Pedestrian Detection, Collision Warning, but also performs localization at 10cm accuracy without replying on RTK. Equipped with our pre-installed HD maps, DM-100 is able to perform environment sensing tasks with less computing power, localize itself in GPS-denied environment, collect trajectories of road agents, and report map changes in real-time.',
        ZH: 'DM-100是由消费级立体相机，GPS和IMU模块组成的只能ADAS设备。它不仅提供最先进的ADAS功能，如车道偏离警告，行人侦测，碰撞预警，还可以以10厘米的精度执行定位，而无需恢复RTK。预存了本地的高清地图，DM-100可以以较少的计算对环境进行感测，在无GPS的环境中定位，收集道路的信息，并实时报告地图变化。'
      },
      LABELS: {
        EN: 'Consumer-level | Most advanced ADAS | Real-time',
        ZH: '消费级立体相机 ｜ 最先进的ADAS ｜ 10厘米精度 ｜ 实时'
      },
      IMAGE: '/config/resource/products/product1.png'
    }, {
      TITLE: {
        EN: 'DeepMotion Cloud: An AI that fuses billion miles of data.',
        ZH: 'DeepMotion Cloud：融合数十亿里道路数据的人工智能'
      },
      DESCRIPTION: {
        EN: 'The DeepMotion cloud receives and fuses billions of observations from our crowdsourced DM-100s into a consistent 3D semantic maps. Our AI replaces the traditional labor-intensive maps production pipeline by itself, which produces the maps at much higher accuracy, much faster speed and much lower cost.',
        ZH: 'DeepMotion Cloud接收并融合来自我们众包DM-100的数十亿观测值，成一个一致的3D语义地图。我们的人工智能取代了传统的劳动密集型地图人工标注流水线，它以更高的精度、更快的速度和更低的成本生成地图。'
      },
      LABELS: {
        EN: '3D semantic maps | 10cm Accuracy | Crowdsourced',
        ZH: '十亿级别观测值 ｜ 3D语义地图 ｜ 众包'
      },
      IMAGE: '/config/resource/products/product2.png'
    }]
  },

  // 我们团队
  TEAM: {
    LABEL: {
      MODULETITLE: {
        EN: 'OUR TEAM',
        ZH: '我们的团队'
      },
      ALLPAPERS: {
        EN: 'Publications',
        ZH: '所有论文'
      },
      JOINUS: {
        EN: 'Join us',
        ZH: '加入我们'
      },
      YEARS: {
        EN: 'Years',
        ZH: '从业年'
      },
      PATENT: {
        EN: 'Patents',
        ZH: '国际专利'
      },
      PAPER: {
        EN: 'Papers',
        ZH: '论文'
      }
    },
    MEMBERS: [{
      NAME: {
        EN: 'Zhiwei Li',
        ZH: '李志伟'
      },
      TITLE: {
        EN: 'Co-founder & CTO',
        ZH: '联合创始人 ／ CEO'
      },
      QUALIFICATIONS: {
        YEARS: 10,
        PATENT: 20,
        PAPER: 50
      },
      INTRODUCTION: {
        EN: 'Lead researcher from Microsoft Research. Developed 6DoF tracking and 3D surface reconstruction algorithms for Microsoft Hololens.',
        ZH: '来自微软研究院的首席研究员，在SLAM、立体视觉和深度学习领域深耕多年，为Hololens提供3D表面重建算法。'
      },
      PAPERLINK: 'https://scholar.google.com.sg/citations?user=iL8SeoEAAAAJ&hl=en&oi=ao'
    }, {
      NAME: {
        EN: 'Rui Cai',
        ZH: '蔡锐'
      },
      TITLE: {
        EN: 'Co-founder & CEO',
        ZH: '联合创始人 ／ CEO'
      },
      QUALIFICATIONS: {
        YEARS: 10,
        PATENT: 20,
        PAPER: 50
      },
      INTRODUCTION: {
        EN: 'Lead researcher from Microsoft Research. Developed core algorithms for Microsoft Hololens, Bing, and 3D Builder.',
        ZH: '来自微软研究院的首席研究员，曾为Hololens、Bing图片搜索，3D打印等微软重量级产品提供核心算法。'
      },
      PAPERLINK: 'https://scholar.google.com.sg/citations?user=6WCyi64AAAAJ&hl=en'
    }, {
      NAME: {
        EN: 'Kuiyuan Yang',
        ZH: '杨奎元'
      },
      TITLE: {
        EN: 'Co-founder & Chief Scientist',
        ZH: '联合创始人 ／ 首席科学家'
      },
      QUALIFICATIONS: {
        YEARS: 10,
        PATENT: 5,
        PAPER: 30
      },
      INTRODUCTION: {
        EN: 'Researcher from Microsoft Research. Expert on deep learning and computer vision. BS and PhD from USTC.',
        ZH: '来自微软研究院的研究员，深度学习和计算机视觉方向的专家。'
      },
      PAPERLINK: 'https://sites.google.com/site/kuiyuanyang/'
    }, {
      NAME: {
        EN: 'Chi Zhang',
        ZH: '张驰'
      },
      TITLE: {
        EN: 'Co-founder & R&D Director',
        ZH: '联合创始人 ／ CEO'
      },
      QUALIFICATIONS: {
        YEARS: 10,
        PATENT: 20,
        PAPER: 50
      },
      INTRODUCTION: {
        EN: 'Published papers on CVPR/ ICCV/ ECCV/ TVCG. Expert on stereo vision. Ranked 1st at Middlebury stereo 3.0 two times.',
        ZH: '来自微软研究院的首席研究员，Hololens的3D表面重建算法，BS from PKU， PhD from SJTU.'
      },
      PAPERLINK: 'http://chizhang.me/'
    }]
  },

  // 媒体动向
  PRESS: PRESS,

  // 表单
  FORM: {
    SENDTOEMAIL: '',
    LABEL: {
      NAME: {
        EN: 'Name',
        ZH: '姓名'
      },
      TEL: {
        EN: 'Phone',
        ZH: '手机'
      },
      EMAIL: {
        EN: 'Email',
        ZH: '邮箱'
      },
      INDIVIDULE: {
        EN: 'Personal',
        ZH: '个人'
      },
      COOPERATION: {
        EN: 'Cooperation',
        ZH: '合作'
      },
      FORJOB: {
        EN: 'Jobjs',
        ZH: '求职'
      },
      COMMENTS: {
        EN: 'Comments',
        ZH: '备注'
      },
      SENDBUTTON: {
        EN: 'SEND',
        ZH: '发送'
      }
    }
  },

  BOTTOM: {
    WECHAT: {
      EN: 'WeChat Subscription',
      ZH: '微信公众号'
    },
    TEL: '400-1932-1245',
    EMAIL: 'career@deepmotion.ai',
    ADDRESS: {
      EN: 'YinGu Dasha, Haidian District, Beijing City, China.',
      ZH: '北京市海淀区五道口银谷大厦'
    },
    COMPANY: {
      EN: 'Deep Motion',
      ZH: '深动科技公司'
    },
    COPYRIGHT: ''
  }
}

export default text
