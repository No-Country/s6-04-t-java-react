
export default function ExpensesHistory() 
 {
<<<<<<< HEAD
    const checkIcon = <svg width="18" height="19" fill="none"><path fill="#4A9D57" d="M7.74 11.12 5.782 9.163a.826.826 0 0 0-.607-.248c-.24 0-.45.09-.63.27a.853.853 0 0 0-.247.63c0 .255.082.465.247.63L7.11 13.01a.853.853 0 0 0 .63.248.853.853 0 0 0 .63-.248l5.107-5.107a.826.826 0 0 0 .248-.608c0-.24-.09-.45-.27-.63a.853.853 0 0 0-.63-.247.853.853 0 0 0-.63.247L7.74 11.12ZM9 18.5a8.759 8.759 0 0 1-3.51-.71 9.082 9.082 0 0 1-2.858-1.922A9.082 9.082 0 0 1 .71 13.01 8.759 8.759 0 0 1 0 9.5c0-1.245.236-2.415.71-3.51a9.082 9.082 0 0 1 1.922-2.858A9.095 9.095 0 0 1 5.49 1.208 8.769 8.769 0 0 1 9 .5c1.245 0 2.415.236 3.51.708a9.095 9.095 0 0 1 2.857 1.924 9.082 9.082 0 0 1 1.924 2.858A8.759 8.759 0 0 1 18 9.5a8.759 8.759 0 0 1-.71 3.51 9.082 9.082 0 0 1-1.922 2.857 9.082 9.082 0 0 1-2.858 1.924A8.759 8.759 0 0 1 9 18.5Z"/></svg>
    const alertIcon =<svg width="18" height="19" fill="none"><path fill="#E1AF3F" d="M18 9.5a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9 5a1.018 1.018 0 0 0-1.013 1.12l.394 3.945a.621.621 0 0 0 1.238 0l.393-3.946A1.019 1.019 0 0 0 9 5Zm.002 6.75a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"/></svg>
=======
    const leftArrow = <svg width="20" height="20" className="fill-rose-500" viewBox="0 0 24 24"><path  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm3.5 10.75h-5.19l1.72 1.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-3-3a.754.754 0 0 1 0-1.06l3-3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.72 1.72h5.19c.41 0 .75.34.75.75s-.34.75-.75.75Z"/></svg>;
    const  rightArrow = <svg width="20" height="20" className="fill-emerald-500" viewBox="0 0 24 24"><path  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.03 10.53-3 3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.72-1.72H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.19l-1.72-1.72a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3 3c.29.29.29.77 0 1.06Z"/></svg>;
>>>>>>> 00fe1d2c299e42720abc46aaa15079566f7952b0
    return (
        <div className='w-2/4'>
            {/* <Expenses /> */}
            <div className='bg-white rounded-2xl mt-6 p-6 '>
                <h2 className='font-semibold text-2xl'>Historial</h2>

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 bg-slate-100"><p className='text-left text-xs text-zinc-400 font-semibold font-Inter'>Periodo</p></div>
<<<<<<< HEAD
                    <div className="basis-1/4 items-end bg-slate-100 flex-row items-center justify-center" ><p className='text-xs text-zinc-400 font-Inter'>Vencimiento</p></div>    
                    <div className="basis-1/4 items-end bg-slate-100 flex-row items-center justify-center"><p className='text-xs text-zinc-400 font-Inter'>Estado</p></div>           
=======
                    <div className="basis-1/4 items-end bg-slate-100"><p className='text-right text-xs text-zinc-400 font-Inter'>Vencimiento</p></div>    
                    <div className="basis-1/4 items-end bg-slate-100"><p className='text-right text-xs text-zinc-400 font-Inter'>Estado</p></div>           
>>>>>>> 00fe1d2c299e42720abc46aaa15079566f7952b0
                </div>

                

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 flex flex-arrow items-center"> <p className='text-left  font-poppins'>Diciembre 2022</p></div>
<<<<<<< HEAD
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-start"><p className='text-right text-sm text-zinc-800'>10/01/2023</p></div>    
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-start">{alertIcon}<p className='text-right text-sm text-zinc-800'>Pendiente</p></div>             
=======
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>10/01/2023</p></div>    
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end">{leftArrow}<p className='text-right text-sm text-zinc-800'>Pendiente</p></div>             
>>>>>>> 00fe1d2c299e42720abc46aaa15079566f7952b0
                </div>

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 flex flex-arrow items-center"> <p className='text-left  font-poppins'>Noviembre 2022</p></div>
<<<<<<< HEAD
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-start"><p className='text-right text-sm text-zinc-800'>09/12/2022</p></div>  
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-start">{checkIcon}<p className='text-right text-sm text-zinc-800'>Pagada</p></div>               
=======
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>09/12/2022</p></div>  
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end">{rightArrow}<p className='text-right text-sm text-zinc-800'>Pagada</p></div>               
>>>>>>> 00fe1d2c299e42720abc46aaa15079566f7952b0
                </div>

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 flex flex-arrow items-center"> <p className='text-left  font-poppins'>Octubre 2022</p></div>
<<<<<<< HEAD
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-start"><p className='text-right text-sm text-zinc-800'>10/11/2022</p></div>     
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-start">{checkIcon}<p className='text-right text-sm text-zinc-800'>Pagada</p></div>           
=======
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>10/11/2022</p></div>     
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end">{rightArrow}<p className='text-right text-sm text-zinc-800'>Pagada</p></div>           
>>>>>>> 00fe1d2c299e42720abc46aaa15079566f7952b0
                </div>

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 flex flex-arrow items-center"> <p className='text-left  font-poppins'>Septiembre 2022</p></div>
<<<<<<< HEAD
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-start"><p className='text-right text-sm text-zinc-800'>12/10/2022</p></div>    
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-start">{checkIcon}<p className='text-right text-sm text-zinc-800'>Pagada</p></div>            
=======
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>12/10/2022</p></div>    
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end">{rightArrow}<p className='text-right text-sm text-zinc-800'>Pagada</p></div>            
>>>>>>> 00fe1d2c299e42720abc46aaa15079566f7952b0
                </div>

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 flex flex-arrow items-center"> <p className='text-left  font-poppins'>Agosto 2022</p></div>
<<<<<<< HEAD
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-start"><p className='text-right text-sm text-zinc-800'>10/09/2022</p></div>  
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-start">{checkIcon}<p className='text-right text-sm text-zinc-800'>Pagada</p></div>              
=======
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>10/09/2022</p></div>  
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end">{rightArrow}<p className='text-right text-sm text-zinc-800'>Pagada</p></div>              
>>>>>>> 00fe1d2c299e42720abc46aaa15079566f7952b0
                </div>


            </div>
               
        </div>
    )
}