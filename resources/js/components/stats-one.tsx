export default function StatsSection() {
    return (
        <section id="stats" className="py-12 md:py-20 scroll-mt-24">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Ghost Gang Records is local</h2>
                    <p>GGR is a music production company based in Maryland and Delaware. We are the central hub for music producers, artists, and DJs who are passionate about their music. Just like us</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">Perfect Your Craft</div>
                        <p>Subscribe to perform in our next showcase</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">Elevate Your Game</div>
                        <p>Gain Professional Skills and Growth</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">Get Recognized</div>
                        <p>Meet like minded creatives</p>
                    </div>
                </div>
            </div>
        </section>
    )
}