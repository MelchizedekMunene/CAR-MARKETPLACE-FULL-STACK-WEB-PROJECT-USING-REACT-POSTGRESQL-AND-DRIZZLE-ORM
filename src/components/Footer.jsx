import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-100">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
      {/*Car Marketplace logo */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={95} height={65}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4CAF50" />
            <stop offset="100%" stop-color="#2E7D32" />
          </linearGradient>
        </defs>
  
         <g>
          <path fill="url(#gradient)" d="M256,64C150.13,64,64,150.13,64,256s86.13,192,192,192s192-86.13,192-192S361.87,64,256,64z M256,416 c-88.22,0-160-71.78-160-160S167.78,96,256,96s160,71.78,160,160S344.22,416,256,416z"/>
    
          <path fill="url(#gradient)" d="M300.91,178.51c-6.77-11.54-23.14-11.54-29.91,0l-39.2,66.82h-45.56v-16.29c0-8.28-6.72-15-15-15h-18.08 c-8.28,0-15,6.72-15,15v16.29H151.2c-7.75,0-14.05,6.3-14.05,14.05c0,7.75,6.3,14.05,14.05,14.05h172.49 c7.75,0,14.05-6.3,14.05-14.05C352.73,190.82,328.45,178.51,300.91,178.51z"/>
    
          <path fill="url(#gradient)" d="M225.25,298.87c0,16.56-13.44,30-30,30s-30-13.44-30-30s13.44-30,30-30S225.25,282.31,225.25,298.87z"/>
    
          <path fill="url(#gradient)" d="M346.75,298.87c0,16.56-13.44,30-30,30s-30-13.44-30-30s13.44-30,30-30S346.75,282.31,346.75,298.87z"/>
        </g>
      </svg>
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
      SHOP WITH US AND ENJOY PREMIUM SERVICES ONLY AT OUR CAR MARKETPLACE. WE VALUE OUR CLIENTS.
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> About </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> History </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Projects </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Blog </a>
      </li>
    </ul>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Facebook</span>
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Instagram</span>
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Twitter</span>
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</footer>
    </div>
  )
}

export default Footer
