import PRESS from './press'
const text = {
  WEBSITE: {
    LOGO: {
      EN: 'DeepMotion',
      ZH: 'DeepMotion'
    },
    SLOGAN: {
      EN: 'Crowdsourcing HD maps for safe autonomy. Localization & Mapping at 10cm accuracy.',
      ZH: '为自动驾驶提供众包高精地图解决方案。10厘米级别三维语义地图及定位。'
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
      ZH: ['3D高精度语义地图，精度达厘米级别', '含辅助定位信息， 车辆定位能力达10厘米级']
    }
  }, {
    TITLE: {
      EN: 'Low Cost',
      ZH: '低成本'
    },
    DESCRIPTION: {
      EN: ['Data from cameras and consumer-level sensors, does not need expensive ladars.', 'Fully automated production pipeline, no labor-intensive labeling.'],
      ZH: ['无需昂贵雷达和GNSS，仅需一套DM-100智能传感器', '无需劳动密集型标注，全自动生产流水线']
    }
  }, {
    TITLE: {
      EN: 'Portable',
      ZH: '轻量数据'
    },
    DESCRIPTION: {
      EN: ['Lightweight map size, 20KB/km', 'Fully vectorized maps in 3D, fits in local storage.'],
      ZH: ['30KB每公里的轻量地图', '全矢量化，便于本地存储以及实时更新']
    }
  }, {
    TITLE: {
      EN: 'Crowdsourced',
      ZH: '众包化'
    },
    DESCRIPTION: {
      EN: ['Real-time 5G uploads of locally preprocessed sensor data.', 'Low cost sensors enable crowdsource deployment at massive scale.'],
      ZH: ['4G实时上传DM-100预处理数据，平均30KB/公里', '低成本传感器规模化众包']
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
        ZH: 'DeepMotion客户端：你所拥有的不仅仅是ADAS'
      },
      DESCRIPTION: {
        EN: 'The DeepMotion sensor DM-100 is an intelligent ADAS device made of consumer-level stereo cameras, GPS and IMU modules. It not only provides state-of-the-arts ADAS functions such as Lane Departure Warning, Pedestrian Detection, Collision Warning, but also performs localization at 10cm accuracy without replying on RTK. Equipped with our pre-installed HD maps, DM-100 is able to perform environment sensing tasks with less computing power, localize itself in GPS-denied environment, collect trajectories of road agents, and report map changes in real-time.',
        ZH: 'DeepMotion车载传感器DM-100通过精心设计的算法将一套低成本的多目相机和GPS惯导模组融合在一起，不仅提供了高可靠的 车规级的ADAS功能，例如车道线保持，行人检测，碰撞报警等等，还可提供高精度的车辆定位能力。尤其是当车辆预装了我们的高精度地图后，DM-100可以在不依赖任何RTK等高成本技术的条件下，实现全场景10cm精度定位。此功能对于GPS信号遮挡的区域尤其重要，为Level4及以上驾驶场景提供必备保障。在提供ADAS和定位服务的同时，本设备还为新地图生成以及地图更新提供支持，是我们众包地图方案中的重要一环。'
      },
      LABELS: {
        EN: 'Consumer-level | Most advanced ADAS | Real-time',
        ZH: '低成本 | 车规级ADAS功能 | 全场景10厘米定位| 地图制作与更新'
      },
      IMAGE: '/config/resource/products/product1.png'
    }, {
      TITLE: {
        EN: 'DeepMotion Cloud: An AI that fuses billion miles of data.',
        ZH: 'DeepMotion云端：一个融合亿万公里数据的地图整合引擎'
      },
      DESCRIPTION: {
        EN: 'The DeepMotion cloud receives and fuses billions of observations from our crowdsourced DM-100s into a consistent 3D semantic maps. Our AI replaces the traditional labor-intensive maps production pipeline by itself, which produces the maps at much higher accuracy, much faster speed and much lower cost.',
        ZH: 'DeepMotion云端引擎通过处理由装配DM-100设备的车辆采集的海量道路数据，优化出一套实时、高一致性、高精度的地图。每台DM-100设备上传到云端的数据控制在每公里平均30K。我们通过用AI算法取代传统地图制作中的大量人工劳动，实现了一套高度自动化的地图生产系统。从而在加快地图生产速度，降低生产成本的同时，获得了更高精度的地图。目前，我们系统的自动化程度接近100%。'
      },
      LABELS: {
        EN: '3D semantic maps | 10cm Accuracy | Crowdsourced',
        ZH: '3D语义地图 | 众包 | 高度自动化'
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
        EN: 'Join Us',
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
        ZH: '联合创始人 / CTO'
      },
      QUALIFICATIONS: {
        YEARS: 10,
        PATENT: 20,
        PAPER: 50
      },
      INTRODUCTION: {
        EN: ['Lead researcher from Microsoft Research.', 'Published 50+ papers, holding 20+ US/International patents.', 'Developed 6DoF tracking and 3D surface reconstruction algorithms for Microsoft Hololens.'],
        ZH: ['微软研究院主管研究员', '发表50+国际论文，拥有20+国际专利', 'SLAM、三维视觉专家，为Hololens 6-DoF跟踪及表面重建提供核心算法。']
      },
      PAPERLINK: 'https://scholar.google.com.sg/citations?user=iL8SeoEAAAAJ&hl=en&oi=ao'
    }, {
      NAME: {
        EN: 'Rui Cai',
        ZH: '蔡锐'
      },
      TITLE: {
        EN: 'Co-founder & CEO',
        ZH: '联合创始人 / CEO'
      },
      QUALIFICATIONS: {
        YEARS: 10,
        PATENT: 20,
        PAPER: 50
      },
      INTRODUCTION: {
        EN: ['Lead researcher from Microsoft Research.', 'Published 50+ papers, holding 20+ US/International patents.', 'Developed core algorithms for Microsoft Hololens, Bing, and 3D Builder.  '],
        ZH: ['微软研究院主管研究员', '发表50+国际论文，拥有20+国际专利', 'SLAM、三维视觉专家，为Hololens、Bing图片搜索，3D打印等微软重量级产品提供核心算法。']
      },
      PAPERLINK: 'https://scholar.google.com.sg/citations?user=6WCyi64AAAAJ&hl=en'
    }, {
      NAME: {
        EN: 'Kuiyuan Yang',
        ZH: '杨奎元'
      },
      TITLE: {
        EN: 'Co-founder & Chief Scientist',
        ZH: '联合创始人 / 首席科学家'
      },
      QUALIFICATIONS: {
        YEARS: 10,
        PATENT: 5,
        PAPER: 30
      },
      INTRODUCTION: {
        EN: ['Researcher from Microsoft Research. ', 'Published 30+ papers, holding 5 US/International patents. ', 'Expert on deep learning and computer vision.', 'Provides core algorithms for Microsoft Xiaoice and Microsoft Conigtive Service.'],
	   	ZH: ['微软研究院研究员', '发表30+国际论文，拥有5项国际专利', '深度学习和计算机视觉专家', '为微软小冰、微软视觉认知服务提供核心算法。']
      },
      PAPERLINK: 'https://sites.google.com/site/kuiyuanyang/'
    }, {
      NAME: {
        EN: 'Chi Zhang',
        ZH: '张弛'
      },
      TITLE: {
        EN: 'Co-founder & R&D Director',
        ZH: '联合创始人 / 研发总监'
      },
      QUALIFICATIONS: {
        YEARS: 6,
        PAPER: 6
      },
      INTRODUCTION: {
        EN: ['Joint PhD from Sun Yat-Sen University and Microsoft Research.', 'Published papers on CVPR/ICCV/ECCV/TVCG.', 'Expert on stereo vision. Ranked 1st at Middlebury stereo 3.0 two times. '],
        ZH: ['中山大学微软研究院联合培养博士', '在顶级国际会议期刊CVPR/ICCV/ECCV/TVCG上发表论文', '双目立体视觉专家，两次在Middlebury Stereo排名第一。']
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
        EN: 'Jobs',
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
      EN: 'Contact Us',
      ZH: '联系方式'
    },
    TEL: '400-1932-1245',
    EMAIL: 'career@deepmotion.ai',
    ADDRESS: {
      EN: '9F Yingu Plaza, Beijing, China.',
      ZH: '北京市海淀区五道口银谷大厦'
    },
    COMPANY: {
      EN: 'DeepMotion',
      ZH: '深动科技'
    },
    COPYRIGHT: ''
  }
}

export default text
