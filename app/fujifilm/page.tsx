"use client";
import SubpageHeader from "@/components/subpage-header";
import DescriptionSection from "@/components/DescriptionSection";
import BackToTopButton from "@/components/buttontop";

export default function FujiFilm() {
  return (
    <main>
      {/* header section */}
      <BackToTopButton />
      <SubpageHeader
        title="FujiFilm"
        subtitle="Designing a Dashboard capable of handling complex data."
      />
      {/* Case study starts here */}

      {/* Background */}
      <section className="p-8 bg-gray-100">
        {/* Padding */}
        <div className="max-w-4xl mx-auto">
          {/* Preview Image */}
          <section>
            <DescriptionSection
              title=""
              description=""
              images={[
                {
                  src: "/fuji-header.png",
                },
              ]}
            />
          </section>

          {/* Summary */}
          <section>
            <DescriptionSection
              title="Summary"
              description="FUJIFILM Diosynth Biotechnologies is a leading global contract development and manufacturing organization (CDMO) specializing in biologics, vaccines, and advanced therapies. They wanted an easy to use software that has complex user roles with interconnected data, which also needed to be shown or removed from the UI depending on the respective roles. My primary focus was always on the 'easy to use' part."
            />
          </section>

          {/*Data Before Everything else */}
          <section>
            <DescriptionSection
              title="I had to understand data before everything else"
              description="Fujifilm had a clear idea of what the product should do. But the flow was a mess of interconnected tasks. I started with lots of data. I started to go through them to establish a connection, so that I can easily direct or redirect the flow of the information as needed. It was a mess of tasks within tasks."
              badge="4 iterations"
              images={[
                {
                  src: "/fuji-startproject-before.png",
                },
                {
                  src: "/fuji-startproject-after.png",
                },
              ]}
            />
          </section>

          {/*A/B tests with Thick data */}
          <section>
            <DescriptionSection
              title="Performing A/B tests with Thick data"
              description="Big data gave me insights on how to organize the data and Thick data gave me insights on how to shape the UX of it."
              badge="3 Experiments"
              images={[
                {
                  src: "/abtest_fuji.png",
                }
              ]}
            />
          </section>

          {/* Atomic approach */}
          <section>
            <DescriptionSection
              title="Design system with Atomic approach"
              description="Starting to build the design system at this point, Primarily foucsing on building reusable components using the atomic design approach. Doubling down on Organisms and Templates mostly."
              badge="Design system"
              images={[
                {
                  src: "fuji-atomicapproach.png",
                },
              ]}
            />
          </section>

          {/* Mobility */}
          <section>
            <DescriptionSection
              title="Mobility"
              description="It was important for Fujifilm to operate while being mobile, So responsiveness, saved sessions, cached data was very much important throughout the process."
              badge="Responsiveness"
              images={[{ src: "/fuji-mobility.png" }]}
            />
          </section>

          {/* Final */}
          <section>
            <DescriptionSection
              title="Finally, Everything makes sense"
              description="A comprehensive dashboard was ready that had multi-tiered roles, accesses and user interfaces with cross-platform compatibility. This is fun to use."
              badge="Final Design"
              images={[
                {
                  src: "/fuji-final.png",
                },
              ]}
            />
          </section>
        </div>
      </section>
    </main>
  );
}
