
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Check, Clock, BookOpen, AlertCircle } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Mock questions data
  const questions = [
    {
      id: 1,
      question: "下列关于动脉血气分析的叙述，错误的是",
      options: [
        { id: "A", text: "动脉血气分析可检测呼吸功能" },
        { id: "B", text: "动脉血PH正常值为7.35～7.45" },
        { id: "C", text: "PaO2低于60mmHg为呼吸衰竭的诊断标准之一" },
        { id: "D", text: "动脉血采集不需要肝素抗凝" },
      ],
      answer: "D",
      explanation: "动脉血气分析需要使用肝素抗凝，以防止血液凝固影响检测结果。其他选项都是正确的叙述。",
    },
    {
      id: 2,
      question: "关于脉搏的描述，正确的是",
      options: [
        { id: "A", text: "正常成人安静状态下的脉率为60～100次/分" },
        { id: "B", text: "脉搏快而有力提示休克" },
        { id: "C", text: "年龄越小，脉搏越慢" },
        { id: "D", text: "测量脉搏时应用食指和中指" },
      ],
      answer: "A",
      explanation: "正常成人安静状态下的脉率为60～100次/分是正确的。脉搏快而有力通常提示发热或甲亢，而非休克；年龄越小，脉搏越快；测量脉搏应使用食指、中指和无名指。",
    },
    // 更多问题可以添加在这里
  ];

  const handleSelectAnswer = (answerId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerId
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-8">
        <div className="container">
          <Tabs defaultValue="practice" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="practice">练习模式</TabsTrigger>
              <TabsTrigger value="exam">考试模式</TabsTrigger>
              <TabsTrigger value="wrong">错题本</TabsTrigger>
            </TabsList>
            
            <TabsContent value="practice" className="w-full">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">练习模式</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>不限时间</span>
                      </div>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <div className="flex justify-between text-sm mt-1">
                      <span>题目 {currentQuestion + 1}/{questions.length}</span>
                      <span className="text-muted-foreground">基础护理学</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="text-lg font-medium">
                        {questions[currentQuestion].question}
                      </div>
                      
                      <RadioGroup 
                        value={selectedAnswers[currentQuestion]} 
                        onValueChange={handleSelectAnswer}
                        className="space-y-3"
                      >
                        {questions[currentQuestion].options.map((option) => (
                          <div key={option.id} className="flex items-start space-x-2">
                            <RadioGroupItem 
                              value={option.id} 
                              id={`option-${option.id}`}
                              className="mt-1"
                            />
                            <Label 
                              htmlFor={`option-${option.id}`}
                              className={`flex-1 ${
                                showExplanation && option.id === questions[currentQuestion].answer
                                  ? "text-green-600 font-medium"
                                  : ""
                              }`}
                            >
                              {option.id}. {option.text}
                              {showExplanation && option.id === questions[currentQuestion].answer && (
                                <Check className="inline-block ml-1 h-4 w-4 text-green-600" />
                              )}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    {showExplanation && (
                      <div className="bg-muted p-4 rounded-md">
                        <h4 className="font-medium mb-2 flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          解析
                        </h4>
                        <p className="text-muted-foreground">
                          {questions[currentQuestion].explanation}
                        </p>
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="flex flex-col sm:flex-row justify-between gap-2">
                    <div className="flex gap-2 order-2 sm:order-1">
                      <Button 
                        variant="outline" 
                        onClick={handlePrevQuestion}
                        disabled={currentQuestion === 0}
                      >
                        上一题
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleNextQuestion}
                        disabled={currentQuestion === questions.length - 1}
                      >
                        下一题
                      </Button>
                    </div>
                    
                    <div className="order-1 sm:order-2 w-full sm:w-auto">
                      <Button 
                        onClick={() => setShowExplanation(!showExplanation)}
                        disabled={!selectedAnswers[currentQuestion]}
                        className="w-full sm:w-auto"
                      >
                        {showExplanation ? "隐藏解析" : "查看解析"}
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">学习提示</h3>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <AlertCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">学习要点</h4>
                          <p className="text-sm text-muted-foreground">
                            动脉血气分析是临床常用的检查方法，它可以反映人体肺通气功能、血液酸碱平衡和氧合状态。
                            掌握动脉血采集方法、正常值范围以及临床意义是护理工作的重要内容。
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="exam">
              <div className="max-w-3xl mx-auto text-center p-12">
                <h3 className="text-2xl font-bold mb-6">模拟考试模式</h3>
                <p className="text-muted-foreground mb-8">
                  在真实的考试环境中测试自己，限时作答，考试结束后查看成绩和解析
                </p>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="flex justify-center">
                        <div className="bg-primary/10 h-20 w-20 rounded-full flex items-center justify-center">
                          <Clock className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">准备好挑战了吗？</h4>
                        <p className="text-muted-foreground">
                          本次模拟考试包含100道试题，限时120分钟，满分100分，及格线为60分
                        </p>
                      </div>
                      <Button size="lg">
                        开始模拟考试
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="wrong">
              <div className="max-w-3xl mx-auto text-center p-12">
                <h3 className="text-2xl font-bold mb-6">错题本</h3>
                <p className="text-muted-foreground mb-8">
                  记录您练习和考试中的错题，方便复习和针对性学习
                </p>
                <Card>
                  <CardContent className="pt-6">
                    <div className="h-40 flex items-center justify-center">
                      <p className="text-muted-foreground">
                        您尚未添加任何错题，开始练习或考试后，系统将自动记录您的错题
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Questions;
