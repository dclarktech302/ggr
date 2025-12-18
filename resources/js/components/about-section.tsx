import { Button } from '@/components/ui/button'
import { ChevronRight, Link } from 'lucide-react'

export default function ContentSection() {
    return (
        <section id="about" className="py-16 md:py-32 scroll-mt-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">About GGR Music</h2>
                    <div className="space-y-6">
                        <p>GGR is a music production company based on the Eastern Shore. 
                            <span className="font-bold">We are a team of music producers, DJs, and DJs who are passionate
                                about music and music production.</span>    
                        </p>
                        {/* <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Learn More</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}