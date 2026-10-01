

import DesignPage from "./components/design"
import Think from "./components/think"


export default function Home(){
  return(
    <div className="min-h-screen  bg-[hsl(216,12%,8%)] flex items-center justify-center p-6">
      <DesignPage/>
      {/* <Think/> */}

    </div>
  )
}