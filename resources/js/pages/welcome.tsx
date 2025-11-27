import Hero from "@/components/section/Hero";
import AppShell from "@/layouts/AppShell";
import About from "@/components/section/About";
import Products from "@/components/section/Products";
import Values from "@/components/section/Values";
import Testimonials from "@/components/section/Testimonials";
import Contact from "@/components/section/Contact";

export default function Welcome() {
    return (
        <AppShell>
            <Hero />
            <About />
            <Products />
            <Values />
            <Testimonials />
            <Contact />
        </AppShell>
    );
}