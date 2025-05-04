// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom'

// const Project = () => {
//     const location = useLocation()
//     const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)


//     console.log(location.state)
//     return (
//         <main
//             className='h-screen w-screen flex'
//         >
//             <section className="left relative flex flex-col h-full min-w-80 bg-slate-200">
//                 <header
//                     className='flex justify-between items-center p-2 px-4 w-full bg-white'>
//                     <button
//                         className='flex gap-2 '
//                     >

//                         <i className='ri-add-fill mr-1'></i>
//                         <p>Add Collaborator</p>
//                     </button>
//                     <button
//                         onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
//                         className='p-2'
//                     >
//                         <i className="ri-group-fill"></i>
//                     </button>
//                 </header>

//                 <div className="conversation-area flex-grow flex flex-col ">

//                     <div className="message-box p-1 flex-grow flex flex-col gap-1 p">
//                         <div className=" message max-w-64 flex flex-col p-2 bg-slate-50 w-fit rounded-md">
//                             <small
//                                 className='opacity-65 text-xs'
//                             >example@gmail.com</small>
//                             <p className='text-sm '
//                             >Lorem ipsum dolor sit amet.
//                             </p>
//                         </div>

//                         <div className="ml-auto message max-w-64  flex flex-col p-2 bg-slate-50 w-fit rounded-md">
//                             <small
//                                 className='opacity-65 text-xs'
//                             >example@gmail.com</small>
//                             <p className='text-sm '
//                             >Lorem ipsum dolor sit amet.
//                             </p>
//                         </div>


//                     </div>
//                     <div className="inputField w-full flex">
//                         <input className='p-2 px-4 border-none outline-none flex-grow'
//                             type="text" placeholder='Enter message' />
//                         <button
//                             className=' px-5 bg-slate-950 text-white'
//                         >
//                             <i className="ri-send-plane-fill"></i>
//                         </button>
//                     </div>

//                 </div>

//                 <div className={`sidePanel w-full h-full flex flex-col gap-2 bg-slate-50 absolute transition-all ${isSidePanelOpen ? 'translate-x-0' : '-translate-x-full'} top-0`}>

//                     <header
//                         className='flex justify-end p-2 px-3 bg-slate-300'>
//                         <button
//                             onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
//                             className='p-2'
//                         >
//                             <i className='ri-close-fill'></i>
//                         </button>
//                     </header>

//                     <div className="users flex flex-col gap-2">

//                         <div className="user cursor-pointer hover:bg-slate-200 p-2 flex gap-2 items-center">

//                             <div className='aspect-square rounded-full w-fit h-fit flex items-center justify-center  p-5 text-white bg-slate-600'>
//                                 <i className="ri-user-fill absolute "></i>
//                             </div>

//                             <h1
//                                 className='font-semibold text-lg'
//                             >Username</h1>

//                         </div>

//                     </div>

//                 </div>



//             </section>




//         </main>
//     )
// }

// export default Project

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const dummyUsers = [
    { _id: '1', email: 'alice@example.com' },
    { _id: '2', email: 'bob@example.com' },
    { _id: '3', email: 'charlie@example.com' },
];

const Project = () => {
    const location = useLocation();
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUserIds, setSelectedUserIds] = useState(new Set());

    const handleUserClick = (id) => {
        setSelectedUserIds((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id); // Deselect
            } else {
                newSet.add(id); // Select
            }
            return newSet;
        });
    };

    const addCollaborators = () => {
        console.log('Selected User IDs:', Array.from(selectedUserIds));
        setIsModalOpen(false);
    };

    return (
        <main className='h-screen w-screen flex'>
            <section className="left relative flex flex-col h-full min-w-80 bg-slate-200">
                <header className='flex justify-between items-center p-2 px-4 w-full bg-white'>
                    <button onClick={() => setIsModalOpen(true)} className='flex gap-2'>
                        <i className='ri-add-fill mr-1'></i>
                        <p>Add Collaborator</p>
                    </button>
                    <button onClick={() => setIsSidePanelOpen(!isSidePanelOpen)} className='p-2'>
                        <i className="ri-group-fill"></i>
                    </button>
                </header>

                <div className="conversation-area flex-grow flex flex-col ">
                    <div className="message-box p-1 flex-grow flex flex-col gap-1">
                        <div className="message max-w-64 flex flex-col p-2 bg-slate-50 w-fit rounded-md">
                            <small className='opacity-65 text-xs'>example@gmail.com</small>
                            <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="ml-auto message max-w-64 flex flex-col p-2 bg-slate-50 w-fit rounded-md">
                            <small className='opacity-65 text-xs'>example@gmail.com</small>
                            <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="inputField w-full flex">
                        <input className='p-2 px-4 border-none outline-none flex-grow' type="text" placeholder='Enter message' />
                        <button className='px-5 bg-slate-950 text-white'>
                            <i className="ri-send-plane-fill"></i>
                        </button>
                    </div>
                </div>

                <div className={`sidePanel w-full h-full flex flex-col gap-2 bg-slate-50 absolute transition-all ${isSidePanelOpen ? 'translate-x-0' : '-translate-x-full'} top-0`}>
                    <header className='flex justify-end p-2 px-3 bg-slate-300'>
                        <button onClick={() => setIsSidePanelOpen(!isSidePanelOpen)} className='p-2'>
                            <i className='ri-close-fill'></i>
                        </button>
                    </header>

                    <div className="users flex flex-col gap-2">
                        <div className="user cursor-pointer hover:bg-slate-200 p-2 flex gap-2 items-center">
                            <div className='aspect-square rounded-full w-fit h-fit flex items-center justify-center p-5 text-white bg-slate-600'>
                                <i className="ri-user-fill absolute "></i>
                            </div>
                            <h1 className='font-semibold text-lg'>Username</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-md w-96 max-w-full relative">
                        <header className='flex justify-between items-center mb-4'>
                            <h2 className='text-xl font-semibold'>Select User</h2>
                            <button onClick={() => setIsModalOpen(false)} className='p-2'>
                                <i className="ri-close-fill"></i>
                            </button>
                        </header>
                        <div className="users-list flex flex-col gap-2 mb-16 max-h-96 overflow-auto">
                            {dummyUsers.map(user => (
                                <div
                                    key={user._id}
                                    onClick={() => handleUserClick(user._id)}
                                    className={`user cursor-pointer hover:bg-slate-200 ${selectedUserIds.has(user._id) ? 'bg-slate-200' : ''
                                        } p-2 flex gap-2 items-center`}
                                >
                                    <div className='aspect-square relative rounded-full w-fit h-fit flex items-center justify-center p-5 text-white bg-slate-600'>
                                        <i className="ri-user-fill absolute"></i>
                                    </div>
                                    <h1 className='font-semibold text-lg'>{user.email}</h1>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={addCollaborators}
                            className='absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-600 text-white rounded-md'
                        >
                            Add Collaborators
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Project;





