import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowRight, BedDouble, BookOpen, CalendarDays, ChevronDown, ChevronRight, CircleHelp, CreditCard, FileText, Globe, Headset, Heart, Instagram, Mail, Menu, RefreshCw, Search, ShieldCheck, Star, UserRound, X, Youtube, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import poolPhoto from "@/assets/resort-pool.jpg";
import sunsetPhoto from "@/assets/support-sunset.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Stayforlong Help Center | Customer Care" },
    { name: "description", content: "Find answers, manage your booking, and get help from Stayforlong customer care. Explore booking, payments, cancellation, and travel topics." },
    { property: "og:title", content: "Stayforlong Help Center | Customer Care" },
    { property: "og:description", content: "Find answers, manage your booking, or talk to the Stayforlong support team." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HelpCenter,
});

const categories: { title: string; description: string; icon: LucideIcon; tone: string }[] = [
  { title: "Booking", description: "View, edit or check your booking", icon: CalendarDays, tone: "pink" },
  { title: "Hotel stay", description: "Check-in, amenities and more", icon: BedDouble, tone: "blue" },
  { title: "Payments", description: "Transactions, methods & refunds", icon: CreditCard, tone: "green" },
  { title: "Cancellation & refunds", description: "Policy, timelines and FAQs", icon: RefreshCw, tone: "pink" },
  { title: "Account", description: "Login, profile and security", icon: UserRound, tone: "pink" },
  { title: "Travel documents", description: "Visas, IDs and requirements", icon: FileText, tone: "blue" },
];
const quickHelp = [
  { title: "Manage my booking", description: <>View, modify or check the<br className="desktop-break" /> status of your reservation.</>, icon: CalendarDays, target: "Booking" },
  { title: "Payment & refunds", description: <>Get help with payments,<br className="desktop-break" /> refunds and failed transactions.</>, icon: CreditCard, target: "Payments" },
  { title: "Changes & cancellations", description: <>Make changes to your booking<br className="desktop-break" /> or learn about cancellation policies.</>, icon: RefreshCw, target: "Cancellation & refunds" },
  { title: "Contact support", description: <>Chat, email or call us. We’re<br className="desktop-break" /> here to help.</>, icon: Headset, target: "support" },
];
const articles = ["How to manage your booking", "Refund policy and timelines", "How to change your travel dates", "Common payment issues", "Account recovery steps"];
const highlights = [
  { icon: ShieldCheck, title: "Trusted by millions", description: "Safe and secure bookings" },
  { icon: Headset, title: "24/7 Support", description: <>We’re here when<br />you need us</> },
  { icon: Globe, title: "Global destinations", description: <>Explore the world<br />with confidence</> },
  { icon: Star, title: "Rated 4.6/5", description: <>Based on 250K+<br />customer reviews</> },
];
const officialSite = "https://www.stayforlong.com/";

