package com.lilibozhi.lidada.model.dto.question;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuestionContentDTO {

    /**
     * 题目标题
     */
    private String title;

    /**
     * 题目选项列表
     */
    private List<Option> options;

    /**
     * 题目选项
     */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Option {
        private String result;//如果是测评类，用result来保存答案属性
        private int score;//如果是得分类，用score来设置本题分数
        private String value;//选项内容
        private String key;//选项key
    }
}