function Test() {
  return (
    <>
      <nav className="">
        <div className="grid grid-cols-7">
            <div className="grid-span-1 pt-2">
          <div id="1" className="bg-red-100 flex flex-row items-center    ">
            <div className="bg-gray-200 ">1</div>
            <div>2</div>
            <div>3</div>
          </div>

          <div id="2" className="col-start-3 col-end-6 mx-2 flex">
            <div className="flex justify-center items-center">
              <div className=" w-2/3 ">
                <input
                  className="w-full   border-b-2"
                  type="text"
                  placeholder="search..."
                />
              </div>
              <div>lupa</div>
            </div>
          </div>
          <div
            id="3"
            className="bg-red-100   grid  grid-col-3     col-start-6 col-end-8  items-center "
          >

          
            <div className=" flex w-full justify-center  items-center">

            <div className="flex w-[15%] justify-start">
              <div className=" w-full bg-green-300">
               1
                </div>
                </div>

              <div className="w-3/5 flex justify-center ">
                <div className="w-1/2  ">2</div>

                <div className="w-1/2">3</div>
              </div>
            <div className="flex w-[15%] justify-end">
              <div className=" w-full bg-green-300">
                4
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>

      </nav>
    </>
  );
}

export default Test;
