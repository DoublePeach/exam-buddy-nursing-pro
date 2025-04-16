
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Stethoscope, BookOpen, User, LogIn } from 'lucide-react';

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <Stethoscope className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">职考宝典</span>
        </div>
        
        <nav className="ml-auto flex items-center gap-4">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            首页
          </Link>
          <Link to="/study-plan" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            备考规划
          </Link>
          <Link to="/questions" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            题库
          </Link>
          <Link to="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            备考资源
          </Link>
          <Button variant="outline" size="sm" className="ml-4">
            <LogIn className="mr-2 h-4 w-4" />
            登录
          </Button>
          <Button size="sm">
            <User className="mr-2 h-4 w-4" />
            注册
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
