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
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                  How Long is this site live?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4 text-black">
                  Can I install/upload anything I want on there?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                  How can I migrate to another site?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                  Can I change the domain you give me?
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4 text-black">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How many sites I can create at once?
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                  How can I communicate with you?
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
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