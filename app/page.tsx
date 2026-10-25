"use client";

import { useEffect } from "react";

export default function NeoVideoPage() {
  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const textLabels = document.querySelectorAll(".sidebar-text");
    const sections = document.querySelectorAll(".sidebar-section");
    if (!menuBtn || !sidebar) return;
    let isExpanded = true;
    const handleClick = () => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        sidebar.classList.remove("sidebar-collapsed");
        sidebar.classList.add("sidebar-expanded");
        sidebar.classList.remove("px-1");
        textLabels.forEach((el) => ((el as HTMLElement).style.display = "block"));
        sections.forEach((el) => ((el as HTMLElement).style.display = "flex"));
        sidebar.querySelectorAll("i, img.rounded-full").forEach((icon) => {
          icon.classList.add("mr-5"); icon.classList.remove("mx-auto");
        });
        sidebar.querySelectorAll("a").forEach((link) => {
          link.classList.remove("flex-col","justify-center","py-4","gap-1"); link.classList.add("py-2.5");
        });
      } else {
        sidebar.classList.remove("sidebar-expanded"); sidebar.classList.add("sidebar-collapsed"); sidebar.classList.add("px-1");
        textLabels.forEach((el) => ((el as HTMLElement).style.display = "none"));
        sections.forEach((el) => ((el as HTMLElement).style.display = "none"));
        sidebar.querySelectorAll("i").forEach((icon) => {
          icon.classList.remove("mr-5"); icon.classList.add("mx-auto");
        });
        sidebar.querySelectorAll("a").forEach((link) => {
          link.classList.remove("py-2.5"); link.classList.add("flex-col","justify-center","py-4","gap-1");
        });
      }
    };
    menuBtn.addEventListener("click", handleClick);
    return () => menuBtn.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="bg-black text-white h-screen flex flex-col overflow-hidden selection:bg-gradient-to-tr from-blue-900 via-purple-500 to-blue-900/30">
      {/* Header */}
      <header className="h-14 px-4 flex items-center justify-between shrink-0 fixed w-full bg-black/90 backdrop-blur border-b border-white/10 z-50">
        <div className="flex items-center gap-3">
          <button id="menu-btn" className="p-2 rounded-full hover:bg-white/10 transition-colors text-amber-300">
            <i className="ph ph-list text-2xl"></i>
          </button>
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.svg" alt="0xm4ngli-video-player" className="h-8 w-auto drop-shadow-[0_0_15px_rgba(30,58,138,0.6)]" />
          </a>
        </div>
        <div className="flex items-center gap-4 flex-1 max-w-[720px] ml-10 mr-4">
          <div className="flex w-full border border-white/10 rounded-full overflow-hidden bg-white/5 focus-within:border-blue-900/60 transition-colors shadow-[0_0_20px_rgba(0,255,255,0.05)]">
            <div className="hidden sm:flex items-center pl-4 pr-2 text-white/40"><i className="ph ph-magnifying-glass text-lg"></i></div>
            <input type="text" placeholder="Search" className="w-full px-4 py-2 text-base outline-none bg-transparent text-white placeholder-white/30" />
            <button className="bg-white/10 border-l border-white/10 px-5 hover:bg-white/20 transition-colors text-amber-300"><i className="ph ph-magnifying-glass text-xl"></i></button>
          </div>
          <button className="ml-2 p-2.5 bg-white/10 rounded-full hover:bg-white/20 text-amber-300"><i className="ph-fill ph-microphone text-xl"></i></button>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="p-2 rounded-full hover:bg-white/10 text-white/70 hidden sm:block"><i className="ph ph-video-camera text-2xl"></i></button>
          <button className="p-2 rounded-full hover:bg-white/10 text-white/70 relative hidden sm:block"><i className="ph ph-bell text-2xl"></i><span className="absolute top-1 right-1 bg-gradient-to-tr from-blue-900 via-purple-500 to-blue-900 text-[10px] font-bold px-1 rounded-full border border-[#050505]">9+</span></button>
          <button className="w-8 h-8 rounded-full overflow-hidden border border-white/20"><img src="https://placehold.co/100x100/5a45ff/ffffff?text=U" alt="User" className="w-full h-full object-cover" /></button>
        </div>
      </header>

      <div className="flex flex-1 pt-14 h-full relative">
        {/* Sidebar */}
        <aside id="sidebar" className="sidebar-expanded hidden md:flex flex-col shrink-0 overflow-y-auto bg-[#0a0a0a] z-40 pb-4 h-full border-r border-white/10">
          <div className="p-3 flex flex-col w-full border-b border-white/10">
            <a href="#" className="flex items-center px-3 py-2.5 rounded-lg bg-white/5 font-medium text-amber-300"><i className="ph-fill ph-house text-xl w-6 mr-5"></i><span className="text-sm truncate sidebar-text">Home</span></a>
            <a href="#" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70"><i className="ph ph-lightning text-xl w-6 mr-5"></i><span className="text-sm truncate sidebar-text">Shorts</span></a>
            <a href="#" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70"><i className="ph ph-monitor-play text-xl w-6 mr-5"></i><span className="text-sm truncate sidebar-text">Subscriptions</span></a>
          </div>
          <div className="p-3 flex flex-col w-full border-b border-white/10">
            <h3 className="px-3 py-2 text-base font-bold flex items-center sidebar-text text-white">You <i className="ph ph-caret-right ml-2 text-sm"></i></h3>
            <a href="#" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70"><i className="ph ph-clock-counter-clockwise text-xl w-6 mr-5"></i><span className="text-sm truncate sidebar-text">History</span></a>
            <a href="#" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70"><i className="ph ph-playlist text-xl w-6 mr-5"></i><span className="text-sm truncate sidebar-text">Playlists</span></a>
            <a href="#" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70"><i className="ph ph-clock text-xl w-6 mr-5"></i><span className="text-sm truncate sidebar-text">Watch Later</span></a>
            <a href="#" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70"><i className="ph ph-thumbs-up text-xl w-6 mr-5"></i><span className="text-sm truncate sidebar-text">Liked videos</span></a>
          </div>
          <div className="p-3 flex flex-col w-full sidebar-section">
            <h3 className="px-3 py-2 text-base font-bold sidebar-text text-white">Subscriptions</h3>
            <a href="#" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70"><img src="https://placehold.co/24x24/f05454/ffffff?text=T" className="w-6 h-6 rounded-full mr-5 shrink-0" alt="" /><span className="text-sm truncate sidebar-text">Tech Channel</span><div className="w-1 h-1 bg-gradient-to-tr from-blue-900 via-purple-500 to-blue-900 rounded-full ml-auto"></div></a>
            <a href="#" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70"><img src="https://placehold.co/24x24/30475e/ffffff?text=D" className="w-6 h-6 rounded-full mr-5 shrink-0" alt="" /><span className="text-sm truncate sidebar-text">Design Pro</span></a>
            <a href="#" className="flex items-center px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70"><img src="https://placehold.co/24x24/222831/ffffff?text=G" className="w-6 h-6 rounded-full mr-5 shrink-0" alt="" /><span className="text-sm truncate sidebar-text">Gaming Central</span><div className="w-1 h-1 bg-gradient-to-tr from-blue-900 via-purple-500 to-blue-900 rounded-full ml-auto"></div></a>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto bg-black h-full" id="main-content">
          <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row lg:px-6 lg:py-6 gap-6">
            <div className="flex-1 w-full max-w-[1280px]">
              {/* Player */}
              <div className="w-full bg-black lg:rounded-2xl overflow-hidden aspect-video relative group flex items-center justify-center cursor-pointer shadow-[0_0_60px_rgba(168,85,247,0.15)] ring-1 ring-blue-900/20">
                <img src="https://placehold.co/1280x720/1a1a1a/e0e0e0?text=Video+Player" alt="Video Player" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-gradient-to-tr from-blue-900 via-purple-500 to-blue-900/20 backdrop-blur rounded-full flex items-center justify-center text-amber-300 shadow-[0_0_40px_rgba(30,58,138,0.6)] group-hover:bg-gradient-to-tr from-blue-900 via-purple-500 to-blue-900/40 transition-colors scale-100 group-hover:scale-110 duration-300"><i className="ph-fill ph-play text-3xl"></i></div>
                </div>
                <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-white/20 mb-3 cursor-pointer relative"><div className="h-full bg-gradient-to-tr from-blue-900 via-purple-500 to-blue-900 w-1/3 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-tr from-blue-900 via-purple-500 to-blue-900 rounded-full shadow-[0_0_10px_rgba(30,58,138,0.8)]"></div></div></div>
                  <div className="flex items-center justify-between text-white px-1">
                    <div className="flex items-center gap-4"><button><i className="ph-fill ph-play text-xl text-amber-300"></i></button><button><i className="ph-fill ph-speaker-high text-xl text-amber-300"></i></button><span className="text-xs">4:20 / 12:35</span></div>
                    <div className="flex items-center gap-4"><button><i className="ph ph-closed-captioning text-xl"></i></button><button><i className="ph ph-gear text-xl"></i></button><button><i className="ph ph-corners-out text-xl"></i></button></div>
                  </div>
                </div>
              </div>

              <div className="mt-5 px-4 lg:px-0">
                <h1 className="text-xl md:text-2xl font-bold text-white leading-snug">Building a Complete Web App Interface using Modern CSS Frameworks (2025 Edition)</h1>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-4">
                  <div className="flex items-center gap-3">
                    <img src="https://placehold.co/100x100/4CAF50/ffffff?text=C" alt="Channel" className="w-10 h-10 rounded-full ring-2 ring-blue-900/40 shadow-[0_0_10px_rgba(30,58,138,0.3)]" />
                    <div><span className="font-bold text-base text-white">CodeCraft Channel</span><div className="text-xs text-white/40">1.25M subscribers</div></div>
                    <button className="bg-gradient-to-tr from-blue-900 via-purple-500 to-blue-900 text-[#050505] px-4 py-2 rounded-full text-sm font-bold hover:bg-gradient-to-tr from-blue-900 via-purple-500 to-blue-900 shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-colors">Subscribe</button>
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                    <div className="flex bg-white/5 rounded-full border border-white/10"><button className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-l-full transition-colors border-r border-white/10"><i className="ph ph-thumbs-up text-xl text-amber-300"></i><span className="text-sm font-medium">124K</span></button><button className="px-4 py-2 hover:bg-white/10 rounded-r-full transition-colors"><i className="ph ph-thumbs-down text-xl text-white/60"></i></button></div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors whitespace-nowrap"><i className="ph ph-share-network text-xl text-amber-300"></i><span className="text-sm font-medium">Share</span></button>
                    <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors whitespace-nowrap"><i className="ph ph-download-simple text-xl text-amber-300"></i><span className="text-sm font-medium">Download</span></button>
                    <button className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full"><i className="ph ph-dots-three text-xl"></i></button>
                  </div>
                </div>

                <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-3 text-sm hover:bg-white/[0.07] transition-colors cursor-pointer shadow-[0_0_20px_rgba(0,255,255,0.05)]">
                  <div className="font-medium mb-1 text-white/70">1.5M views • 2 weeks ago</div>
                  <p className="text-white/60"><br/><br/>#WebDevelopment #CSS #FrontendDesign</p>
                  <button className="font-bold mt-2 text-amber-300 hover:text-amber-300">Show more</button>
                </div>

                <div className="mt-6 mb-8">
                  <div className="flex items-center gap-6 mb-4"><h2 className="text-xl font-bold">4,208 Comments</h2><button className="flex items-center gap-2 font-medium text-sm text-white/50"><i className="ph ph-sort-descending text-xl"></i> Sort by</button></div>
                  <div className="flex gap-4 items-start"><img src="https://placehold.co/100x100/5a45ff/ffffff?text=U" alt="You" className="w-10 h-10 rounded-full" /><div className="flex-1 border-b border-white/10 pb-1"><input type="text" placeholder="Add a comment..." className="w-full outline-none text-sm bg-transparent text-white placeholder-white/30" /></div></div>
                </div>
              </div>
            </div>

            {/* Suggested */}
            <div className="w-full lg:w-[350px] xl:w-[400px] px-4 lg:px-0 shrink-0">
              <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-2">
                <button className="bg-gradient-to-tr from-blue-900 via-purple-500 to-blue-900 text-[#050505] px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-[0_0_15px_rgba(168,85,247,0.5)]">All</button>
                <button className="bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border border-white/10">From CodeCraft</button>
                <button className="bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border border-white/10">Related</button>
                <button className="bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border border-white/10">Recently uploaded</button>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {thumb:"ff9800",dur:"8:12",title:"10 UI Design Tips for Beginners",chan:"Design Mastery",views:"890K views • 1 month ago"},
                  {thumb:"00bcd4",dur:"45:00",title:"React JS Crash Course (Full Project)",chan:"Tech Ninja",views:"2.1M views • 1 year ago"},
                  {thumb:"9c27b0",dur:"LIVE",live:true,title:"lofi hip hop radio 📚 - beats to relax/study to",chan:"Chill Vibes",views:"42K watching"},
                  {thumb:"3f51b5",dur:"12:34",title:"My Ultimate Dream Desk Setup (Productivity)",chan:"Studio Spaces",views:"345K views • 3 days ago"},
                  {thumb:"e91e63",dur:"5:55",title:"7 JavaScript Tricks You Should Know",chan:"Code Magic",views:"112K views • 6 hours ago"},
                  {thumb:"8bc34a",dur:"22:15",title:"Solo Camping in the Rain - ASMR Nature",chan:"Outdoor Life",views:"5.4M views • 2 years ago"},
                ].map((v,i) => (
                  <a key={i} href="#" className="flex flex-col sm:flex-row gap-2 cursor-pointer group">
                    <div className="relative sm:w-40 xl:w-44 shrink-0 rounded-xl overflow-hidden aspect-video bg-white/5 ring-1 ring-white/10">
                      <img src={`https://placehold.co/320x180/${v.thumb}/ffffff?text=${encodeURIComponent(v.title.slice(0,3))}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="" />
                      <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs font-medium px-1 rounded">{v.dur}</span>
                      {v.live && <div className="absolute bottom-1 right-1 bg-red-600 text-white text-xs font-bold px-1 rounded flex items-center gap-1"><i className="ph-fill ph-broadcast text-[10px]"></i> LIVE</div>}
                    </div>
                    <div className="flex flex-col pr-6 sm:pr-0">
                      <h3 className="text-sm font-medium line-clamp-2 leading-tight mb-1 group-hover:text-amber-300 transition-colors">{v.title}</h3>
                      <span className="text-xs text-white/40 hover:text-white">{v.chan}</span>
                      <span className="text-xs text-white/40">{v.views}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
