import React from 'react';
import projects from '../data/portfolio.js';

function PortfolioItem() {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         <a
            href={projects[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
         >
            <img src={projects[0].imgUrl}
               alt="portfolio"
               className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
               <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{projects[0].title}</h3>
               <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                  {projects[0].stack.map(item => (
                     <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        {item}
                     </span>
                  ))}

               </p>
            </div>
         </a>

         <a
            href={projects[1].link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
         >
            <img src={projects[1].imgUrl}
               alt="portfolio"
               className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
               <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{projects[1].title}</h3>
               <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                  {projects[1].stack.map(item => (
                     <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        {item}
                     </span>
                  ))}

               </p>
            </div>
         </a>

         <a
            href={projects[2].link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
         >
            <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
               alt="portfolio"
               className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
               <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{projects[2].title}</h3>
               <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                  {projects[2].stack.map(item => (
                     <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        {item}
                     </span>
                  ))}

               </p>
            </div>
         </a>
      </div>
   )
}

export default PortfolioItem;