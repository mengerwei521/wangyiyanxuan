import Mock from 'mockjs'
import HomeData from './datahome.json'
import TopicData from './datatopic.json'
import NavData from './datanav.json'

//首页
Mock.mock('/homedata', {
  code: 0,
  data: HomeData
})
//识物
Mock.mock('/topicdata', {
  code: 0,
  data: TopicData
})
//分类
Mock.mock('/navdata', {
  code: 0,
  data: NavData.categoryL1List
})
