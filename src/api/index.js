import ajax from './ajax'

//首页
export const reqHome = ()=>ajax('/homedata')
//识物
export const reqShiwu = ()=>ajax('/topicdata')
//类别
export const reqCategory = () =>ajax('/navdata')
