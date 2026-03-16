'use client';

import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Loader2, 
  Sparkles, 
  LayoutList, 
  Bot, 
  Send, 
  Zap, 
  Shield, 
  Globe,
  Github
} from 'lucide-react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [supabaseStatus, setSupabaseStatus] = useState<'loading' | 'connected'>('loading');

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setSupabaseStatus('connected'), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(2,6,23,1))]" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full glass z-50 border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Antigravity AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Github className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>
            <div className="h-6 w-[1px] bg-white/10" />
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Docs
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="z-10 max-w-4xl w-full text-center space-y-8 mt-20">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Zap className="w-3 h-3" /> v1.0.0 Now Live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight italic">
            Next Generation <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              AI Workspace
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Antigravity와 함께 지능형 미래를 설계하세요. 
            완성도 높은 프론트엔드와 강력한 AI 엔진의 만남.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-white/10 flex items-center gap-2">
            시작하기 <Send className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
            데모 보기
          </button>
        </div>

        {/* Platform Status Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 text-left">
          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <LayoutList className="w-5 h-5 text-blue-400" />
              </div>
              {supabaseStatus === 'loading' ? (
                <Loader2 className="w-4 h-4 animate-spin text-slate-500" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              )}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Database</h3>
              <p className="text-xs text-slate-500 mt-1">Supabase Realtime Cloud</p>
            </div>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className={`h-full bg-emerald-500 transition-all duration-1000 ${supabaseStatus === 'connected' ? 'w-full' : 'w-0'}`} />
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-500/20 text-[10px] font-bold text-purple-400 uppercase">
                Ready
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">AI Engine</h3>
              <p className="text-xs text-slate-500 mt-1">Gemini 1.5 Flash Model</p>
            </div>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-[95%]" />
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
              <Globe className="w-4 h-4 text-amber-500/50" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Security</h3>
              <p className="text-xs text-slate-500 mt-1">Next-Gen SSL Encryption</p>
            </div>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 w-[100%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <footer className="fixed bottom-8 text-slate-500 text-xs flex flex-col items-center gap-2">
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <div className="w-1 h-1 bg-slate-800 rounded-full my-auto" />
          <span>Terms of Service</span>
        </div>
        <p>© 2026 Antigravity. Designed with Passion.</p>
      </footer>
    </main>
  );
}

