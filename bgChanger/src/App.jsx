import React,{useState} from 'react'

const App = () => {
    const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap bg-amber-200 justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 text-white shadow-lg 
          rounded-full' style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}
          >
            Red
          </button>
          <button className='outline-none px-4 py-1 text-white shadow-lg 
          rounded-full' style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}
          >
            Green
          </button>
          <button className='outline-none px-4 py-1 text-white shadow-lg 
          rounded-full' style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button className='outline-none px-4 py-1 text-white shadow-lg 
          rounded-full' style={{backgroundColor: "yellow"}}
          onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button className='outline-none px-4 py-1 text-white shadow-lg 
          rounded-full' style={{backgroundColor: "black"}}
          onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>

    </div>
  )
}

export default App