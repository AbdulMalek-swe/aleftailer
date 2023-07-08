import React from 'react';

const Contact = () => {
    return (
        <div className='bg-contact bg-cover bg-no-repeat '>
            <div className='container-sk pt-52 pb-20'>
                <div className='grid lg:grid-cols-3 grid-cols-2 gap-6'>
                    <div>
                        <form className="space-y-"  >
                            <div className='my-5'>
                                <CustomeLabel name={"Full Name"} />
                                <input
                                    placeholder='Your  Name'
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    className={`block w-full px-5 py-3 mt-2 text-white placeholder-white bg-white8 shadow-lg rounded-lg   `} 
                                    // sdf
                                />
                            </div>
                            <div className='my-5'>
                                <CustomeLabel name={"Email"} />
                                <input
                                    placeholder='Enter Email   '
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    className={`block w-full px-5 py-3 mt-2 text-white placeholder-white bg-white8 shadow-lg rounded-lg   `}

                                />

                            </div>
                            <div className='my-5'>
                                <CustomeLabel name={"Message"} />
                                <textarea
                                    rows={3}
                                    placeholder='Description'
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    className={`block w-full px-5 py-3 mt-2 text-white placeholder-white bg-white8 shadow-lg rounded-lg `}

                                />

                            </div>
                            <div className='' type="submit">
                                <button className='text-xl font-bold font-noto text-center bg-[#FAEFB4] rounded-2xl py-4 hover:bg-red000 cursor-pointer w-full'>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div>
                    sdfsafsa
                    </div>
                    <div className='md:block hidden'>
                        sdafas
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;


export const CustomeLabel = ({ name }) => {
    return (
        <label className="flex mb-2 text-sm text-slate-300 capitalize">

            {name}

            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-asterisk text-red-700" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
            </svg></span>
        </label>
    )

}