const joinusText = {
  INTRODUCTION: {
    EN: ['DeepMotion is a high-tech company co-founded by AI experts from Microsoft Research. We are building a full stack map-centered solution for the next generation self-driving cars. Our unique team combines experts from Deep Learning, SLAM, and Stereo Vision. Our solution equips the future vehicles with brand new multiview ADAS functionalities, reinforcement learning based motion planning systems, and of course, our next generation HD maps. ', 'Join us to create the future of autonomous driving!'],
    ZH: ['深动科技（DeepMotion）成立于2017年7月，正在研发下一代立体视觉ADAS设备，及下一代服务于自动驾驶的视觉众包高精地图，以解决现有解决方案构建成本极高，无法及时更新等关键问题。', '其创始团队来自微软研究院，拥有十余年一线产品研发经验，在SLAM、立体视觉和深度学习领域深耕多年。团队成员曾为Hololens、必应图片搜索、三维扫描和3D打印等微软重量级产品提供核心算法，并在顶级国际顶级会议、期刊上发表论文百余篇，拥有数十项国际专利。']
  },
  LABEL: {
    SEEMORE: {
      EN: 'See More',
      ZH: '全部职位'
    },
    HIRETITLE: {
      EN: 'OPEN POSITIONS',
      ZH: '在招职位'
    },
    RESPONSIBILITY: {
      EN: 'Job Responsibilities:',
      ZH: '职位职责：'
    },
    REQUIREMENT: {
      EN: 'Job Requirements:',
      ZH: '任职要求：'
    },
    REQUIREMENTBB: {
      EN: 'Job Requirements (Proficiency in at least one of the following):',
      ZH: '任职要求（至少精通其中一项）：'
    },
    SEND: {
      EN: 'Send your resume to us',
      ZH: '简历发送至'
    }
  },
  POSITIONS: [
    {
      TITLE: {
        EN: 'Deep Learning Researcher / Engineer',
        ZH: '深度学习研发工程师'
      },
      DESC: {
        EN: ['Develop visual understanding algorithms for autonomous driving;', 'Model compression for real-time applications.'],
        ZH: ['研发无人驾驶中的视觉理解算法；', '研发深度学习模型小型实时化算法']
      },
      REQUIREMENT: {
        EN: ['Experience on fundamental computer vision tasks (e.g., image classification, semantic segmentation, object detection, object tracking etc).', 'Solid knowledge on machine learning and deep learning.', 'Hands on experience with at least one deep learning framework.'],
        ZH: ['熟悉计算机视觉常用图像理解方法（如图像分类、分割，物体检测、跟踪等）', '熟悉机器学习、深度学习原理和常用模型', '至少熟练使用一种深度学习框架，有实战经验者优先']
      }
    },
    {
      TITLE: {
        EN: 'SLAM / HD Maps Engineers',
        ZH: 'SLAM / 高精地图研发工程师'
      },
      DESC: {
        EN: ['Develop crowd-sourcing based HD map for autonomous driving, including the construction, indexing and update of the HD maps; ', 'Develop multi-sensor based 3D localization technology.'],
        ZH: ['研发无人驾驶中众包高精地图的构建、索引、更新技术', '研发基于多传感器融合的三维定位技术']
      },
      REQUIREMENT: {
        EN: ['Familiarity with state-of-the-art SLAM algorithms.', 'Familiarity with Kalman filtering and its variants.', 'Familiarity with signal processing of sensors like Lidar, IMU, and GPS.', 'Experience with C/C++ development. Experience with ROS preferred.', 'Background of stereo vision preferred.'],
        ZH: ['熟悉立体视觉的基础理论', '熟悉各种经典的SLAM算法', '熟悉卡尔曼滤波相关的各种算法', '熟悉激光雷达、惯导、轮速计、GPS等传感器信号的处理', '熟悉C/C++开发，有ROS经验者优先']
      }
    },
    {
      TITLE: {
        EN: 'Senior Camera Hardware Supervisor',
        ZH: '高级相机硬件工程师'
      },
      DESC: {
        EN: ['Supervise high-level camera system design; ', 'Implement image processing algorithms on FPGA using Verilog; ', 'Design software/firmware of USB/Ethernet modules; ', 'Communicate with vendors, supervise product manufacturing process.'],
        ZH: ['负责相机传感器模块的研发', '负责相机模块总体设计', '负责用Verilog在FPGA上实现图像处理算法；', '负责硬件模块与上位机通讯设计；', '负责与外包商沟通实现试验品生产']
      },
      REQUIREMENT: {
        EN: ['Familiarity with camera and optical system design. Experiences on multiple camera systems preferred.', 'Familiarity with camera interfaces, such as LVDS, USB, MIPI and CSI.', 'Experience on synchronization among multiple sensors, such as lidars and cameras.', 'Experience on Verilog programming.', '2+ years experience on C programming and firmware development.'],
        ZH: ['熟悉相机、光学成像产品研发，有多目相机研发经验者优先', '熟悉常用接口，例如LVDS，USB，CSI等', '有多相机、多设备同步经验', '熟悉Verilog编程', '有一定C语言固件开发基础']
      }
    },
    {
      TITLE: {
        EN: 'Back-end / Full-Stack Software Engineer',
        ZH: '后端开发工程师 / 全栈工程师'
      },
      DESC: {
        EN: ['Develop DeepMotion\'s data labeling, storage and task scheduling platform;', ' Develop internal visualization and debugging tools and services.'],
        ZH: ['开发公司后端数据标注、存储、处理平台', '开发高精地图算法调试工具、数据可视化工具']
      },
      REQUIREMENT: {
        EN: ['Proficiency in at least one of the following: Python, Ruby or Node.js.', 'Familiarity with RESTful service. Proficiency in at least one web frameworks: Django, Flask, Rails.', 'Familiarity with Mysql, Redis or Mongodb.', 'Must be a fast learner.'],
        ZH: ['精通Python, Ruby或Node.js', '熟悉RESTful框架，精通至少一种web开发框架，如Django, Flask, Rails', '熟悉Mysql, Redis, 或Mongodb', '拥有强大的快速学习能力']
      }
    }
  ]
}

export default joinusText
