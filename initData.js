/**
 * Created by hekk on 2017/4/26.
 */

const User = [{
  name: '庄洪宇',
  account: 'zhuanghongyu',
  password: '123456'

}, {
  name: '耿炎',
  account: 'gengyan',
  password: '123456'

}, {
  name: '何坦宏',
  account: 'hetanhong'

}];
const MainTitle = [{
  create_by: 'zhuanghongyu',
  content: '客户第一'
}, {
  create_by: 'zhuanghongyu',
  content: ' 团队合作'
}, {
  create_by: 'zhuanghongyu',
  content: '积极主动'
}, {
  create_by: 'zhuanghongyu',
  content: '结果导向'
}, {
  create_by: 'zhuanghongyu',
  content: '拥抱变化'
}, {
  create_by: 'zhuanghongyu',
  content: '敬业负责'
}];

const SubTitle = [{
  parent_id: 1,
  create_by: 'zhuanghongyu',
  content: '尊重客户：能够做到随时随地微笑面对客户'
}, {
  parent_id: 1,
  create_by: 'zhuanghongyu',
  content: '及时响应：能够第一时间响应，主动反馈进度，承诺解决时限'
}, {
  parent_id: 1,
  create_by: 'zhuanghongyu',
  content: '解决问题：执行首问负责制，积极站在客户角度上思考问题，绝大多数情况下能快速、彻底地解决问题'
}, {
  parent_id: 1,
  create_by: 'zhuanghongyu',
  content: '服务超前：能够做到服务超前，主动防患于未然'
}, {
  parent_id: 1,
  create_by: 'zhuanghongyu',
  content: '服务超前：能够做到服务超前，主动防患于未然'
}

  , {
    parent_id: 2,
    create_by: 'zhuanghongyu',
    content: '融入团队：充分融入团队，不将个人喜好带入工作，配合团队完成工作'
  }, {
    parent_id: 2,
    create_by: 'zhuanghongyu',
    content: '团队意识：决策前发表建设性意见、充分参与团队讨论；决策后无论个人是否有异议都能从言行上完全予以支持'
  }, {
    parent_id: 2,
    create_by: 'zhuanghongyu',
    content: '主动合作：积极主动分享业务知识和经验，主动给予同事必要的帮助，善于利用团队的力量解决问题和困难'
  }, {
    parent_id: 2,
    create_by: 'zhuanghongyu',
    content: '影响团队：有主人翁意识，积极正向的影响团队，主动改善团队士气和氛围'
  }, {
    parent_id: 2,
    create_by: 'zhuanghongyu',
    content: '奉献精神：为实现团队目标、团队利益，关键时刻能够不计较个人得失'
  },


  {
    parent_id: 3,
    create_by: 'zhuanghongyu',
    content: '积极面对：积极面对任务、问题或责任，不回避、不拖延'
  }, {
    parent_id: 3,
    create_by: 'zhuanghongyu',
    content: '主动解决：正面看待问题与错误，积极寻找或提供解决方案'
  }, {
    parent_id: 3,
    create_by: 'zhuanghongyu',
    content: '主动发现：主动发现问题，推动问题最终解决，形成改进方案'
  }, {
    parent_id: 3,
    create_by: 'zhuanghongyu',
    content: '建立预防机制：积极预防问题的发生，主动建立预防机制'
  }, {
    parent_id: 3,
    create_by: 'zhuanghongyu',
    content: '传递正能量：永远保持探索解决方案的态度，时刻传递正能量，建设积极的团队氛围'
  }


  , {
    parent_id: 4,
    create_by: 'zhuanghongyu',
    content: '目标感：目标明确，以结果达成为前提思考并开展工作'
  }, {
    parent_id: 4,
    create_by: 'zhuanghongyu',
    content: '快速行动：聚焦目标，快速行动，不做无价值动作'
  }, {
    parent_id: 4,
    create_by: 'zhuanghongyu',
    content: '快速行动：聚焦目标，快速行动，不做无价值动作'
  }, {
    parent_id: 4,
    create_by: 'zhuanghongyu',
    content: '承担结果：面对结果敢于担责，不为失败找借口，积极寻找解决方案'
  }, {
    parent_id: 4,
    create_by: 'zhuanghongyu',
    content: '不断改进：不断审视自己的工作绩效，寻求并实施绩效改进方法并创造出更大价值'
  }, {
    parent_id: 5,
    create_by: 'zhuanghongyu',
    content: '不抱怨变化：适应公司的日常变化，不抱怨'
  }, {
    parent_id: 5,
    create_by: 'zhuanghongyu',
    content: '主动适应变化：理性面对公司的日常变化，充分沟通、诚意配合'
  }, {
    parent_id: 5,
    create_by: 'zhuanghongyu',
    content: '正面影响他人：对变化产生的困难和挫折，不但能自我调整，还能正面影响和带动身边同事'
  }, {
    parent_id: 5,
    create_by: 'zhuanghongyu',
    content: '优化能力：在工作中有前瞻意识，不墨守成规，建立新方法、新思路'
  }, {
    parent_id: 5,
    create_by: 'zhuanghongyu',
    content: '变革能力：主动创造变化，并能带来绩效的突破性提高'
  }, {
    parent_id: 6,
    create_by: 'zhuanghongyu',
    content: '尽职尽责：清晰了解岗位要求，工作尽职尽责、脚踏实地'
  }, {
    parent_id: 6,
    create_by: 'zhuanghongyu',
    content: '履行承诺：言行一致，切实履行自己所做出的工作承诺'
  }, {
    parent_id: 6,
    create_by: 'zhuanghongyu',
    content: '承担责任：勇于承担工作责任，不推卸责任，把解决问题作为首要任务'
  }, {
    parent_id: 6,
    create_by: 'zhuanghongyu',
    content: '精益求精：有进取意识，在工作中不断树立高的标准，能够做到精益求精'
  }, {
    parent_id: 6,
    create_by: 'zhuanghongyu',
    content: '使命感：把工作当成是自己的事业来做，对待工作有强烈的使命感'
  }];
const  Question=[


];
module.exports = {
  User,
  MainTitle,
  SubTitle
};