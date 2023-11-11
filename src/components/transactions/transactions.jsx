// import React from "react";
// // import PropTypes from 'prop-types';


// const Transactions = ({ items }) => {
//     return (
//         <Transactions>
//             <thead>
//                 <tr>
//                     <th>Type</th>
//                     <th>Amount</th>
//                     <th>Currency</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 {items.map(({ id, type, amount, currency }) => (
//                     <tr key={id}>
//                         <td>{type}</td>
//                         <td>{amount}</td>
//                         <td>{currency}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </Transactions>
//     );
// };

// export default Transactions

// import PropTypes from 'prop-types';

// const Transactions = ({ items }) => {
//     return (
//         <Transactions>
//             <thead>
//                 <tr>
//                     <th>Type</th>
//                     <th>Amount</th>
//                     <th>Currency</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 {items.map(({ id, type, amount, currency }) => (
//                     <tr key={id}>
//                         <td>{type}</td>
//                         <td>{amount}</td>
//                         <td>{currency}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </Transactions>
//     );
// };

// Transactions.propTypes = {
//     items: PropTypes.arrayOf(
//         PropTypes.exact({
//             id: PropTypes.string.isRequired,
//             type: PropTypes.string.isRequired,
//             amount: PropTypes.string.isRequired,
//             currency: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

// export default Transactions;