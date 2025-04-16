
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="hero-gradient text-white py-16">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">准备好开始您的备考之旅了吗？</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
          不再为备考而烦恼，让职考宝典成为您通过护理职称考试的得力助手。
          现在注册，开启您的个性化备考计划！
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-primary hover:bg-gray-100" size="lg">
            立即注册，免费使用
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
            了解会员特权
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
