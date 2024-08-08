import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

import headerBg from "../../assets/headerBg.jpg";
import {getBestQuestionResult} from "../../utils/bizUtils";

import "./index.scss";
import questions from "../../data/questions.json";
import questionResults from "../../data/question_results.json";
import GlobalFooter from "../../components/GlobalFooter";



/**
 * 测试结果页面
 */
export default () => {
  const answerList=Taro.getStorageSync("answerList");
  if(!answerList||answerList.length<1){
    Taro.showToast({
      title:"答案为空",
      icon:"error",
      duration:3000,
    });
  }
  //获取测试结果
  const result =getBestQuestionResult(answerList,questions,questionResults);

  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h2 subTitle">{result.resultDesc}</View>
      <AtButton type="primary" circle className="enterBtn" onClick={()=>{
        Taro.redirectTo({
          url: '/pages/index/index',
        })
      }}
      >
        返回主页
      </AtButton>
      <Image src={headerBg} className="headerBg" />
      <GlobalFooter />
    </View>
  );
};
