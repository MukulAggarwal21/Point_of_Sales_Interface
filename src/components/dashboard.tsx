// "use client";

// import { useState } from "react";
// import { ServiceList } from "./service-list";
// import { Cart } from "./cart";
// import { CustomerForm } from "./customer-form";
// import { Receipt } from "./receipt";
// import { PaymentForm } from "./payment-form";
// export const Dashboard = () => {
//   const [step, setStep] = useState<"services" | "customer" | "payment" | "receipt">(
//     "services"
//   );

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto px-4 py-8">
//         <header className="mb-8">
//           <h1 className="text-4xl font-bold">Modern POS System</h1>
//         </header>
        
//         {step === "services" && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="md:col-span-2">
//               <ServiceList />
//             </div>
//             <div className="md:col-span-1">
//               <Cart onCheckout={() => setStep("customer")} />
//             </div>
//           </div>
//         )}
        
//         {step === "customer" && (
//           <CustomerForm 
//             onBack={() => setStep("services")}
//             onNext={() => setStep("payment")}
//           />
//         )}
        
//         {step === "payment" && (
//           <div className="max-w-xl mx-auto">
//             <PaymentForm
//               onBack={() => setStep("customer")}
//               onSuccess={() => setStep("receipt")}
//             />
//           </div>
//         )}
        
//         {step === "receipt" && (
//           <Receipt onNewSale={() => setStep("services")} />
//         )}
//       </div>
//     </div>
//   );
// };


import React from 'react'

export default function dashboard() {
  return (
    <div>dashboard</div>
  )
}
