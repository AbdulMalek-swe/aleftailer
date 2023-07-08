import React from 'react';
 import youtube from 'assets/image/youtube.svg'
const MakeOrder = () => {
    return (
        <div className='mt-48 container-sk'>
            <div>
                  <img src={youtube} className='object-contain' alt='loading...'/>
            </div>
            <div className='mx-20 my-7'>
              <p>loarem impus</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
                  <img src={youtube} className='object-contain' alt='loading...'/>
                 <img src={youtube} className='object-contain' alt='loading...'/>
                  <img src={youtube} className='object-contain' alt='loading...'/> 
            </div>
        </div>
    );
};


export default MakeOrder;