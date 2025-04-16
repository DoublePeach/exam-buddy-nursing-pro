
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="hero-gradient text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              专业护理职称考试<br />一站式备考平台
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              个性化学习计划，高效备考方案，助您顺利通过职称考试
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-white" />
                <span>智能制定备考规划，量身定制学习路径</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-white" />
                <span>真题模拟，紧跟考试趋势</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-white" />
                <span>复习进度追踪，确保学习效果</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-white text-primary hover:bg-gray-100" size="lg">
                立即开始规划备考
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                了解更多
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-white/10 rounded-xl blur-xl"></div>
            <div className="relative bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 shadow-lg">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">个性化备考规划示例</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-white/20 rounded-lg flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">1</div>
                    <div className="flex-1">基础知识巩固 - 3周</div>
                  </div>
                  <div className="p-3 bg-white/20 rounded-lg flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">2</div>
                    <div className="flex-1">重点章节攻克 - 4周</div>
                  </div>
                  <div className="p-3 bg-white/20 rounded-lg flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">3</div>
                    <div className="flex-1">模拟训练 - 2周</div>
                  </div>
                  <div className="p-3 bg-white/20 rounded-lg flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">4</div>
                    <div className="flex-1">冲刺阶段 - 1周</div>
                  </div>
                </div>
                <Button className="w-full bg-white text-primary hover:bg-gray-100">
                  获取我的学习计划
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
