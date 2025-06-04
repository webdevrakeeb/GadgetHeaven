// import React from 'react';

// const customLegend = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default customLegend;

export const CustomLegend = () => (
  <div className="flex gap-4 mt-4 justify-center">
    <div className="flex items-center gap-1">
      <span className="w-3 h-3 bg-purple-700 inline-block rounded-sm" />
      <span className="text-purple-700">total</span>
    </div>
    <div className="flex items-center gap-1">
      <span className="w-3 h-3 bg-purple-500 inline-block rounded-sm" />
      <span className="text-purple-500">price</span>
    </div>
    <div className="flex items-center gap-1">
      <span className="w-3 h-3 bg-red-600 inline-block rounded-sm" />
      <span className="text-red-600">rating</span>
    </div>
  </div>
);
