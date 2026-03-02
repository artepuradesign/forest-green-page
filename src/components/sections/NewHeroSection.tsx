import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, BarChart3, Search, FileText, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useSiteTheme } from '@/contexts/SiteThemeContext';
import dashboardMockup from '@/assets/hero-dashboard-mockup.png';

const benefits = [
  { icon: Zap, label: 'Rápido', desc: 'Respostas instantâneas' },
  { icon: ShieldCheck, label: 'Seguro', desc: 'LGPD + criptografia' },
  { icon: BarChart3, label: 'Completo', desc: 'Consultas + módulos empresariais' },
];

const features = [
  { icon: Search, title: 'Consultas CPF/CNPJ', desc: 'Dados completos em segundos com alta taxa de acerto' },
  { icon: FileText, title: 'Painéis Personalizados', desc: 'Administração, estoque, vendas e relatórios em um só lugar' },
  { icon: Users, title: 'Multi-usuários', desc: 'Gerencie equipes com permissões e controle de acesso' },
  { icon: TrendingUp, title: 'API Integrada', desc: 'Integre dados diretamente nos seus sistemas via API REST' },
];

const NewHeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { currentVisualTheme } = useSiteTheme();
  const isMatrix = currentVisualTheme === 'matrix';

  if (isMatrix) {
    return (
      <section className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <div className="flex flex-col items-center justify-center py-20 sm:py-28 lg:py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-gray-900 dark:text-green-400 leading-tight tracking-tight mb-6"
                  style={{ textShadow: 'var(--tw-shadow, none)' }}
              >
                <span className="dark:drop-shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                  API Painel
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 dark:text-green-300/80">
                  Consultas + Ferramentas para Seu Negócio
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-green-200/70 leading-relaxed mb-10 max-w-2xl mx-auto">
                De CPF em segundos a painéis completos: administração, estoque, vendas e mais.
                Tudo em um lugar, com segurança e velocidade.
              </p>

              {/* Benefits */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 justify-center">
                {benefits.map((b) => (
                  <div key={b.label} className="flex items-center gap-3 justify-center">
                    <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-green-900/30 ring-1 ring-gray-200 dark:ring-green-500/30 flex items-center justify-center flex-shrink-0">
                      <b.icon className="h-5 w-5 text-gray-700 dark:text-green-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-900 dark:text-green-300 leading-none">{b.label}</p>
                      <p className="text-xs text-gray-500 dark:text-green-400/60 mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
                {features.map((f) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 dark:bg-green-900/10 border border-gray-200/30 dark:border-green-500/15 text-left"
                  >
                    <f.icon className="h-5 w-5 text-gray-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-green-300">{f.title}</p>
                      <p className="text-xs text-gray-500 dark:text-green-400/50 mt-1">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 font-semibold text-base px-8 dark:shadow-[0_0_20px_rgba(0,255,65,0.2)]"
                  onClick={() => navigate('/registration')}
                >
                  Testar grátis (10 consultas)
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-green-500/40 text-gray-700 dark:text-green-400 hover:bg-gray-50 dark:hover:bg-green-900/20 font-semibold text-base px-8"
                  onClick={() => navigate('/planos-publicos')}
                >
                  Ver planos
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Default hero (non-matrix)
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden bg-gradient-to-br from-[hsl(230,40%,12%)] via-[hsl(260,45%,18%)] to-[hsl(280,50%,22%)]">
      {/* Decorative blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 sm:py-20 lg:py-24">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-white leading-tight tracking-tight mb-5">
              API Painel — Consultas + Ferramentas para Seu Negócio
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              De CPF em segundos a painéis completos: administração, estoque, vendas e mais. Tudo em um lugar.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 justify-center lg:justify-start">
              {benefits.map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center flex-shrink-0">
                    <b.icon className="h-5 w-5 text-purple-300" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white leading-none">{b.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8"
                onClick={() => navigate('/registration')}
              >
                Testar grátis (10 consultas)
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8"
                onClick={() => navigate('/planos-publicos')}
              >
                Ver planos
              </Button>
            </div>
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(260,45%,18%)] via-transparent to-transparent z-10 rounded-2xl" />
              <img
                src={dashboardMockup}
                alt="Dashboard API Painel com gráficos e consultas CPF/CNPJ"
                className="w-full rounded-2xl shadow-2xl shadow-purple-900/40 border border-white/10"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
