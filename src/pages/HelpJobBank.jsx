// import  { useState } from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import backImage from '../../public/backreomove.png';



// const HelpJobBank = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     amount: '',
//     category: 'health',
//     name: '',
//     phone: '',
//     email: '',
//     paymentMethod: ''
//   });

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handleBack = () => {
//     setStep(step - 1);
//   };

//   const handleTabClick = (stepNumber) => {
//     setStep(stepNumber);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div
//       className="flex justify-center items-center h-screen w-[70%] md:w-[90%] m-auto mt-5 shadow-lg border-l-4 border-b-4 border-red-400"
//       style={{ backgroundImage: `url(${backImage})`, backgroundSize: 'cover' }}
//     >
//       <div className="bg-white w-full md:w-3/4 lg:w-1/3 p-4 rounded-md shadow-md relative">
//         <div className="text-center mb-4">
//           <h1 className="text-lg font-normal" style={{ paddingTop: '0.5rem' }}>
//             <span className="text-red-500 font-bold" style={{ fontSize: '24px' }}>
//               <Typewriter
//                 words={['Welcome To', 'Job Bank Portal', 'Make a Difference', 'Support a Cause', 'Help Those in Need', 'Change Lives.']}
//                 loop={true}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={100}
//                 deleteSpeed={30}
//                 delaySpeed={1000}
//               />
//             </span>
//           </h1>
//         </div>
//         <div className="flex justify-between mb-4 space-x-1">
//           <button
//             className={`p-1 w-1/3 ${step === 1 ? 'bg-red-500 text-white' : 'hover:bg-red-600 Hover: text-red-700'} font-semibold py-1 border ${step === 1 ? 'border-transparent' : 'border-red-500'} hover:text-white rounded transition duration-300`}
//             onClick={() => handleTabClick(1)}
//           >
//             Job Seeker
//           </button>
//           <button
//             className={`p-1 w-1/3 ${step === 2 ? 'bg-red-500 text-white' : 'hover:bg-red-600 text-red-700'} font-semibold py-1 border ${step === 2 ? 'border-transparent' : 'border-red-500'} hover:text-white rounded transition duration-300`}
//             onClick={() => handleTabClick(2)}
//           >
//             Hiring
//           </button>
//         </div>

//         {step === 1 && (
//           <div className="space-y-3">
//             <h3 className="text-red-500 text-xl font-bold">Apply for a Job</h3>
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter Your Full Name"
//                 className="border rounded-sm border-red-600 p-2 w-full shadow-md"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Your Email"
//                 className="border rounded-sm border-red-600 p-2 w-full shadow-md"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Enter Your Mobile Number"
//                 className="border rounded-sm border-red-600 p-2 w-full shadow-md"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="border rounded-sm border-red-600 p-2 w-full shadow-md">
//               <h1>Gender</h1>
//               <label className="mr-2">Male</label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 onChange={handleChange}
//               />
//               <label className="ml-4 mr-2">Female</label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="border rounded-sm border-red-600 p-2 w-full shadow-md">
//               <h1>Send Your CV</h1>
//               <input
//                 type="file"
//                 name="file"
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <textarea
//                 name="address"
//                 placeholder="Address"
//                 className="border rounded-sm border-red-600 p-2 w-full shadow-md"
//                 value={formData.address}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex justify-center">
//               <button
//                 className="bg-red-600 text-white font-semibold py-2 px-4 w-full  hover:bg-red-500 border border-red-600 rounded transition duration-300"
//                 onClick={handleNext}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="space-y-3">
//             <h3 className="text-red-500 text-xl font-bold">Job Detail</h3>
//             <div>
//               <input
//                 type="text"
//                 name="companyName"
//                 placeholder="Company Name"
//                 className="border rounded-sm border-red-600 p-2 w-full shadow-md"
//                 value={formData.companyName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="hireName"
//                 placeholder="Hire Name"
//                 className="border rounded-sm border-red-600 p-2 w-full shadow-md"
//                 value={formData.hireName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone Number"
//                 className="border rounded-sm border-red-600 p-2 w-full shadow-md"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 className="border rounded-sm border-red-600 p-2 w-full shadow-md"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <textarea
//                 name="jobDescription"
//                 placeholder="Job Description With Address"
//                 className="border rounded-sm border-red-600 p-2 w-full shadow-md"
//                 value={formData.jobDescription}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex justify-center">
//               <button
//                 className="bg-red-600 text-white font-semibold py-2 px-4 w-full  hover:bg-red-500 border border-red-600 rounded transition duration-300"
//                 onClick={handleBack}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default HelpJobBank;