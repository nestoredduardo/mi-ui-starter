import React from 'react'

export interface IThingProps {
  children: React.ReactNode
}

export const Thing: React.FC<IThingProps> = ({ children }) => {
  return (
    <div className="bg-indigo-300 text-indigo-600 p-4 rounded-lg">
      {children || `the snozzberries taste like snozzberries`}
    </div>
  )
}
