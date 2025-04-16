
import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: '李小玲',
    role: '社区医院护士',
    content: '以前备考总是没有头绪，自从用了职考宝典，学习变得更加有条理。智能规划功能帮我省去了大量收集资料的时间，真的是护考路上的得力助手！',
    rating: 5,
    initials: 'LX'
  },
  {
    name: '张明',
    role: '三甲医院护士',
    content: '工作很忙，本来担心没时间复习，这款App帮我科学安排时间，把碎片时间也利用起来了。最重要的是提醒功能让我不会半途而废，现在已经通过了主管护师考试！',
    rating: 5,
    initials: 'ZM'
  },
  {
    name: '王佳',
    role: '急诊科护士',
    content: '题库很全面，覆盖了考试的各个方面。每天做一定量的题目，巩固知识点，让我对考试越来越有信心。推荐给所有准备职称考试的护理同仁！',
    rating: 4,
    initials: 'WJ'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">用户心声</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            听听已经使用我们平台成功通过职称考试的用户怎么说
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-2">
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="py-4">
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
