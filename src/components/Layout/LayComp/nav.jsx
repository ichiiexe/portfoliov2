export default function NavAside() {
  return (
    <aside className="h-dvh bg-[#080808] flex flex-col items-center sticky top-0 left-0">
      <div className="w-12 h-12 bg-[#111] font-extrabold rounded-md text-rose-600 my-4 flex justify-center items-center ">
        <h1 className="">
          &lt; <span className="text-white">/</span> &gt;
        </h1>
      </div>
      <nav className="flex flex-col my-2 text-white text-lg">
        <a className="border-r border-rose-600">About</a>
        <a className="border-r border-rose-600">Projects</a>
        <a className="border-r border-rose-600">Contact</a>
      </nav>
    </aside>
  );
}

// black = #080808
// gray = #111
// light = #232323
