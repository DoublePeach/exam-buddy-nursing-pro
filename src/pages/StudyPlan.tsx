
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarClock, BookOpen, CheckCircle, Clock } from 'lucide-react';

const StudyPlan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-4">个性化备考规划</h1>
              <p className="text-lg text-muted-foreground mb-8">
                根据您的情况和目标，获取专属的学习计划和时间安排
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                开始创建我的规划
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover md:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarClock className="h-5 w-5 text-primary" />
                    护理职称考试备考时间规划示例
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      以下是一个为期3个月的备考规划示例，您可以根据自己的实际情况进行调整。
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="text-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">第一阶段</span>
                            <CardTitle>基础知识巩固</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">4周</p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                              <span className="text-sm">全面复习基础知识，建立知识框架</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                              <span className="text-sm">每天学习2-3个章节，做对应练习题</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                              <span className="text-sm">周末进行阶段性测试，查漏补缺</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="text-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">第二阶段</span>
                            <CardTitle>重点专题攻破</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">6周</p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                              <span className="text-sm">针对性地学习历年高频考点</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                              <span className="text-sm">每天完成50-100道真题训练</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                              <span className="text-sm">分析错题，形成个人错题本</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="text-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">第三阶段</span>
                            <CardTitle>冲刺阶段</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">2周</p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                              <span className="text-sm">进行全真模拟考试训练</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                              <span className="text-sm">复习错题本和重点难点</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                              <span className="text-sm">调整心态，保持良好状态</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    每日学习建议
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">基础知识学习</span>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        1-2小时
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">习题训练</span>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        1小时
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">错题复习</span>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        30分钟
                      </span>
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <p className="text-sm text-muted-foreground">
                        根据个人时间和精力，可以适当调整学习时长，但建议保持每日学习的习惯。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover md:col-span-2">
                <CardHeader>
                  <CardTitle>学习资源推荐</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">教材与参考书</h4>
                      <ul className="space-y-1">
                        <li className="text-sm text-muted-foreground">《护理学基础》（人民卫生出版社）</li>
                        <li className="text-sm text-muted-foreground">《内科护理学》（人民卫生出版社）</li>
                        <li className="text-sm text-muted-foreground">《外科护理学》（人民卫生出版社）</li>
                        <li className="text-sm text-muted-foreground">《健康评估》（人民卫生出版社）</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">辅导资料</h4>
                      <ul className="space-y-1">
                        <li className="text-sm text-muted-foreground">《护理学历年考试真题与解析》</li>
                        <li className="text-sm text-muted-foreground">《护理学考点精讲》</li>
                        <li className="text-sm text-muted-foreground">《护理学考试重点难点突破》</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">在线资源</h4>
                      <ul className="space-y-1">
                        <li className="text-sm text-muted-foreground">职考宝典APP题库（包含5000+真题和模拟题）</li>
                        <li className="text-sm text-muted-foreground">职考宝典视频课程（系统讲解各科目考点）</li>
                        <li className="text-sm text-muted-foreground">职考宝典在线模拟测试（仿真考试环境）</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                获取我的个性化学习计划
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudyPlan;