function HelpCenter() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("");
  const topicsRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const filteredCategories = categories.filter(item => `${item.title} ${item.description}`.toLowerCase().includes(query.toLowerCase()));
  const filteredArticles = articles.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  function goToTopic(target: string) {
    document.getElementById(target === "support" ? "support" : `topic-${target}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return (
    <div className="help-center">
      <header className="site-header">
        <div className="page-width header-inner">
          <a href={officialSite} className="wordmark" aria-label="Stayforlong home">stayforlong</a>
          <nav className="primary-nav" aria-label="Main navigation">
            <a href={officialSite}>Stays <ChevronDown size={13} /></a>
            <a href={officialSite}>Flight + Hotel</a>
            <a href={officialSite}>Transfers</a>
            <a href={officialSite}>Car rentals</a>
          </nav>
          <div className="header-actions">
            <span className="currency"><span className="flag" aria-label="United States">🇺🇸</span> USD <ChevronDown size={12} /></span>
            <Button variant="careOutline" className="help-center-button" onClick={() => { searchInputRef.current?.focus(); window.scrollTo({ top: 0, behavior: "smooth" }); }}><CircleHelp /> Help Center</Button>
            <Button variant="careNav" size="icon" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-nav page-width" aria-label="Additional navigation">{["Stays", "Flight + Hotel", "Transfers", "Car rentals"].map(item => <a key={item} href={officialSite}>{item}<ChevronRight size={16} /></a>)}</nav>}
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-photo" src={poolPhoto} alt="A turquoise resort pool surrounded by green-trimmed sun umbrellas" width={1920} height={640} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="page-width hero-content">
          <span className="customer-care"><Headset size={18} /> Customer care</span>
          <h1 id="hero-title">How can we <span>help</span> you?</h1>
          <p>Find answers, manage your booking,<br />or talk to our support team.</p>
          <form className="help-search" role="search" onSubmit={event => { event.preventDefault(); setQuery(searchText.trim()); topicsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
            <Search className="search-leading-icon" size={25} />
            <input ref={searchInputRef} value={searchText} onChange={event => { setSearchText(event.target.value); if (!event.target.value) setQuery(""); }} aria-label="Search for help with your booking" placeholder="Search for help with your booking..." type="search" />
            <Button variant="careIcon" size="icon" type="submit" aria-label="Search help"><Search /></Button>
          </form>
        </div>
      </section>

      <main className="page-width main-content">
        <section className="quick-help" aria-label="Quick help">
          {quickHelp.map(({ title, description, icon: Icon, target }) => <Button variant="careNav" className="quick-card" key={title} onClick={() => goToTopic(target)}>
            <span className={`icon-disc quick-icon ${target === "support" ? "support-icon" : "tone-pink"}`}><Icon strokeWidth={2.2} /></span>
            <span className="quick-copy"><strong>{title}</strong><span>{description}</span></span>
            <span className="quick-arrow"><ArrowRight size={19} /></span>
          </Button>)}
        </section>

        <section className="topics-section" ref={topicsRef} aria-labelledby="topics-title">
          <h2 id="topics-title">What do you need help with?</h2>
          <p className="section-subtitle">Quick access to the most common topics and resources.</p>
          <div className="topic-list">
            {filteredCategories.map(({ title, description, icon: Icon, tone }) => <a href={officialSite} className="topic-row" id={`topic-${title}`} key={title}>
              <span className={`icon-disc topic-icon tone-${tone}`}><Icon strokeWidth={2} /></span>
              <span className="topic-copy"><strong>{title}</strong><span>{description}</span></span>
              <ChevronRight className="row-chevron" size={20} />
            </a>)}
            {query && !filteredCategories.length && !filteredArticles.length && <p className="search-empty" role="status">No results for “{query}”. <Button variant="link" onClick={() => { setQuery(""); setSearchText(""); }}>View all topics</Button></p>}
          </div>
        </section>

        <section className="support-banner" id="support" aria-labelledby="support-title">
          <img src={sunsetPhoto} alt="An airplane above palm trees at a pink tropical sunset" width={1920} height={640} loading="lazy" />
          <div className="support-tint" />
          <div className="support-copy"><h2 id="support-title">Need help now?</h2><p>Our support team is available<br />24/7 to assist you.</p></div>
          <div className="support-actions">
            <Button variant="careLight" asChild><a href={officialSite} target="_blank" rel="noreferrer"><Headset /> Chat with us</a></Button>
            <Button variant="careTransparent" asChild><a href={officialSite} target="_blank" rel="noreferrer"><Mail /> Email us</a></Button>
          </div>
        </section>

        <section className="articles-section" aria-labelledby="articles-title">
          <div className="articles-heading"><h2 id="articles-title"><BookOpen size={23} /> Trending articles</h2><Button variant="link" onClick={() => { setQuery(""); setSearchText(""); }}>View all</Button></div>
          <div className="articles-list">{filteredArticles.map(article => <a key={article} href={officialSite}>{article}<ChevronRight size={16} /></a>)}</div>
        </section>

        <div className="still-help"><strong>Still need help?</strong><a href="#support">Contact our support team <ArrowRight size={16} /></a></div>

        <section className="trust-section" aria-label="Stayforlong support highlights">
          {highlights.map(({ icon: Icon, title, description }) => <div className="trust-item" key={title}><Icon strokeWidth={1.9} /><div><strong>{title}</strong><p>{description}</p></div></div>)}
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a href={officialSite} className="wordmark footer-wordmark" aria-label="Stayforlong home">stayforlong</a>
          <nav className="footer-links" aria-label="Footer navigation"><div><a href={officialSite}>About us</a><a href="#hero-title">Help Center</a><a href="#support">Contact us</a></div><div><a href={officialSite}>Privacy policy</a><a href={officialSite}>Terms & conditions</a></div></nav>
          <div className="footer-social"><div className="social-links"><a href="https://www.facebook.com/stayforlong" aria-label="Facebook" target="_blank" rel="noreferrer"><span className="facebook-symbol">f</span></a><a href="https://www.instagram.com/stayforlong/" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram /></a><a href="https://x.com/stayforlong" aria-label="X" target="_blank" rel="noreferrer"><span className="x-symbol">𝕏</span></a><a href="https://www.youtube.com/@stayforlong" aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube /></a></div><p>More stays. More stories. <Heart size={20} fill="currentColor" /></p></div>
        </div>
      </footer>
    </div>
  );
}