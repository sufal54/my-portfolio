"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Expr = () => {
  const expr_cert = [
    {
      img:"1",
      prompt:"Worked 1.1 years as a Full Stack Developer, building interactive UI designs with Next.js, Tailwind CSS, and Framer Motion. Developed and optimized RESTful APIs using Express and MongoDB with secure authentication. Designed efficient CRUD operations and scalable backend architecture.",
      is_y_axis:false
    },
    {
      img:"2",
      prompt:"Worked 3 months as a Full Stack Developer, gaining hands-on experience with modern web technologies like Next.js, Express, MongoDB, Tailwind CSS, and Framer Motion. Built responsive, interactive user interfaces and contributed to backend development with secure authentication and optimized database operations. Delivered high-quality features and left a positive impression through reliable, clean code and teamwork.",
      is_y_axis:true
    }
  ];

  const [exprScroll, setExprScroll] = useState<number>(0);

  const exprDiv = useRef<HTMLDivElement|null> (null);

  useEffect(()=>{
    const interval= setInterval(()=>{
      const el = exprDiv.current;
      if(!el){
        return;
      }

      setExprScroll((prv)=>{
        const next = (prv+1) % expr_cert.length;
        el.scrollTo({
          left: next * window.innerWidth,
          behavior:"smooth"
        });
        return next;
      });
    },3000);

    return ()=>{clearInterval(interval)};
  },[]);

  return (
    <div className="w-full pb-6 h-full mt-14 bg-slate-900 overflow-hidden">
      <div className="w-full flex">
        <h1 className="p-2 text-2xl font-extrabold">Experience</h1>
        <span className="p-2 text-xl font-extralight text-red-600">1.4 year</span>
      </div>
      <div
      className="w-full mt-5 min-h-[600] flex overflow-hidden"
      ref={exprDiv}
      >
        {
          expr_cert.map((item, i)=> (
            <div key={i}
              className="flex flex-col w-screen lg:flex-row items-center justify-center"
            >
              <p className="flex flex-wrap p-9 lg:w-1/2 font-bold">{item.prompt}</p>
              <div className="w-screen h-96 mt-5 md:h-[450] lg:h-[600] xl:h-[800] rounded-xl overflow-hidden relative">
                <Image fill src={`/expr/${item.img}.jpg`} alt={""}/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Expr;
