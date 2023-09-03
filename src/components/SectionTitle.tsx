import React from 'react'

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className='text-5xl font-bold text-slate-500 text-center w-full mb-10'
        >
            {children}</div>
    )
}

export default SectionTitle