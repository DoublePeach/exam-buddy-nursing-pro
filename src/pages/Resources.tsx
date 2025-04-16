
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Video, Download, Clock, Calendar } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-4">备考资源</h1>
              <p className="text-lg text-muted-foreground mb-8">
                精选护理职称考试备考资源，助您高效准备，轻松通过考试
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="materials" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="materials">学习资料</TabsTrigger>
                <TabsTrigger value="videos">视频课程</TabsTrigger>
                <TabsTrigger value="documents">文档下载</TabsTrigger>
                <TabsTrigger value="schedules">考试安排</TabsTrigger>
              </TabsList>
              
              <div className="mt-8">
                <TabsContent value="materials">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>基础护理学精讲</CardTitle>
                          </div>
                          <Badge>必备</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          系统梳理基础护理学重点知识点，包含历年考点分析和解题技巧
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>20小时内容</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">开始学习</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>内科护理学要点</CardTitle>
                          </div>
                          <Badge>高频</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          内科护理学核心知识点详解，重点难点剖析，配套习题及解析
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>25小时内容</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">开始学习</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>外科护理学总结</CardTitle>
                          </div>
                          <Badge variant="outline">推荐</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          外科护理学关键点归纳，常见疾病护理要点，手术前后护理重点
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>22小时内容</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">开始学习</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>健康评估技巧</CardTitle>
                          </div>
                          <Badge variant="outline">推荐</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          健康评估核心技能，体格检查方法，评估结果分析及记录要点
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>18小时内容</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">开始学习</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>历年真题解析</CardTitle>
                          </div>
                          <Badge className="bg-amber-500">热门</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          2018-2023年护理职称考试真题详解，重点考点分析，出题规律总结
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>15小时内容</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">开始学习</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>考前冲刺宝典</CardTitle>
                          </div>
                          <Badge>必备</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          考前两周必备复习资料，高频考点精选，考前重点预测，应试技巧
                        </CardDescription>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>10小时内容</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">开始学习</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="videos">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <Video className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>基础护理学视频教程</CardTitle>
                          </div>
                          <Badge>14课时</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video rounded-md bg-muted mb-4 flex items-center justify-center">
                          <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          由资深护理教师讲授基础护理学核心内容，图文并茂，通俗易懂
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">观看课程</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <Video className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>内科护理学视频教程</CardTitle>
                          </div>
                          <Badge>16课时</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video rounded-md bg-muted mb-4 flex items-center justify-center">
                          <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          系统讲解内科护理学重点内容，结合临床案例，深入浅出
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">观看课程</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <Video className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>外科护理学视频教程</CardTitle>
                          </div>
                          <Badge>15课时</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video rounded-md bg-muted mb-4 flex items-center justify-center">
                          <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          外科护理学核心知识点讲解，重点强调外科手术前后的护理要点
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">观看课程</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <Video className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>健康评估视频教程</CardTitle>
                          </div>
                          <Badge>12课时</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video rounded-md bg-muted mb-4 flex items-center justify-center">
                          <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          详细演示健康评估的各项技能，包括体格检查方法和评估结果分析
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">观看课程</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="documents">
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle>护理职称考试大纲（2023版）</CardTitle>
                              <CardDescription>官方发布的最新考试大纲，包含各科目考试范围和要求</CardDescription>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            下载
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle>护理学基础知识点总结</CardTitle>
                              <CardDescription>系统整理的护理学基础知识点，适合快速复习</CardDescription>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            下载
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle>内科常见疾病护理要点</CardTitle>
                              <CardDescription>内科常见疾病的护理要点总结，高频考点一览</CardDescription>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            下载
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle>外科手术前后护理流程</CardTitle>
                              <CardDescription>外科手术前后护理工作的详细流程和注意事项</CardDescription>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            下载
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle>健康评估操作指南</CardTitle>
                              <CardDescription>健康评估各项操作的详细步骤和标准</CardDescription>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            下载
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle>护理职称考试真题汇编（2018-2023）</CardTitle>
                              <CardDescription>近5年护理职称考试真题及答案解析</CardDescription>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            下载
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="schedules">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        2024年护理职称考试安排
                      </CardTitle>
                      <CardDescription>
                        以下是2024年护理职称考试的重要时间节点，请及时关注官方通知以获取最新信息
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">报名时间</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground">2024年3月15日 - 2024年4月15日</p>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">准考证打印</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground">2024年5月10日 - 2024年5月20日</p>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">考试时间</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <p className="text-muted-foreground">2024年5月25日 上午 9:00-11:30</p>
                                <p className="text-muted-foreground">2024年5月25日 下午 14:00-16:30</p>
                                <p className="text-muted-foreground">2024年5月26日 上午 9:00-11:30</p>
                                <p className="text-muted-foreground">2024年5月26日 下午 14:00-16:30</p>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">成绩公布</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground">预计2024年7月中旬</p>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">注意事项</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>请考生提前了解考场规则，准备好相关证件和物品</li>
                            <li>考试前请确认考场位置和交通路线，预留充足时间</li>
                            <li>携带有效身份证件和准考证，符合要求的文具</li>
                            <li>遵守考场纪律，不携带手机等电子设备进入考场</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">设置考试提醒</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
