import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  BarChart3, 
  FileText, 
  Globe, 
  Terminal,
  AlertTriangle,
  Layers,
  Repeat,
  Menu,
  X
} from "lucide-react";

export default function ChargeSimples() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Soluções", id: "solutions" },
    { label: "Como funciona", id: "how-it-works" },
    { label: "Integrações", id: "integrations" }
  ];

  return (
    <div className="min-h-screen selection:bg-primary-lime selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-100 bg-black/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-black tracking-tighter text-white italic">Charge Simples</div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="font-display text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a 
              href="https://app.chargesimples.com.br"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex bg-primary-lime text-black font-display text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-lg"
            >
              Começar Agora
            </motion.a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-surface-black border-b border-border-subtle overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navItems.map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-sm font-bold uppercase tracking-widest text-zinc-400"
                  >
                    {item.label}
                  </a>
                ))}
                <a 
                  href="https://app.chargesimples.com.br"
                  className="bg-primary-lime text-black font-display text-center py-4 rounded-lg font-bold uppercase tracking-widest text-xs"
                >
                  Começar Agora
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-24 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-6 py-12 md:py-32 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="z-10 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-charcoal rounded-full border border-border-subtle mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary-lime pulse-lime"></span>
                <span className="font-display text-[10px] uppercase tracking-widest text-zinc-400">Validado por centenas de empresas</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Recuperar chargeback deveria ser simples
              </h1>
              <p className="text-base md:text-xl text-zinc-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                IA autônoma para devolver vendas perdidas ao lojista sem mensalidade, comissão só no win.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.a 
                  href="https://app.chargesimples.com.br"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(209, 255, 0, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary-lime text-black font-display text-xs font-bold uppercase tracking-widest px-10 py-5 rounded-xl shadow-[0_0_20px_-5px_rgba(209, 255, 0, 0.3)] transition-all flex items-center justify-center min-h-[56px]"
                >
                  Conectar em 5 minutos
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative px-4"
            >
              <div className="glass-card p-1 rounded-xl glow-lime scale-100 sm:scale-105 rotate-0 sm:rotate-3">
                <img 
                  alt="Chargeback Recovery Dashboard" 
                  className="rounded-lg w-full aspect-video object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRT4Y9yPvfdiUUL86-MA4QJpy1K4tjVBZLZiOvkC8yBV4RLjluymIMSEOsMIJmDcCxLIIqniphzyZbGBTfs-R3HfER4bsQoYGj30RfgwawRJqia1r5KjP3qORBLUDAVell5zhYrg9qzNj3nkBRgi03NjuUOwPRtRv_8NjZ0m-g9hPlMENuvQH4PXojBvsz6YB0H1IZKq781L9urBXz4s4m-_Gc7J8LXA58SPzp8wx69JsZ1107eP244qe876uuubq2dKnzq2piBw"
                />
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 md:-bottom-6 -left-0 md:-left-6 glass-card p-4 rounded-lg border border-border-subtle max-w-[180px] md:max-w-[200px] z-20"
              >
                <p className="text-[10px] font-display text-primary-lime mb-1 uppercase font-bold tracking-widest">Real-time Win</p>
                <p className="text-xl font-bold text-white font-display">+$4.280,00</p>
                <p className="text-[10px] text-zinc-500">Recuperado há 2 min</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="px-6 py-24 bg-surface-charcoal/30 border-y border-border-subtle">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center md:text-left">
              <p className="font-display text-primary-lime text-xs font-bold uppercase tracking-widest mb-2">The Market Reality</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">O impacto silencioso no seu lucro</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="lg:col-span-2 glass-card p-6 md:p-8 rounded-xl border border-border-subtle"
              >
                <h3 className="text-white font-display text-xl md:text-2xl font-bold mb-4">A hemorragia global do E-commerce</h3>
                <p className="text-zinc-400 mb-8">Estima-se que as perdas por chargeback atinjam números recordes em 2025.</p>
                <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 overflow-hidden">
                  <span className="text-5xl md:text-8xl font-black text-white italic tracking-tighter">US$ 33.8B</span>
                  <span className="text-zinc-500 md:pb-4 font-display font-bold uppercase text-[10px] tracking-widest">Perdidos em 2025</span>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card p-6 md:p-8 rounded-xl border border-primary-lime/20 bg-gradient-to-br from-surface-charcoal to-surface-black"
              >
                <p className="text-zinc-400 font-display text-[10px] font-bold uppercase tracking-widest mb-4">Critical Alert: Brasil</p>
                <div className="text-5xl font-black text-primary-lime mb-4">3.48%</div>
                <p className="text-white font-display font-medium">A maior taxa de chargeback do mundo pertence ao varejo brasileiro.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card p-6 md:p-8 rounded-xl border border-border-subtle flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <AlertTriangle className="text-primary-lime w-10 h-10 mb-4" />
                  <h3 className="text-white font-display text-xl md:text-2xl font-bold mb-2">Friendly Fraud</h3>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">75%</div>
                  <p className="text-zinc-500 text-xs text-zinc-400 font-medium">das disputas são consideradas "fraude amigável" e poderiam ser vencidas.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="lg:col-span-2 glass-card p-6 md:p-8 rounded-xl border border-border-subtle overflow-hidden relative"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h3 className="text-white font-display text-xl md:text-2xl font-bold mb-2">Vantagem Algorítmica</h3>
                    <p className="text-zinc-400">Enquanto humanos levam horas para reunir documentos, nossa IA executa a defesa em milissegundos.</p>
                  </div>
                  <div className="w-full md:w-1/2 h-24 md:h-32 bg-surface-black rounded border border-border-subtle relative flex items-end px-4 gap-2">
                    {[20, 35, 25, 45, 90].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className={`flex-1 rounded-t-sm ${i === 4 ? "bg-primary-lime glow-lime" : "bg-zinc-800"}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto" id="solutions">
          <div className="text-center mb-20">
            <p className="font-display text-primary-lime text-[10px] font-bold uppercase tracking-widest mb-4">Slogan</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Plug, esqueça, receba.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">A primeira solução de chargeback que alinha interesses: se você não recupera, nós não recebemos. Simples assim.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-8 h-8" />} 
              title="IA Ativa 24/7" 
              description="Monitoramento ininterrupto de transações. Sua defesa não dorme, não tira férias e não falha." 
            />
            <FeatureCard 
              icon={<CheckCircle className="w-8 h-8" />} 
              title="Only On Win" 
              description="25% de comissão apenas sobre o valor recuperado. Sem mensalidades, sem setup, risco zero." 
              highlighted
            />
            <FeatureCard 
              icon={<Repeat className="w-8 h-8" />} 
              title="Zero Friction" 
              description="Integração via webhook em 5 minutos. Não exige mudanças no seu checkout ou fluxos atuais." 
            />
          </div>
        </section>

        {/* Integrations */}
        <section className="px-6 py-24 bg-surface-charcoal/50 border-y border-border-subtle" id="integrations">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-md">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Integração nativa com o seu ecossistema</h2>
              <p className="text-zinc-500">Conecte-se aos maiores gateways e plataformas de e-commerce do mundo com um clique.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full md:w-auto">
              {["Stripe", "Shopify", "M.Pago", "Cielo", "Stone", "Adyen", "Hotmart", "+200"].map((logo) => (
                <div key={logo} className={`h-16 w-full sm:w-32 glass-card rounded flex items-center justify-center opacity-70 hover:opacity-100 transition-all cursor-default ${logo === "Shopify" ? "border-t-2 border-primary-lime" : ""}`}>
                  <span className="font-display text-[10px] font-black tracking-widest text-white italic uppercase">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto" id="how-it-works">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">5 passos para a automação total</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border-subtle" />
            <div className="space-y-12 md:space-y-16">
              <Step 
                num="01" 
                title="Detecção em tempo real" 
                desc="Recebemos o alerta de chargeback via webhook assim que o banco processa a disputa." 
                icon={<Activity className="w-4 h-4" />}
                align="right"
                active
              />
              <Step 
                num="02" 
                title="Classificação de motivo" 
                desc="Nossa IA identifica o 'Reason Code' exato para determinar a estratégia de defesa mais eficaz." 
                icon={<BarChart3 className="w-4 h-4" />}
                align="left"
              />
              <Step 
                num="03" 
                title="Cruzamento de dados" 
                desc="Coletamos evidências de entrega, logs de IP e histórico do cliente automaticamente." 
                icon={<Layers className="w-4 h-4" />}
                align="right"
              />
              <Step 
                num="04" 
                title="Submissão customizada" 
                desc="Geramos e enviamos documentos personalizados para cada bandeira e banco emissor." 
                icon={<FileText className="w-4 h-4" />}
                align="left"
              />
              <Step 
                num="05" 
                title="Recuperação Garantida" 
                desc="Atingimos uma taxa de vitória 2-3x superior ao processamento manual tradicional." 
                icon={<CheckCircle className="w-4 h-4" />}
                align="right"
                last
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-lime to-transparent" />
            <h2 className="font-display text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Pare de perder dinheiro para o sistema
            </h2>
            <p className="text-zinc-400 mb-10 md:mb-12 max-w-xl mx-auto text-base md:text-lg">
              Comece a recuperar hoje mesmo. Nossa equipe configura tudo para você em menos de 5 minutos.
            </p>
            <motion.a 
              href="https://app.chargesimples.com.br"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(209, 255, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-lime text-black font-display text-xs font-bold uppercase tracking-widest px-10 md:px-12 py-5 rounded-xl transition-all inline-block w-full sm:w-auto"
            >
              Agendar Onboarding
            </motion.a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-black border-t border-border-subtle w-full py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-start max-w-xs">
            <div className="text-xl font-black text-white italic tracking-tighter mb-4">Charge Simples</div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Recuperação inteligente de chargebacks para e-commerces de alta performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 md:gap-x-16 gap-y-10 uppercase font-display text-[10px] font-bold tracking-widest">
            <div className="flex flex-col gap-4">
              <span className="text-zinc-600 mb-2">Produto</span>
              <a href="#solutions" className="text-zinc-400 hover:text-white transition-colors">Soluções</a>
              <a href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">Como Funciona</a>
              <a href="#integrations" className="text-zinc-400 hover:text-white transition-colors">Integrações</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-zinc-600 mb-2">Empresa</span>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Sobre Nós</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Contato</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-zinc-600 mb-2">Legal</span>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Termos</a>
            </div>
          </div>

          <div className="flex gap-4">
            <SocialLink icon={<Globe className="w-4 h-4" />} />
            <SocialLink icon={<Terminal className="w-4 h-4" />} />
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border-subtle text-center">
          <p className="font-display text-[10px] text-zinc-600 uppercase tracking-widest px-4">© 2024 Charge Simples. Powered by AI Agents.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, highlighted = false }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`p-6 md:p-8 rounded-xl bg-surface-charcoal border transition-all relative overflow-hidden group ${highlighted ? "border-primary-lime glow-lime shadow-[0_0_20px_rgba(209,255,0,0.1)]" : "border-border-subtle hover:border-primary-lime/50"}`}
    >
      {highlighted && (
        <div className="absolute -top-4 -right-4 bg-primary-lime text-black px-8 py-4 rotate-45 font-display text-[10px] font-black">
          POPULAR
        </div>
      )}
      <div className={`mb-6 transition-colors ${highlighted ? "text-primary-lime" : "text-zinc-500 group-hover:text-primary-lime"}`}>
        {icon}
      </div>
      <h4 className="text-white font-display text-xl font-bold mb-4">{title}</h4>
      <p className={`font-medium text-sm md:text-base ${highlighted ? "text-zinc-300" : "text-zinc-500"}`}>{description}</p>
    </motion.div>
  );
}

function Step({ num, title, desc, icon, align, active = false, last = false }) {
  const isRight = align === "right";
  return (
    <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${!isRight ? "md:flex-row-reverse" : ""}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`md:w-1/2 text-center md:text-left ${isRight ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
      >
        <span className="text-primary-lime font-display text-[10px] font-black uppercase tracking-widest mb-1 block">{num}</span>
        <h3 className="text-white font-display text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">{desc}</p>
      </motion.div>
      <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${active ? "bg-black border-2 border-primary-lime glow-lime text-primary-lime" : "bg-surface-charcoal border border-border-subtle text-zinc-600"}`}>
        {icon}
      </div>
      <div className="md:w-1/2" />
    </div>
  );
}

function SocialLink({ icon }) {
  return (
    <div className="h-10 w-10 rounded-full border border-border-subtle flex items-center justify-center text-zinc-600 hover:border-primary-lime hover:text-primary-lime hover:glow-lime cursor-pointer transition-all">
      {icon}
    </div>
  );
}
