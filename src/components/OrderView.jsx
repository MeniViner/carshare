

// // import React from 'react';
// // import { t } from 'i18next';
// // import Swal from 'sweetalert2';
// // import '../styles/orderView.css';

// // const OrderView = ({ selectedCar, reservationData, onConfirmOrder }) => {
// //   const { startDate, startTime, endDate, endTime, selectedHours, selectedDays, totalCost } = reservationData;

// //   const handleConfirmOrder = () => {
// //     const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    
// //     const newStartTime = new Date(`${startDate}T${startTime}`);
// //     const newEndTime = new Date(`${endDate}T${endTime}`);
// //     const reservationId = Date.now().toString(36) + Math.random().toString(36).substr(2);

// //     const isOverlapping = storedReservations.some(reservation => {
// //       if (reservation.carId !== selectedCar.id) return false;

// //       const reservationStart = new Date(`${reservation.startDate}T${reservation.startTime}`);
// //       const reservationEnd = new Date(`${reservation.endDate}T${reservation.endTime}`);

// //       return (newStartTime < reservationEnd && newEndTime > reservationStart);
// //     });

// //     if (isOverlapping) {
// //       Swal.fire(t('time conflict'), t('car already reserved'), 'error');
// //       return;
// //     }

// //     storedReservations.push({
// //       reservationId,
// //       carId: selectedCar.id,
// //       startDate,
// //       startTime,
// //       endDate,
// //       endTime,
// //       selectedHours,
// //       selectedDays,
// //       totalCost,
// //     });

// //     localStorage.setItem('reservations', JSON.stringify(storedReservations));
// //     Swal.fire(t('order confirmed'), t('car reserved successfully'), 'success');
// //     onConfirmOrder();
// //   };

// //   return (
// //     <div className="order-view-container">
// //       <h3>{t('order details for')} {selectedCar.brand} {selectedCar.model}</h3>
// //       <p>{t('from')} {new Date(startDate).toLocaleDateString()} {t('at')} {startTime}</p>
// //       <p>{t('until')} {new Date(endDate).toLocaleDateString()} {t('at')} {endTime}</p>
// //       <p>{t('so, you have')} {selectedDays} {t('days and')} {selectedHours} {t('hours')}</p>
// //       <p>{t('and your total cost will be')} {totalCost}₪</p>
// //       <div className="ovc-btn">
// //         <button onClick={handleConfirmOrder}>{t('confirm order')}</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderView;


















// // import React, { useState } from 'react';
// // import { useTranslation } from 'react-i18next';
// // import Swal from 'sweetalert2';
// // import { format, differenceInHours, differenceInDays } from 'date-fns';
// // import '../styles/orderView.css';

// // const OrderView = ({ selectedCar, reservationData, onConfirmOrder }) => {
// //   const { t } = useTranslation();
// //   const [isLoading, setIsLoading] = useState(false);
// //   const { startDate, startTime, endDate, endTime, selectedHours, selectedDays, totalCost, isHourly } = reservationData;

// //   const calculateActualCost = () => {
// //     const start = new Date(`${startDate}T${startTime}`);
// //     const end = new Date(`${endDate}T${endTime}`);
// //     const hoursDiff = differenceInHours(end, start);
// //     const daysDiff = differenceInDays(end, start);

// //     let cost = 0;
// //     if (isHourly) {
// //       cost = hoursDiff * selectedCar.pricePerHour;
// //     } else {
// //       cost = daysDiff * selectedCar.pricePerDay;
// //       const remainingHours = hoursDiff % 24;
// //       cost += remainingHours * selectedCar.pricePerHour;
// //     }

// //     return Math.max(cost + selectedCar.unlockFee, 0);
// //   };

// //   const actualCost = calculateActualCost();

// //   const handleConfirmOrder = async () => {
// //     setIsLoading(true);
// //     const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    
// //     const newStartTime = new Date(`${startDate}T${startTime}`);
// //     const newEndTime = new Date(`${endDate}T${endTime}`);
// //     const reservationId = Date.now().toString(36) + Math.random().toString(36).substr(2);

