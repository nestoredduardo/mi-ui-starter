import React from 'react'

interface IThingProps {
  children: React.ReactNode
}

export const Thing: React.FC<IThingProps> = ({ children }) => {
  return (
    <div className="bg-blue-200 text-blue-400 p-4 rounded-lg">
      {children || `the snozzberries taste like snozzberries`}
    </div>
  )
}
