
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Radio, RadioGroup } from 'lucide-react';

const Questions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-4">题库练习</h1>
              <p className="text-lg text-muted-foreground mb-8">
                海量真题模拟题，帮助您高效备考，轻松通过考试
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="all">全部科目</TabsTrigger>
                  <TabsTrigger value="fundamental">基础护理学</TabsTrigger>
                  <TabsTrigger value="medical">内科护理学</TabsTrigger>
                  <TabsTrigger value="surgical">外科护理学</TabsTrigger>
                  <TabsTrigger value="assessment">健康评估</TabsTrigger>
                </TabsList>
                
                <div className="flex gap-2">
                  <Button variant="outline">真题练习</Button>
                  <Button variant="outline">模拟测试</Button>
                  <Button>开始答题</Button>
                </div>
              </div>
              
              <TabsContent value="all">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">模拟练习题 #1</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">在为患者进行生命体征监测时，以下哪项不属于生命体征？</p>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full"></div>
                          </div>
                          <span>A. 体温</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full"></div>
                          </div>
                          <span>B. 脉搏</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full"></div>
                          </div>
                          <span>C. 血压</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                          <span>D. 血糖</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-muted-foreground">来源：2022年主管护师考试真题</div>
                      <Button variant="outline" size="sm">查看解析</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">模拟练习题 #2</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">患者男，45岁，腹痛2天，诊断为"急性胰腺炎"。护理人员为其实施的最佳体位是？</p>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full"></div>
                          </div>
                          <span>A. 平卧位</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full"></div>
                          </div>
                          <span>B. 侧卧位</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                          <span>C. 半卧位</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full"></div>
                          </div>
                          <span>D. 俯卧位</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-muted-foreground">来源：2023年内科护理学模拟题</div>
                      <Button variant="outline" size="sm">查看解析</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">模拟练习题 #3</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">关于静脉输液，下列哪项做法是正确的？</p>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full"></div>
                          </div>
                          <span>A. 输液前不需要核对医嘱</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </div>
                          <span>B. 严格执行三查七对制度</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full"></div>
                          </div>
                          <span>C. 可以加快输液速度以节省时间</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full"></div>
                          </div>
                          <span>D. 输液结束后不需要记录</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-muted-foreground">来源：2021年护士资格考试真题</div>
                      <Button variant="outline" size="sm">查看解析</Button>
                    </CardFooter>
                  </Card>
                </div>
                
                <div className="mt-8 text-center">
                  <Button>加载更多题目</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="fundamental">
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-medium mb-4">基础护理学题库</h3>
                  <p className="text-muted-foreground mb-6">
                    包含1500+基础护理学真题和模拟题，覆盖所有重要考点
                  </p>
                  <Button>开始练习</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="medical">
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-medium mb-4">内科护理学题库</h3>
                  <p className="text-muted-foreground mb-6">
                    包含1200+内科护理学真题和模拟题，覆盖所有重要考点
                  </p>
                  <Button>开始练习</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="surgical">
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-medium mb-4">外科护理学题库</h3>
                  <p className="text-muted-foreground mb-6">
                    包含1300+外科护理学真题和模拟题，覆盖所有重要考点
                  </p>
                  <Button>开始练习</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="assessment">
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-medium mb-4">健康评估题库</h3>
                  <p className="text-muted-foreground mb-6">
                    包含1000+健康评估真题和模拟题，覆盖所有重要考点
                  </p>
                  <Button>开始练习</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Questions;