// //     const isOverlapping = storedReservations.some(reservation => {
// //       if (reservation.carId !== selectedCar.id) return false;

// //       const reservationStart = new Date(`${reservation.startDate}T${reservation.startTime}`);
// //       const reservationEnd = new Date(`${reservation.endDate}T${reservation.endTime}`);

// //       return (newStartTime < reservationEnd && newEndTime > reservationStart);
// //     });

// //     if (isOverlapping) {
// //       setIsLoading(false);
// //       Swal.fire(t('time conflict'), t('car already reserved'), 'error');
// //       return;
// //     }

// //     storedReservations.push({
// //       reservationId,
// //       carId: selectedCar.id,
// //       startDate,
// //       startTime,
// //       endDate,
// //       endTime,
// //       selectedHours,
// //       selectedDays,
// //       totalCost: actualCost,
// //     });

// //     localStorage.setItem('reservations', JSON.stringify(storedReservations));
    
// //     setTimeout(() => {
// //       setIsLoading(false);
// //       Swal.fire(t('order confirmed'), t('car reserved successfully'), 'success');
// //       onConfirmOrder();
// //     }, 1500);
// //   };

// //   return (
// //     <div className="order-view-container">
// //       <h3>{t('order details for')} {selectedCar.brand} {selectedCar.model}</h3>
// //       <div className="order-details">
// //         <p><strong>{t('from')}:</strong> {format(new Date(startDate), 'dd/MM/yyyy')} {t('at')} {startTime}</p>
// //         <p><strong>{t('until')}:</strong> {format(new Date(endDate), 'dd/MM/yyyy')} {t('at')} {endTime}</p>
// //         <p><strong>{t('duration')}:</strong> {selectedDays} {t('days')} {t('and')} {selectedHours} {t('hours')}</p>
// //         <p><strong>{t('unlock fee')}:</strong> ₪{selectedCar.unlockFee}</p>
// //         <p className="total-cost">
// //           <strong>{t('total cost')}:</strong> ₪{actualCost}
// //         </p>
// //       </div>
// //       <button 
// //         className="confirm-button"
// //         onClick={handleConfirmOrder}
// //         disabled={isLoading}
// //       >
// //         {isLoading ? (
// //           <div className="loading-spinner" />
// //         ) : (
// //           t('confirm order')
// //         )}
// //       </button>
// //     </div>
// //   );
// // };

// // export default OrderView;















// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import Swal from 'sweetalert2';
// import { format, differenceInHours, differenceInDays } from 'date-fns';
// import { collection, addDoc } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { db } from '../data/firebaseConfig';
// import '../styles/orderView.css';
// import { useNavigate } from 'react-router-dom';  

// const OrderView = ({ selectedCar, reservationData, onConfirmOrder }) => {
//   const { t } = useTranslation();
//   const [isLoading, setIsLoading] = useState(false);
//   const { startDate, startTime, endDate, endTime, selectedHours, selectedDays, isHourly } = reservationData;
//   const navigate = useNavigate(); 

//   const calculateActualCost = () => {
//     const start = new Date(`${startDate}T${startTime}`);
//     const end = new Date(`${endDate}T${endTime}`);
//     const hoursDiff = differenceInHours(end, start);
//     const daysDiff = differenceInDays(end, start);

//     let cost = 0;
//     if (isHourly) {
//       cost = hoursDiff * selectedCar.pricePerHour;
//     } else {
//       cost = daysDiff * selectedCar.pricePerDay;
//       const remainingHours = hoursDiff % 24;
//       cost += remainingHours * selectedCar.pricePerHour;
//     }

//     return Math.max(cost + selectedCar.unlockFee, 0);
//   };

//   const actualCost = calculateActualCost();

//   const handleConfirmOrder = async () => {
//     setIsLoading(true);
    
//     const reservationId = Date.now().toString(36) + Math.random().toString(36).substr(2);

//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (!user) {
//       setIsLoading(false);
//       Swal.fire(t('error'), t('user not authenticated'), 'error');
//       return;
//     }

