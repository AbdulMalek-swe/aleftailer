import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox } from '@mui/material';
import axios from 'apiService/axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
const Modal = () => {
  const user = useSelector(state=>state.reducer.user)
  const [isOpen, setIsOpen] = useState(true);
  
  useEffect(() => {
    if(user.isSubscribe){
      setIsOpen(false)
    }
   else{
    setInterval(() => {
      setIsOpen(false)
    }, 20000);
   }
  },[user?.isSubscribe])
  const closeModal = () => {
    setIsOpen(false);
  };
  const [email,setEmail] = useState('')
   const subscribe = () =>{
    axios.patch('/user/subscribe',{email:email})
    .then(res=>{
      console.log(res);
      setEmail('')
    })
    .catch(err=>{
      toast.error(err?.response?.data.error)
      setEmail('')
    })
   }
  return (
    <div className='w-1/2'>
      <ModalArea isOpen={isOpen} onClose={closeModal}  setEmail={setEmail} subscribe={subscribe} email={email}/>
    </div>
  );
};

export default Modal;

export const ModalArea = ({ isOpen, onClose,setEmail,subscribe,email }) => {
  if (!isOpen) return null;
  const handleClose = () => {
    onClose();
  };
      
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  ">
      <div className="bg-white p-6 rounded-lg relative lg:w-1/3 sm:w-1/2 w-11/12 font-arial ">
        <h2 className="text-3xl mt-7 font-bold font-arial text-center">ALEF</h2>
        <div className='text-center flex justify-center mt-2.5 mb-7'>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.3656 5.85375L28.0641 3.40828L25.6594 2.6625L25.8169 2.1825L22.3387 1.0875L22.1775 1.58156L20.1038 0.9375L18.1781 5.85375H15.1931L13.4517 6.55641L13.6659 2.02219L9.55688 1.64344L9.56813 1.40203L6.77625 1.14562L6.765 1.38609L1.89187 0.9375L1.75734 5.67844L1.56328 5.6625L1.49953 8.19609L1.68516 8.20594L1.56656 12.3628H0.9375V29.0625L4.45312 27.3047L7.96875 29.0625H29.0625V5.85375H27.3656ZM8.83219 6.73875C8.74421 6.80099 8.65106 6.85556 8.55375 6.90188C8.57344 6.60984 8.57109 6.43359 8.54438 6.33094C8.89219 6.02953 9.39563 5.82188 9.94172 5.79609L10.7133 5.75953C10.7662 5.75672 10.8187 5.75578 10.8698 5.75578C11.7422 5.75578 12.278 6.11062 12.0755 6.57797C11.8598 7.07344 11.7844 7.90969 11.9058 8.43469C11.9972 8.83219 11.6391 9.07219 11.0531 9.07219C10.8628 9.07219 10.6491 9.04688 10.4184 8.99344L9.66656 8.81813C9.13781 8.69484 8.68219 8.40281 8.39391 8.04656C8.44734 7.91766 8.48578 7.67156 8.52703 7.22719C8.69156 7.27594 8.88844 7.30219 9.11953 7.26516C10.4053 7.06125 9.52312 6.25406 8.83219 6.73875ZM2.74406 1.89891L6.72516 2.26594L6.60422 4.88672L6.59672 5.13891C6.47115 5.09021 6.34242 5.05012 6.21141 5.01891L5.45953 4.84312C5.21907 4.78519 4.9728 4.75484 4.72547 4.75266C4.21406 4.75266 3.82547 4.90125 3.60234 5.18203C3.46031 5.36109 3.40453 5.58281 3.43031 5.81578L2.63531 5.75016L2.74406 1.89891ZM2.56313 8.25562L3.33891 8.29922C3.34781 8.31422 3.35156 8.33016 3.36141 8.34516C3.57328 8.66766 4.00828 8.87297 4.57594 8.93062C4.26797 9.59109 3.80391 10.2816 3.09562 10.8131L2.47781 11.2762L2.56313 8.25562ZM4.61156 12.3633H2.44594L2.47031 11.5247L3.31969 11.602L4.67062 11.7244L4.61156 12.3633ZM6.39047 12.3633H6.23578C6.28969 12.2653 6.34359 12.1673 6.39937 12.0605L6.39047 12.3633ZM5.72531 12.3633H5.05312L5.14734 11.3264L3.35859 11.1642C4.19906 10.5333 4.72406 9.70875 5.05547 8.94516L5.08547 8.94422L5.85703 8.90812C6.32659 8.88669 6.78351 8.74915 7.18687 8.50781C6.9037 9.86132 6.41055 11.1622 5.72531 12.3633ZM6.65438 7.04109C6.87516 7.11937 7.07438 7.12875 7.245 7.11047C7.20469 7.55531 7.19812 7.80375 7.22719 7.94063C6.87984 8.23875 6.37828 8.44359 5.83641 8.46891L5.06484 8.505C5.01207 8.50763 4.95924 8.50888 4.90641 8.50875C4.035 8.50875 3.50016 8.15391 3.70266 7.68703C3.91828 7.19156 3.99469 6.35578 3.87188 5.82984C3.78 5.43281 4.13906 5.19187 4.72453 5.19187C4.91484 5.19187 5.12906 5.21766 5.35922 5.27109L6.11156 5.44688C6.64453 5.57062 7.10156 5.86687 7.38984 6.22594C7.34484 6.32203 7.31063 6.49453 7.27781 6.78516C7.19023 6.72232 7.10835 6.65189 7.03312 6.57469C6.44062 5.97328 5.42719 6.6075 6.65438 7.04109ZM7.8 8.11313C7.38328 8.07516 7.245 8.45531 7.36875 7.09969C7.4925 5.74312 7.55953 6.1425 7.97672 6.18094C8.39297 6.21891 8.53219 5.83781 8.40844 7.19391C8.28375 8.55047 8.21672 8.15109 7.8 8.11313ZM9.77063 12.3633H8.96766C8.57737 11.1492 8.363 9.88538 8.33109 8.61047C8.68402 8.9216 9.10881 9.14003 9.56719 9.24609L10.3191 9.42094L10.3486 9.42656C10.5361 10.2375 10.9041 11.1445 11.6161 11.917L9.82688 11.753L9.77063 12.3633ZM10.2117 12.3633L10.2234 12.2306L11.5758 12.3548L11.6691 12.3637L10.2117 12.3633ZM12.3136 12.0253L11.9391 11.6189C11.3377 10.9664 11.0077 10.2028 10.8234 9.49734C10.9008 9.50344 10.9791 9.51188 11.0531 9.51188C11.5645 9.51188 11.9531 9.36422 12.1762 9.08344C12.2437 8.99906 12.2869 8.90344 12.3183 8.80359L12.4655 8.81203L12.3136 12.0253ZM12.5719 6.56437L12.5372 6.56156C12.5841 6.33703 12.5447 6.11484 12.4167 5.91937C12.1655 5.53641 11.6011 5.31656 10.8698 5.31656C10.8122 5.31656 10.7527 5.31797 10.6931 5.32078L9.92109 5.35734C9.73767 5.36781 9.55562 5.39543 9.37734 5.43984L9.51562 2.52281L12.7486 2.82094L12.5719 6.56437ZM22.9045 2.18672L24.7055 2.75391L23.6906 5.85375H21.7083L22.9045 2.18672ZM24.2288 17.5561V20.9353C24.2288 22.1016 24.1289 23.2828 23.4183 24.2658C22.493 25.5464 21.0248 26.4778 19.3945 26.423C16.2731 26.3184 14.5603 23.8636 14.5603 20.9353V17.5561C14.3038 17.4659 14.0816 17.2984 13.9242 17.0767C13.7668 16.855 13.682 16.59 13.6814 16.3181C13.6906 15.9745 13.8336 15.6481 14.08 15.4083C14.3263 15.1685 14.6565 15.0344 15.0002 15.0345C15.344 15.0345 15.6741 15.1688 15.9204 15.4086C16.1666 15.6485 16.3095 15.975 16.3186 16.3186C16.3181 16.5905 16.2333 16.8555 16.0759 17.0773C15.9185 17.299 15.6962 17.4664 15.4397 17.5566V19.9528C15.4397 20.7103 15.3347 21.6084 15.5133 22.3552C15.9389 24.1317 17.482 25.6078 19.3945 25.5436C21.3703 25.4775 23.2702 23.9766 23.34 21.8864C23.3616 21.2419 23.3498 20.5973 23.3498 19.9528V17.5566C23.0934 17.4664 22.8711 17.2989 22.7137 17.0772C22.5563 16.8555 22.4715 16.5905 22.4709 16.3186C22.4801 15.975 22.623 15.6485 22.8693 15.4087C23.1156 15.1689 23.4458 15.0347 23.7895 15.0347C24.1333 15.0347 24.4634 15.1689 24.7097 15.4087C24.956 15.6485 25.099 15.975 25.1081 16.3186C25.1072 16.5904 25.0222 16.8553 24.8647 17.0768C24.7073 17.2984 24.4851 17.4658 24.2288 17.5561ZM28.1836 12.3633H15.6328V6.73266H28.1836V12.3633Z" fill="#4F4848" />
          </svg>
        </div>
        <p className='text-xl text-center text-black mb-7'>ENTER YOUR EMAIL AND GET <span className='text-red000'>25% OFF</span> YOUR FIRST PURCHASE!  </p>
        <div className='flex justify-center mb-7'>
          <div className=''>
            <input className='border border-primary block text-primary placeholder:plcaholder-primary363 placeholder-xs p-4 w-full mb-7  focus:outline-none' placeholder='Subscribe To Our Newsletter ' type='email' onChange={(e)=>setEmail(e.target.value)} value={email} />
            <div className='flex justify-around'>
              <button className='bg-black text-white rounded text-sm py-3 px-5'>No Thanks</button>
              <button className='bg-black text-white rounded text-sm py-3 px-10' onClick={()=>subscribe()} type='submit'>Enter</button>
            </div>
          </div>
        </div>
        <div>
          <div className="form-control">
            <label className="label cursor-pointer flex items-center">
              <Checkbox
                defaultChecked
                sx={{
                  color: '#656363',
                  '&.Mui-checked': {
                    color: '#656363',
                  },
                  border: '3px red green'
                }}
              />
              <p className='text-primary363'>Do not show it anymore.</p>
            </label>
          </div>

        </div>
        <div className="mt-6   flex justify-end">
          <button
            className="absolute  text-primary363 top-5 left-1/2 transform -translate-x-1/2  " // Added absolute, top-2, and right-2 classes
            onClick={handleClose}
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>

  );
};
