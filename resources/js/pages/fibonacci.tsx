import Breadcrumb from "@/components/common/Breadcrumb";
import AppShell from "@/layouts/AppShell";
import { Head } from "@inertiajs/react";



export default function Fibonacci() {
    return (
        <AppShell>
            <Head title="Fibonacci" />
            <Breadcrumb title="Fibonacci" desc=""/>  
            <h1>Fibonacci</h1>
        </AppShell>
    );
}