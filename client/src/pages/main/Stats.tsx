import React from 'react'
export const stats = [
    {
      value: "7",
      text: "Años de experiencia"
,
    },
    {
      value: "2",
      text: "Sedes Principales",
    },
    {
      value: "0.5k+",
      text: "Habitantes",
    },
    {
      value: "260+",
      text: "Contrucciones",
    },
  ];
const Stats = () => {
    return (
        <div className='bg-[rgba(255,255,255,0.4)] px-[35px] py-[9px] text-xl backdrop-blur-md transition hover:bg-[rgba(255,255,255,0.5)] rounded-[20px] p-12 '>
          <div className='flex flex-wrap gap-y-8'>
            {stats.map((item, index) => {
              return (
                <div
                  key={index}
                  className='min-h-[70px] w-3/6 lg:flex-1   odd:border-r lg:odd:border-r lg:even:border-r lg:even:last:border-none flex flex-col justify-center'
                >
                  <div className='text-2xl lg:text-4xl font-semibold'>
                    {item.value}
                  </div>
                  <div className='text-base lg:text-xl font-light max-w-[110px] mx-auto'>
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
}

export default Stats