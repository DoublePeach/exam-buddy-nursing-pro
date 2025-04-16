
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileType, UserRound, CalendarCheck, Award } from 'lucide-react';

const StepsSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">四步轻松开启备考之旅</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            简单几步，让您的备考更加高效、轻松、有条理
          </p>
        </div>
        
        <div className="relative">
          {/* Connect line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-24 relative">
            {/* Step 1 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:text-right space-y-4 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-primary">第一步：创建个人账户</h3>
                <p className="text-muted-foreground">填写基本信息，了解您的职称级别和备考需求</p>
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-0 w-8 h-8 bg-primary rounded-full -translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
                  <span className="text-white font-bold">1</span>
                </div>
                <Card className="ml-0 md:ml-4">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center">
                      <UserRound className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">个人信息设置</h4>
                      <p className="text-sm text-muted-foreground">完善您的职业背景和备考目标</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="order-last md:order-first relative">
                <div className="absolute top-1/2 right-0 w-8 h-8 bg-primary rounded-full -translate-y-1/2 translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
                  <span className="text-white font-bold">2</span>
                </div>
                <Card className="mr-0 md:mr-4">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center">
                      <FileType className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">选择备考科目</h4>
                      <p className="text-sm text-muted-foreground">确认您需要准备的考试科目和内容</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-primary">第二步：确认考试科目</h3>
                <p className="text-muted-foreground">选择您需要备考的科目，了解各科目的考试重点</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:text-right space-y-4 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-primary">第三步：获取学习规划</h3>
                <p className="text-muted-foreground">系统会根据您的情况生成个性化的学习计划和时间安排</p>
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-0 w-8 h-8 bg-primary rounded-full -translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
                  <span className="text-white font-bold">3</span>
                </div>
                <Card className="ml-0 md:ml-4">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center">
                      <CalendarCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">制定学习计划</h4>
                      <p className="text-sm text-muted-foreground">根据您的时间和目标，智能生成备考方案</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="order-last md:order-first relative">
                <div className="absolute top-1/2 right-0 w-8 h-8 bg-primary rounded-full -translate-y-1/2 translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
                  <span className="text-white font-bold">4</span>
                </div>
                <Card className="mr-0 md:mr-4">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">开始备考之旅</h4>
                      <p className="text-sm text-muted-foreground">按计划学习，追踪进度，直到通过考试</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-primary">第四步：开始备考</h3>
                <p className="text-muted-foreground">跟随学习计划，利用平台资源，高效备考，轻松通过考试</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            立即开始我的备考计划
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
