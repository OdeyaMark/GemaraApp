import Image from "next/image";

export default function Home() {
  // componentDidMount(){

  //   const username = window.localStorage.getItem("username");
  // }

  return (
    <div className="w-full h-screen grid grid-rows-3">
      <header >
        
      </header>
      <div className="assistant text-right text-[#E0E0E0] mr-8">
        <h1 className=" text-[3rem] font-extrabold leading-none ml-8 ">
          בוא לשחק גמרא בחוויה
        </h1>
        <h2 className="text-lg">
          לימוד ארמית במשחק והנאה
        </h2>
      </div>
        <footer>
          {/* <div className = "bg-[#00A79D] w-full h-1/2 row-span-3"
            style={{
            clipPath: 'path ("M233.931 0.903738C313.043 4.38119 357.382 56.6775 369.625 85.5847L378.807 247.805H-18.071V85.5847C-18.071 85.5847 48.2454 -7.25828 233.931 0.903738Z")'

          }}>
          </div> */}

        </footer>
    </div>
  );
}
