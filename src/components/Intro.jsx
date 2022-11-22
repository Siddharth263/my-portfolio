import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Priyanshu</h1>
      <p className="text-base md:text-xl mb-3 font-medium">Java Backend Developer</p>
      <p className="text-sm max-w-xl line-height:extra-loose mb-6 font-bold">Originally from India, I have been honing my skills for the past year in Web Development, Backend Development, Algorithms building and Data Structures. <br />
        I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies in mind for implementation, scalability and developer sanity. <br />
        I've worked with small, agile teams on skunkworks projects and clones of multiple websites like <a className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600" href="https://effortless-parfait-1c264b.netlify.app/index.html">reliancedigital.in</a> and <a className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600" href="https://verdant-torrone-b6665e.netlify.app/">youtube.com</a> <br />
        I also love to talk about animes as I love watching them, recently I watched Blue Lock, which is basically a sports anime, showing how one can improve their skills to be the best than the rest.</p>
    </div>
  )
}

export default Intro;