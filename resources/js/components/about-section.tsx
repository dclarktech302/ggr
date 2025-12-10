import { Button } from '@/components/ui/button'
import { ChevronRight, Link } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">About Ghost Gang Records</h2>
                    <div className="space-y-6">
                        <p>Ghost Gang Records is a music production company based on the Eastern Shore. We are a team of music producers, DJs, and artists who are passionate about music and community.</p>
                        <p>
                            GGR. <span className="font-bold">We are a team of music producers, DJs, and DJs who are passionate about music and music production.</span> We are a team of music producers, DJs, and artists who are passionate about music and community.
                        </p>
                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Learn More</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}