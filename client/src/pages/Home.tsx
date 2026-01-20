import { Button } from "@/components/ui/button";
import { Phone, Wrench, Shield, Clock, MessageCircle, ArrowRight, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Página Home - Automé
 * Design: Minimalismo Corporativo Moderno
 * Paleta: Azul Confiança (#1A365D) + Verde Assistência (#2F855A)
 * Tipografia: Montserrat (títulos) + Roboto (corpo)
 */

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const asset = (p: string) => `${import.meta.env.BASE_URL || "/"}${p.replace(/^\//, "")}`;

  // Monitorar scroll para mostrar botão "Voltar ao Topo"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    // Substitua pelo número real da Automé
    window.open("https://wa.me/5511999999999?text=Olá%20Automé%2C%20gostaria%20de%20uma%20cotação", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={asset("/images/logo.png")} alt="Automé" className="h-10" />
            <span className="font-display font-bold text-lg text-primary">Automé</span>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="btn-secondary hidden md:flex gap-2" onClick={openWhatsApp}>
            <MessageCircle size={18} />
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section id="inicio" className="section-light py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Texto */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                Assistência Veicular com Cuidado de Plano de Saúde
              </h1>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                A Automé oferece assistência mecânica profissional para seu veículo, com um modelo inovador de carência progressiva. Quanto mais tempo você está conosco, mais benefícios você desbloqueia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary flex gap-2 justify-center" onClick={openWhatsApp}>
                  <Phone size={20} />
                  Quero uma Cotação
                </Button>
                <Button variant="outline" className="flex gap-2 justify-center">
                  Saiba Mais
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>

            {/* Imagem */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={asset("/images/hero.jpg")}
                alt="Família feliz ao lado do carro"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO: O QUE É ASSISTÊNCIA VEICULAR ===== */}
      <section className="section-gray py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Assistência Veicular, Não Seguro
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Entenda a diferença: a Automé oferece assistência mecânica profissional, similar a um plano de saúde para seu carro.
            </p>
          </div>

          {/* Cards de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                <Wrench className="text-secondary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg text-primary mb-2">
                Assistência Mecânica
              </h3>
              <p className="text-foreground/70">
                Acesso a profissionais qualificados para reparos e manutenção do seu veículo.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                <Clock className="text-secondary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg text-primary mb-2">
                Disponibilidade 24/7
              </h3>
              <p className="text-foreground/70">
                Suporte contínuo para emergências e situações inesperadas na estrada.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
                <Shield className="text-secondary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg text-primary mb-2">
                Proteção Completa
              </h3>
              <p className="text-foreground/70">
                Cobertura abrangente com benefícios que crescem conforme sua permanência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO: COMO FUNCIONA (CARÊNCIA PROGRESSIVA) ===== */}
      <section id="como-funciona" className="section-light py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Seu Plano de Saúde para o Carro
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Benefícios progressivos que aumentam a cada mês, assim como um plano de saúde tradicional.
            </p>
          </div>

          {/* Timeline Visual */}
          <div className="mb-12">
            <img
              src={asset("/images/timeline.png")}
              alt="Timeline de 3 meses de benefícios"
              className="w-full max-w-4xl mx-auto"
            />
          </div>

          {/* Tabela de Carência */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-display font-bold text-primary">Período</th>
                  <th className="text-left py-4 px-4 font-display font-bold text-primary">Benefícios Disponíveis</th>
                  <th className="text-left py-4 px-4 font-display font-bold text-primary">Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-4 px-4 font-semibold text-primary">Mês 1</td>
                  <td className="py-4 px-4 text-secondary font-semibold">Reboque Ilimitado</td>
                  <td className="py-4 px-4 text-foreground/70">
                    Serviço de reboque para seu veículo em caso de pane.
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-4 px-4 font-semibold text-primary">Mês 2</td>
                  <td className="py-4 px-4 text-secondary font-semibold">+ Chaveiro e Pneu</td>
                  <td className="py-4 px-4 text-foreground/70">
                    Adicionado: Serviço de chaveiro e troca de pneu furado.
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-4 px-4 font-semibold text-primary">Mês 3+</td>
                  <td className="py-4 px-4 text-secondary font-semibold">Assistência Completa</td>
                  <td className="py-4 px-4 text-foreground/70">
                    Acesso total a todos os serviços mecânicos e assistência 24/7.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-foreground/70 mt-8 max-w-2xl mx-auto">
            Este modelo permite que você comece com um investimento menor e tenha acesso progressivo a benefícios mais completos, exatamente como um plano de saúde.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO: CONTATO ===== */}
      <section id="contato" className="section-gray py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Fale com a Automé Agora Mesmo
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Entre em contato conosco via WhatsApp ou nosso robô assistente integrado ao CRM. Estamos prontos para ajudar!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="btn-secondary flex gap-2 justify-center text-base h-12 px-8" onClick={openWhatsApp}>
                <MessageCircle size={20} />
                Iniciar Chat (WhatsApp)
              </Button>
              <Button className="btn-primary flex gap-2 justify-center text-base h-12 px-8">
                <Phone size={20} />
                Ligar Agora
              </Button>
            </div>

            <p className="text-sm text-foreground/60">
              Seu contato será atendido por nosso robô assistente, integrado ao CRM para agilizar o processo.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Info */}
            <div>
              <h4 className="font-display font-bold mb-4">Automé</h4>
              <p className="text-sm opacity-90">
                Assistência Veicular Profissional com Modelo de Carência Progressiva.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#inicio" className="opacity-90 hover:opacity-100 transition-opacity">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="opacity-90 hover:opacity-100 transition-opacity">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#contato" className="opacity-90 hover:opacity-100 transition-opacity">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy" className="opacity-90 hover:opacity-100 transition-opacity">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/terms" className="opacity-90 hover:opacity-100 transition-opacity">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
            <p>&copy; 2026 Automé. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* ===== BOTÕES FLUTUANTES PROFISSIONAIS ===== */}
      
      {/* WhatsApp - Lado Esquerdo */}
      <div className="fixed left-6 bottom-6 z-40">
        <button
          onClick={openWhatsApp}
          className="w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Abrir WhatsApp"
          title="Fale conosco no WhatsApp"
        >
          <MessageCircle size={24} />
          <span className="absolute left-20 bg-secondary text-secondary-foreground px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Fale Conosco
          </span>
        </button>
      </div>

      {/* Voltar ao Topo - Lado Direito */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-40 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-fade-in-up"
          aria-label="Voltar ao topo"
          title="Voltar ao topo da página"
        >
          <ChevronUp size={24} />
          <span className="absolute right-20 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Voltar ao Topo
          </span>
        </button>
      )}
    </div>
  );
}
