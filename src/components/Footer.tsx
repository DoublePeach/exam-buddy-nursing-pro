
import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">职考宝典</span>
            </div>
            <p className="text-muted-foreground text-sm">
              专业的护理职称考试备考平台，让您的备考更加高效、轻松
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/study-plan" className="text-sm text-muted-foreground hover:text-primary">
                  备考规划
                </Link>
              </li>
              <li>
                <Link to="/questions" className="text-sm text-muted-foreground hover:text-primary">
                  题库
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">
                  备考资源
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">考试科目</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/subjects/fundamental" className="text-sm text-muted-foreground hover:text-primary">
                  基础护理学
                </Link>
              </li>
              <li>
                <Link to="/subjects/medical" className="text-sm text-muted-foreground hover:text-primary">
                  内科护理学
                </Link>
              </li>
              <li>
                <Link to="/subjects/surgical" className="text-sm text-muted-foreground hover:text-primary">
                  外科护理学
                </Link>
              </li>
              <li>
                <Link to="/subjects/health-assessment" className="text-sm text-muted-foreground hover:text-primary">
                  健康评估
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">帮助与支持</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  联系我们
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  常见问题
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 职考宝典 - 护理职称考试备考平台. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
