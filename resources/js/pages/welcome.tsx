import Hero from "@/components/section/home/Hero";
import AppShell from "@/layouts/AppShell";
import About from "@/components/section/home/About";
import Products from "@/components/section/home/Products";
import Values from "@/components/section/home/Values";
import Testimonials from "@/components/section/home/Testimonials";
import Contact from "@/components/section/home/Contact";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <AppShell>
            <Head title="Accueil" />
            <Hero />
            <About />
            <Products />
            <Values />
            <Testimonials />
            <Contact />
        </AppShell>
    );
}