"use client";
import SubpageHeader from "@/components/subpage-header";
import DescriptionSection from "@/components/DescriptionSection";
import { Text, Kbd } from "@radix-ui/themes";
import BackToTopButton from "@/components/buttontop";

export default function MatchTrack() {
  return (
    <main>
      {/* header section */}
      <BackToTopButton />
      <SubpageHeader
        title="MatchTrack"
        subtitle="Designing a mobile app for the Sports Management Industry"
      />
      {/* Case study starts here */}
      {/* Background */}
      <section className="p-8 bg-gray-100">
        {/* Preview Image */}
        <div className="max-w-4xl mx-auto">
          <section>
            <DescriptionSection
              title=""
              description=""
              images={[
                {
                  src: "/match-trackheader.png",
                },
              ]}
            />
          </section>
          {/* Executive Summary */}
          <section className="max-w-4xl mx-auto">
            <DescriptionSection
              title="Executive Summary"
              description="A client wants to develop a SaaS app to manage professional Tennis
              athletes, track equipment, and monitor performance, improving team
              efficiency , specially in Denmark. The sports management software
              market is growing rapidly, valued at $5.96 billion in 2021 and
              projected to reach $24.09 billion by 2031, with a 15.1% CAGR. We
              aim to launch the product with a few unique selling point."
            />
          </section>
          {/* Started from an Excel sheet */}
          <section>
            <DescriptionSection
              title="Started from an Excel sheet"
              description="From an Excel sheet to the ideation stage, the idea was simple, driven by our belief in product-led growth. Our focus was on addressing the most critical use cases while ensuring the application remained intuitive to manage."
              images={[
                {
                  src: "/matchtrack-report.png",
                },
              ]}
            />
          </section>

          {/* Where to start */}
          <section>
            <DescriptionSection
              title="Where to Start ?"
              description="It is often fun and games when ideating but real challenge comes along when its time to put priority on things. So the question remains, where do we start from? I did some user interviews and came up with critical use cases. And that was the plan, to start with use cases and solve one high priority problem at a time."
              images={[
                {
                  src: "/matchtrack-usecases.png",
                },
              ]}
            />
          </section>
          {/* Taking Initiative */}
          <section>
            <DescriptionSection
              title="Taking Initiative"
              description="Started with the prototype to focus on perfect navigation. Bringing in user insights early on."
              images={[
                {
                  src: "/matchtrack-wireframes.png",
                },
              ]}
            />
          </section>

          {/* Clear Navigation*/}
          <section>
            <DescriptionSection
              title="Easy to understand Navigation"
              description="Clear navigation is essential for moving between tasks and getting things done quicker. I have iterated twice on this to find the perfect balance."
              images={[
                {
                  src: "/matchtrack-nav.png",
                },
              ]}
            />
          </section>

          {/* Mtrack payment*/}
          <section>
            <DescriptionSection
              title="Get things done quicker"
              description="Making sure critical sections are handled within 2-3 steps to reduce cognitive load. For example: in-app shopping experience is like a 3 step process. Easy to handle, faster checkouts."
              images={[
                {
                  src: "/matchtrack-payment.png",
                },
              ]}
            />
          </section>

          {/* Total Report*/}
          <section>
            <DescriptionSection
              title="Easy Report"
              description="Track and Generate Report to manage better."
              images={[
                {
                  src: "/matchtrack-totalreport.png",
                },
                {
                  src: "/matchtrack-totalreport.png",
                },
              ]}
            />
          </section>

          {/* Final Preview*/}
        </div>
      </section>
    </main>
  );
}
