import AppShell from "@/layouts/AppShell";
import { Head } from "@inertiajs/react";
import Breadcrumb from "@/components/common/Breadcrumb";


export default function Member() {
    return (
        <AppShell>
            <Head title="Membre" />
            <Breadcrumb title="Membre" desc="" />
            <h1>Membre</h1>
        </AppShell>
    );
}