//     try {
//       // Add the reservation to Firebase
//       await addDoc(collection(db, 'reservations'), {
//         reservationId,
//         carId: selectedCar.id,
//         startDate,
//         startTime,
//         endDate,
//         endTime,
//         selectedHours,
//         selectedDays,
//         totalCost: actualCost,
//         userId: user.uid,
//         userEmail: user.email,
//         createdAt: new Date(),
//       });

//       setIsLoading(false);

//       Swal.fire({
//         title: t('order confirmed'),
//         text: t('car reserved successfully'),
//         icon: 'success',
//         timer: 4000,
//         showCancelButton: false,
//         showConfirmButton: false,
//         html: `<button id="go-to-reservation" class="swal2-confirm swal2-styled">${t('go to reservation')}</button>`,
//         didRender: () => {
//           document.getElementById('go-to-reservation').addEventListener('click', () => {
//             navigate('/my-reservations'); 
//           });
//         }
//       });

//       onConfirmOrder();
//     } catch (error) {
//       console.error("Error adding reservation: ", error);
//       setIsLoading(false);
//       Swal.fire(t('error'), t('failed to reserve car'), 'error');
//     }
//   };

//   return (
//     <div className="order-view-container">
//       <h3>{t('order details for')} {selectedCar.brand} {selectedCar.model}</h3>
//       <div className="order-details">
//         <p><strong>{t('from')}:</strong> {format(new Date(startDate), 'dd/MM/yyyy')} {t('at')} {startTime}</p>
//         <p><strong>{t('until')}:</strong> {format(new Date(endDate), 'dd/MM/yyyy')} {t('at')} {endTime}</p>
//         <p><strong>{t('duration')}:</strong> {selectedDays} {t('days')} {t('and')} {selectedHours} {t('hours')}</p>
//         <p><strong>{t('unlock fee')}:</strong> ₪{selectedCar.unlockFee}</p>
//         <p className="total-cost">
//           <strong>{t('total cost')}:</strong> ₪{actualCost}
//         </p>
//       </div>
//       <button 
//         className="confirm-button"
//         onClick={handleConfirmOrder}
//         disabled={isLoading}
//       >
//         {isLoading ? (
//           <div className="loading-spinner" />
//         ) : (
//           t('confirm order')
//         )}
//       </button>
//     </div>
//   );
// };

// export default OrderView;










