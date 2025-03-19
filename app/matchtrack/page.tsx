"use client";
import SubpageHeader from "@/components/subpage-header";
import DescriptionSection from "@/components/DescriptionSection";
import { Text, Kbd } from "@radix-ui/themes";

export default function MatchTrack() {
  return (
    <main>
      {/* header section */}
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
          {/* Where to start */}
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

          {/* Taking Initiative */}
          <section></section>
        </div>
      </section>
    </main>
  );
}
