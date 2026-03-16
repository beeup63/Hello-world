'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase';
import { CheckCircle2, XCircle, Loader2, Sparkles, LayoutList, Bot } from 'lucide-react';

export default function Home() {
  const [supabaseStatus, setSupabaseStatus] = useState<'loading' | 'connected' | 'error'>('loading');

  useEffect(() => {
    const checkSupabase = async () => {
      try {
        const supabase = createClient();
        const { error } = await supabase.from('_non_existent_table_').select('*').limit(1);
        // If error is 401/403 or specific connection error, it's an error. 
        // But for "table not found" it usually means connected but schema empty.
        // Given we don't have tables yet, we check if the request even went through.
        if (error && error.code === 'PGRST301') {
           // This means the URL is invalid or Anon key is missing
           setSupabaseStatus('error');
        } else {
           setSupabaseStatus('connected');
        }
      } catch (e) {
        setSupabaseStatus('error');
      }
    };
    checkSupabase();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-950 text-slate-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col gap-8">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Bot className="w-10 h-10 text-blue-400" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Antigravity AI Task
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-[600px] mx-auto">
            준비 완료: 바이브코딩을 시작합니다
          </p>
        </div>

        {/* Status Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl px-4 py-8 bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800">
            <div className="flex items-center gap-3">
              <LayoutList className="w-5 h-5 text-slate-400" />
              <span className="font-medium text-slate-300">Supabase Connection</span>
            </div>
            {supabaseStatus === 'loading' && <Loader2 className="w-5 h-5 animate-spin text-blue-500" />}
            {supabaseStatus === 'connected' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
            {supabaseStatus === 'error' && <XCircle className="w-5 h-5 text-rose-500" />}
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-slate-400" />
              <span className="font-medium text-slate-300">Gemini AI Engine</span>
            </div>
            <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">READY</span>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center space-y-2 mt-4 text-slate-500">
          <p>`.env.local` 파일에 API 키를 설정해주세요.</p>
          <div className="flex gap-4 justify-center mt-6">
            <div className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium cursor-pointer">
              Getting Started
            </div>
            <div className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 font-medium cursor-pointer">
              Documentation
            </div>
          </div>
        </div>

      </div>

      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>
    </main>
  );
}
