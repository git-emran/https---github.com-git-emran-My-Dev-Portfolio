import SubpageHeader from '@/components/subpage-header';
import React from 'react'

function AboutMeDetails() {
  return (
    <div className="min-h-screen sm:top-20 flex flex-col">
      <SubpageHeader
        title="A Glimpse into the Years"
        subtitle="How it all got started"
      />
      {/* Start of the Body   */}
      <section className='p-8 bg-gray-100"'>
        <div className="max-w-4xl mx-auto">
          The Body
          and more filler texts
          and other filler texts
        </div>
      </section>
    </div>
  );
}

export default AboutMeDetails
