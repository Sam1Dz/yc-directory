import React from 'react';

/* COMPONENTS */
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <React.Fragment>
      <Hero
        heading={{
          text: (
            <React.Fragment>
              Pitch your startup,
              <br />
              Connect with Entrepreneurs
            </React.Fragment>
          ),
        }}
        subHeading={{
          text: 'Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.',
        }}
      />
    </React.Fragment>
  );
}
