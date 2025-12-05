import { Head } from '@inertiajs/react';
import HeroSection from '@/components/hero-section';
import FooterSection from '@/components/footer';
import StatsSection from '@/components/stats-one';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <HeroSection />

            <StatsSection />

            <FooterSection />
        </>
    );
}
