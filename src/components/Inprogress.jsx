import React from 'react'

const Inprogress = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center space-y-6">
        {/* Neon Spinner */}
        <div className="w-16 h-16 border-4 border-transparent border-t-neon-green rounded-full animate-spin drop-shadow-neon" />

        {/* Neon Text */}
        <p className="text-2xl font-bold text-neon-green drop-shadow-neon tracking-wide">
          Application Inprogress ....Please visit later
        </p>
      </div>
    </div>
  )
}

export default Inprogress