import React, { useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { format, differenceInHours, differenceInDays, isBefore } from 'date-fns';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../data/firebaseConfig';
import '../styles/orderView.css';
import { useNavigate } from 'react-router-dom';

const OrderView = ({ selectedCar, reservationData, onConfirmOrder }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { startDate, startTime, endDate, endTime, selectedHours, selectedDays, isHourly } = reservationData;
  const navigate = useNavigate();

  const calculateActualCost = useCallback(() => {
    const start = new Date(`${startDate}T${startTime}`);
    const end = new Date(`${endDate}T${endTime}`);
    const hoursDiff = differenceInHours(end, start);
    const daysDiff = differenceInDays(end, start);

    let cost = 0;
    if (isHourly) {
      cost = hoursDiff * selectedCar.pricePerHour;
    } else {
      cost = daysDiff * selectedCar.pricePerDay;
      const remainingHours = hoursDiff % 24;
      cost += remainingHours * selectedCar.pricePerHour;
    }

    return Math.max(cost + selectedCar.unlockFee, 0);
  }, [startDate, startTime, endDate, endTime, isHourly, selectedCar.pricePerHour, selectedCar.pricePerDay, selectedCar.unlockFee]);

  const actualCost = useMemo(() => calculateActualCost(), [calculateActualCost]);

  const handleConfirmOrder = useCallback(async () => {
    setIsLoading(true);
    
    const reservationId = Date.now().toString(36) + Math.random().toString(36).substr(2);

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      setIsLoading(false);
      Swal.fire(t('error'), t('user not authenticated'), 'error');
      return;
    }

    const now = new Date();
    const reservationStart = new Date(`${startDate}T${startTime}`);

    if (isBefore(reservationStart, now)) {
      setIsLoading(false);
      Swal.fire(t('error'), t('cannot book for past dates'), 'error');
      return;
    }

    try {
      // Check for existing reservations
      const reservationsRef = collection(db, 'reservations');
      const q = query(
        reservationsRef, 
        where('userId', '==', user.uid),
        where('carId', '==', selectedCar.id),
        where('startDate', '==', startDate)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setIsLoading(false);
        Swal.fire(t('error'), t('you already have a reservation for this car on this date'), 'error');
        return;
      }

      // Add the reservation to Firebase
      await addDoc(collection(db, 'reservations'), {
        reservationId,
        carId: selectedCar.id,
        startDate,
        startTime,
        endDate,
        endTime,
        selectedHours,
        selectedDays,
        totalCost: actualCost,
        userId: user.uid,
        userEmail: user.email,
        createdAt: new Date(),
      });

      setIsLoading(false);

      Swal.fire({
        title: t('order confirmed'),
        text: t('car reserved successfully'),
        icon: 'success',
        timer: 4000,
        showCancelButton: false,
        showConfirmButton: false,
        html: `<button id="go-to-reservation" class="swal2-confirm swal2-styled">${t('go to reservation')}</button>`,
        didRender: () => {
          document.getElementById('go-to-reservation').addEventListener('click', () => {
            navigate('/my-reservations');
          });
        }
      });

      onConfirmOrder();
    } catch (error) {
      console.error("Error adding reservation: ", error);
      setIsLoading(false);
      Swal.fire(t('error'), t('failed to reserve car'), 'error');
    }
  }, [t, selectedCar.id, startDate, startTime, endDate, endTime, selectedHours, selectedDays, actualCost, navigate, onConfirmOrder]);

  const orderDetails = useMemo(() => [
    { label: t('from'), value: `${format(new Date(startDate), 'dd/MM/yyyy')} ${t('at')} ${startTime}` },
    { label: t('until'), value: `${format(new Date(endDate), 'dd/MM/yyyy')} ${t('at')} ${endTime}` },
    { label: t('duration'), value: `${selectedDays} ${t('days')} ${t('and')} ${selectedHours} ${t('hours')}` },
    { label: t('unlock fee'), value: `₪${selectedCar.unlockFee}` },
    { label: t('total cost'), value: `₪${actualCost}`, className: 'total-cost' }
  ], [t, startDate, startTime, endDate, endTime, selectedDays, selectedHours, selectedCar.unlockFee, actualCost]);

  return (
    <div className="order-view-container">
      <h3>{t('order details for')} {selectedCar.brand} {selectedCar.model}</h3>
      <div className="order-details">
        {orderDetails.map((detail, index) => (
          <p key={index} className={detail.className}>
            <strong>{detail.label}:</strong> {detail.value}
          </p>
        ))}
      </div>
      <button 
        className="confirm-button"
        onClick={handleConfirmOrder}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="loading-spinner" />
        ) : (
          t('confirm order')
        )}
      </button>
    </div>
  );
};

export default React.memo(OrderView);




// **אופטימיזציה של פונקציות**: השתמשנו ב-`useCallback` לפונקציות `calculateActualCost` ו-`handleConfirmOrder` כדי למנוע יצירה מחדש של פונקציות בכל רינדור.
// **שימוש ב-`useMemo`**: השתמשנו ב-`useMemo` לחישוב `actualCost` ו-`orderDetails` כדי למנוע חישובים מיותרים.
// **שיפור ביצועים**: הוצאנו את רינדור פרטי ההזמנה למערך `orderDetails` שמחושב מראש, כדי למנוע רינדור מיותר.
// **קוד נקי יותר**: ארגנו מחדש את הקוד כדי לשפר את הקריאות והתחזוקתיות שלו.
// **שימוש ב-`React.memo`**: עטפנו את הקומפוננטה כולה ב-`React.memo` כדי למנוע רינדורים מיותרים כאשר ה-props לא משתנים.
// **שמירה על כל התוכן**: כפי שנדרש, שמרנו על כל התוכן והפונקציונליות של הקומפוננטה המקורית.

// Users cannot book for past dates.
// Users cannot make duplicate reservations for the same car on the same date.
// The reservation process is more robust and user-friendly.