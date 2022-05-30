import React from 'react'

const FAQ = () => {
  return (
    <div>
      <div className='bg-[#13161E] min-h-screen font-spacemono'>
        <div className="flex justify-center items-center">
        <img src="https://source.unsplash.com/1200x400/?liminal" alt="" className='w-full' />
        </div>

      <section class="text-white">
        <div class="container px-5 py-5 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-spacemono text-center title-font text-white mb-4">
              frequently asked questions
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              the most common questions about how our business works and what we can do for you.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                  {/* do you really sell drugs? */}
                  how quick is the delivery?
                </summary>

                <span>
                  {/* no, you retard. */}
                  we deliver within 24 hours.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4 text-black">
                  can i sell my products on this platform?
                </summary>

                <span>
                  no, this isn't amazon. we only sell licensed myDrugs medecines fresh from our factory.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                  how can i be assured that my anonymity is maintained?
                </summary>

                <span>
                  {/* we only take your email id for payment purposes. we totally aren't selling your personal information on the dark web. */}
                  we only take your email id for payment purposes. we do not sell your information for profit.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                  how can i be certain that my medecines are pure?
                </summary>

                <span class="px-4 py-2">
                  {/* check them yourself. */}
                  our medecines go through three levels of testing in our state-of-the-art facility. you can check them yourself in case of doubt.
                </span>
              </details>
              <details class="mb-4 text-black">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  how large-scale is your operation?
                </summary>

                <span class="px-4 py-2 text-white">
                  {/* you have no idea. */}
                  we supply medecines world wide. shipping costs are borne by the customer and vary from country to country.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                  how can I communicate with you?
                </summary>

                <span class="px-4 py-2">
                  you can mail to us at <a href='mailto:someone@example.com'>developer@mydrugs.com</a>
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default FAQ