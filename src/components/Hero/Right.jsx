export default function Right() {

  return (
    <div className='absolute h-screen right-0 flex flex-col justify-center w-1/3 py-30 pr-30 transition-opacity duration-700'>
      <h1 className="text-gray-700 text-lg font-medium mb-2 tracking-widest uppercase">
        Hi, I'm a
      </h1>
      <h2 className="text-5xl font-bold text-gray-900 mb-5 leading-tight">
        <span className="inline-block border-b-4 border-blue-500 pb-2">
          Software Developer
        </span>
      </h2>
      <p className="text-gray-700 text-lg mb-2 font-normal">
        Crafting clean, accessible, and modern web experiences.
      </p>
      <p className="text-gray-400 text-base mb-12">
        Let's build something exceptional together.
      </p>
    </div>
  );
}
