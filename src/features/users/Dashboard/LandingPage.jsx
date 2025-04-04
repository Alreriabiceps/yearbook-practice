import React from 'react';

const LandingPage = () => {
  return (
    <>
      <div id="landingpage" className="min-h-screen">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url('/wally.png')",
          }}
        >
          <div className=""></div>
          <img className="w-32 h-32 mb-90" src="Logo.png" alt="Logo" />
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there Graduates</h1>
              <p className="mb-5">
                "Cherished Moments, Lasting Memories – Your Journey, Forever Captured."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="classGallery" className="min-h-screen">
        {/* Class gallery content */}
      </div>
    </>
  );
};

export default LandingPage;
