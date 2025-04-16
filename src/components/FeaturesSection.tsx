
import React from 'react';
import { 
  CalendarClock, 
  BookOpen, 
  BarChart4, 
  ClipboardCheck, 
  UserPlus, 
  Trophy 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: CalendarClock,
    title: '智能学习计划',
    description: '根据您的实际情况和备考目标，自动生成最优学习计划和时间安排'
  },
  {
    icon: BookOpen,
    title: '专业备考资源',
    description: '汇集各类高质量学习资料，包括重点知识点、考点讲解和真题解析'
  },
  {
    icon: BarChart4,
    title: '学习进度追踪',
    description: '实时记录学习时长、完成情况，定期反馈学习效果，及时调整备考策略'
  },
  {
    icon: ClipboardCheck,
    title: '模拟测试系统',
    description: '提供与正式考试相似的模拟测试，帮助熟悉考试形式，评估备考成果'
  },
  {
    icon: UserPlus,
    title: '个性化学习体验',
    description: '根据学习数据分析，智能推荐适合的学习内容和方法，提高备考效率'
  },
  {
    icon: Trophy,
    title: '激励与坚持系统',
    description: '通过成就徽章、打卡奖励等机制，帮助保持学习动力，坚持备考'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">备考神器，助您一臂之力</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们提供全方位的备考工具和服务，帮助您高效备考，轻松通过护理职称考试
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
