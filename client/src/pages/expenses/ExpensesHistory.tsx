
export default function ExpensesHistory() 
 {
    const leftArrow = <svg width="50" height="50" className="fill-rose-500" viewBox="0 0 24 24"><path  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm3.5 10.75h-5.19l1.72 1.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-3-3a.754.754 0 0 1 0-1.06l3-3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.72 1.72h5.19c.41 0 .75.34.75.75s-.34.75-.75.75Z"/></svg>;
    const  rightArrow = <svg width="50" height="50" className="fill-emerald-500" viewBox="0 0 24 24"><path  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.03 10.53-3 3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.72-1.72H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.19l-1.72-1.72a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3 3c.29.29.29.77 0 1.06Z"/></svg>;
    return (
        <div className='w-2/4'>
            {/* <Expenses /> */}
            <div className='bg-white rounded-2xl mt-6 p-6 '>
                <h2 className='font-semibold text-2xl'>Historial</h2>

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 bg-slate-100"><p className='text-left text-xs text-zinc-400 font-semibold font-Inter'>Periodo</p></div>
                    <div className="basis-1/4 items-end bg-slate-100"><p className='text-right text-xs text-zinc-400 font-Inter'>Vencimiento</p></div>    
                    <div className="basis-1/4 items-end bg-slate-100"><p className='text-right text-xs text-zinc-400 font-Inter'>Estado</p></div>           
                </div>

                

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 flex flex-arrow items-center"> <p className='text-left  font-poppins'>Diciembre 2022</p></div>
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>10/01/2023</p></div>    
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>Pendiente</p></div>             
                </div>

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 flex flex-arrow items-center"> <p className='text-left  font-poppins'>Noviembre 2022</p></div>
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>09/12/2022</p></div>  
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>Pagada</p></div>               
                </div>

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 flex flex-arrow items-center"> <p className='text-left  font-poppins'>Octubre 2022</p></div>
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>10/11/2022</p></div>     
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>Pagada</p></div>           
                </div>

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 flex flex-arrow items-center"> <p className='text-left  font-poppins'>Septiembre 2022</p></div>
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>12/10/2022</p></div>    
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>Pagada</p></div>            
                </div>

                <div className="flex flex-row justify-between " >
                    <div className="basis-3/4 flex flex-arrow items-center"> <p className='text-left  font-poppins'>Agosto 2022</p></div>
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>10/09/2022</p></div>  
                    <div className="basis-1/4 items-end  flex flex-row items-center justify-end"><p className='text-right text-sm text-zinc-800'>Pagada</p></div>              
                </div>


            </div>
               
        </div>
    )
}