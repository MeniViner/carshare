
// const cars = [
//   {
//     id: 1,
//     category: 'mini',
//     brand: 'Smart',
//     model: 'Fortwo',
//     seats: 2,
//     year: 2018,
//     pricePerHour: 10,
//     pricePerDay: 220,
//     unlockFee: 2,
//     kmPrice: 1,
//     fuelType: 'Electric',
//     fuel: 'NaN',
//     battery: '84%',
//     image: 'https://www.motortrend.com/uploads/sites/10/2018/04/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2018/04/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2018/04/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2018/04/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2018/04/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2018/04/2018-smart-fortwo-electric-drive-prime-coupe-micro-car-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.791929, lng: 35.220848 },
//   },
//   {
//     id: 2,
//     category: 'mini',
//     brand: 'Fiat',
//     model: '500X',
//     seats: 4,
//     year: 2013,
//     pricePerHour: 12,
//     pricePerDay: 220,
//     unlockFee: 2,
//     kmPrice: 1,
//     fuelType: 'Gazoline',
//     fuel: '90%',
//     battery: 'NaN',
//     image: 'https://www.motortrend.com/uploads/sites/10/2015/11/2013-fiat-500-lounge-hatchback-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2015/11/2013-fiat-500-lounge-hatchback-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2015/11/2013-fiat-500-lounge-hatchback-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2015/11/2013-fiat-500-lounge-hatchback-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2015/11/2013-fiat-500-lounge-hatchback-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2015/11/2013-fiat-500-lounge-hatchback-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.795229, lng: 35.218548 }
//   },
//   {
//     id: 3,
//     category: 'mini',
//     brand: 'Mini',
//     model: 'Cooper SE',
//     seats: 4,
//     year: 2024,
//     pricePerHour: 15,
//     pricePerDay: 230,
//     unlockFee: 2,
//     kmPrice: 1,
//     fuelType: 'Gazoline',
//     fuel: '71%',
//     battery: 'NaN',
//     image: 'https://www.motortrend.com/uploads/sites/10/2023/07/2024-mini-hardtop-2-door-cooper-s-signature-3door-hatchback-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2023/07/2024-mini-hardtop-2-door-cooper-s-signature-3door-hatchback-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2023/07/2024-mini-hardtop-2-door-cooper-s-signature-3door-hatchback-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2023/07/2024-mini-hardtop-2-door-cooper-s-signature-3door-hatchback-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2023/07/2024-mini-hardtop-2-door-cooper-s-signature-3door-hatchback-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2023/07/2024-mini-hardtop-2-door-cooper-s-signature-3door-hatchback-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.798329, lng: 35.220148 }
//   },
//   {
//     id: 4,
//     category: 'family',
//     brand: 'Toyota',
//     model: 'Prius',
//     seats: 5,
//     year: 2023,
//     pricePerHour: 20,
//     pricePerDay: 250,
//     unlockFee: 3.5,
//     kmPrice: 1.5,
//     fuelType: 'Hybrid',
//     fuel: '71%',
//     battery: '69%',
//     image: 'https://www.motortrend.com/uploads/sites/10/2023/06/2023-toyota-prius-limited-5door-hatchback-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2023/06/2023-toyota-prius-limited-5door-hatchback-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2023/06/2023-toyota-prius-limited-5door-hatchback-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2023/06/2023-toyota-prius-limited-5door-hatchback-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2023/06/2023-toyota-prius-limited-5door-hatchback-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2023/06/2023-toyota-prius-limited-5door-hatchback-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.796229, lng: 35.217148 }
//   },
//   {
//     id: 5,
//     category: 'family',
//     brand: 'Honda',
//     model: 'Civic',
//     seats: 5,
//     year: 2024,
//     pricePerHour: 18,
//     pricePerDay: 240,
//     unlockFee: 3.5,
//     kmPrice: 1.5,
//     fuelType: 'Gasoline',
//     fuel: '66%',
//     battery: 'NaN',
//     image: 'https://www.motortrend.com/uploads/sites/10/2023/10/2024-honda-civic-sport-sedan-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2023/10/2024-honda-civic-sport-sedan-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2023/10/2024-honda-civic-sport-sedan-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2023/10/2024-honda-civic-sport-sedan-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2023/10/2024-honda-civic-sport-sedan-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2023/10/2024-honda-civic-sport-sedan-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.801100, lng: 35.221348 }
//   },
//   {
//     id: 6,
//     category: 'family',
//     brand: 'Volkswagen',
//     model: 'Golf R',
//     seats: 5,
//     year: 2024,
//     pricePerHour: 22,
//     pricePerDay: 270,
//     unlockFee: 3.5,
//     kmPrice: 1.5,
//     fuelType: 'Gasoline',
//     fuel: '94%',
//     battery: 'NaN',
//     image: 'https://www.motortrend.com/uploads/sites/10/2018/06/2018-volkswagen-golf-r-4wd-5door-hatchback-angular-front.png?fit=around%7C875:492.1875',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2018/06/2018-volkswagen-golf-r-4wd-5door-hatchback-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2018/06/2018-volkswagen-golf-r-4wd-5door-hatchback-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2018/06/2018-volkswagen-golf-r-4wd-5door-hatchback-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2018/06/2018-volkswagen-golf-r-4wd-5door-hatchback-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2018/06/2018-volkswagen-golf-r-4wd-5door-hatchback-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.790829, lng: 35.216648 }
//   },
//   {
//     id: 7,
//     category: 'business',
//     brand: 'Mercedes',
//     model: 'E-Class',
//     seats: 5,
//     year: 2022,
//     pricePerHour: 30,
//     pricePerDay: 320,
//     unlockFee: 5,
//     kmPrice: 2,
//     fuelType: 'Electric',
//     fuel: 'NaN',
//     battery: '83%',
//     image: 'https://www.motortrend.com/uploads/sites/10/2021/12/2022-mercedes-benz-e-class-e350-sedan-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2021/12/2022-mercedes-benz-e-class-e350-sedan-angular-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2021/12/2022-mercedes-benz-e-class-e350-sedan-angular-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2021/12/2022-mercedes-benz-e-class-e350-sedan-angular-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2021/12/2022-mercedes-benz-e-class-e350-sedan-angular-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2021/12/2022-mercedes-benz-e-class-e350-sedan-angular-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.790929, lng: 35.211948 }
//   },
//   {
//     id: 8,
//     category: 'business',
//     brand: 'BMW',
//     model: '5 Series',
//     seats: 5,
//     year: 2022,
//     pricePerHour: 32,
//     pricePerDay: 350,
//     unlockFee: 5,
//     kmPrice: 2,
//     fuelType: 'Gasoline',
//     fuel: '97%',
//     battery: 'NaN',
//     image:  'https://www.motortrend.com/uploads/sites/10/2022/01/2022-bmw-5-series-m-sport-sedan-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-bmw-5-series-m-sport-sedan-doors.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-bmw-5-series-m-sport-sedan-side-view.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-bmw-5-series-m-sport-sedan-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-bmw-5-series-m-sport-sedan-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-bmw-5-series-m-sport-sedan-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.795329, lng: 35.219148 }
//   },
//   {
//     id: 9,
//     category: 'business',
//     brand: 'Audi',
//     model: 'A6',
//     seats: 5,
//     year: 2024,
//     pricePerHour: 35,
//     pricePerDay: 380,
//     unlockFee: 5,
//     kmPrice: 2,
//     fuelType: 'Gasoline',
//     fuel: '61%',
//     battery: 'NaN',
//     image: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.796729, lng: 35.220548 }
//   },
//   {
//     id: 10,
//     category: 'business',
//     brand: 'Audi',
//     model: 'A6',
//     seats: 5,
//     year: 2024,
//     pricePerHour: 35,
//     pricePerDay: 380,
//     unlockFee: 5,
//     kmPrice: 2,
//     fuelType: 'Gasoline',
//     fuel: '61%',
//     battery: 'NaN',
//     image: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.781750, lng: 34.700132 }
//   },
//   {
//     id: 11,
//     category: 'business',
//     brand: 'Audi',
//     model: 'A6',
//     seats: 5,
//     year: 2024,
//     pricePerHour: 35,
//     pricePerDay: 380,
//     unlockFee: 5,
//     kmPrice: 2,
//     fuelType: 'Gasoline',
//     fuel: '61%',
//     battery: 'NaN',
//     image: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2024/01/2024-audi-a6-premium-plus-sport-4wd-sedan-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.739411, lng: 34.948417 }
//   },
//   {
//     id: 12,
//     category: 'SUV',
//     brand: 'Ford',
//     model: 'Edge',
//     seats: 5,
//     year: 2023,
//     pricePerHour: 20,
//     pricePerDay: 250,
//     unlockFee: 3.5,
//     kmPrice: 1.5,
//     fuelType: 'Gasoline',
//     fuel: '80%',
//     battery: 'NaN',
//     image:  'https://www.motortrend.com/uploads/sites/10/2023/09/2024-ford-edge-sel-4wd-suv-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2023/09/2024-ford-edge-sel-4wd-suv-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2023/09/2024-ford-edge-sel-4wd-suv-doors-view.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2023/09/2024-ford-edge-sel-4wd-suv-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2023/09/2024-ford-edge-sel-4wd-suv-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2023/09/2024-ford-edge-sel-4wd-suv-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 32.085300, lng: 34.781768 }
//   },
//   {
//     id: 13,
//     category: 'SUV',
//     brand: 'Kia',
//     model: 'Sportage',
//     seats: 5,
//     year: 2024,
//     pricePerHour: 22,
//     pricePerDay: 260,
//     unlockFee: 3.5,
//     kmPrice: 1.5,
//     fuelType: 'Hybrid',
//     fuel: '75%',
//     battery: '50%',
//     image: 'https://www.motortrend.com/uploads/sites/10/2022/07/2023-kia-sportage-ex-hybrid-4wd-suv-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2022/07/2023-kia-sportage-ex-hybrid-4wd-suv-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2022/07/2023-kia-sportage-ex-hybrid-4wd-suv-doors-view.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2022/07/2023-kia-sportage-ex-hybrid-4wd-suv-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2022/07/2023-kia-sportage-ex-hybrid-4wd-suv-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2022/07/2023-kia-sportage-ex-hybrid-4wd-suv-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 31.768319, lng: 35.213710 }
//   },
//   {
//     id: 14,
//     category: 'SUV',
//     brand: 'Nissan',
//     model: 'Versa',
//     seats: 5,
//     year: 2024,
//     pricePerHour: 21,
//     pricePerDay: 255,
//     unlockFee: 3.5,
//     kmPrice: 1.5,
//     fuelType: 'Gasoline',
//     fuel: '68%',
//     battery: '60%',
//     image:  'https://www.motortrend.com/uploads/sites/10/2023/11/2024-nissan-versa-s-sedan-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2023/11/2024-nissan-versa-s-sedan-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2023/11/2024-nissan-versa-s-sedan-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2023/11/2024-nissan-versa-s-sedan-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2023/11/2024-nissan-versa-s-sedan-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2023/11/2024-nissan-versa-s-sedan-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'קפלן 7'},
//     coordinates: { lat: 32.109333, lng: 34.855499 }
//   },
//   {
//     id: 15,
//     category: 'SUV',
//     brand: 'Ford',
//     model: 'Mustang',
//     seats: 4,
//     year: 2024,
//     pricePerHour: 35,
//     pricePerDay: 400,
//     unlockFee: 5,
//     kmPrice: 2,
//     fuelType: 'Gasoline',
//     fuel: '85%',
//     battery: 'NaN',
//     image:  'https://www.motortrend.com/uploads/sites/10/2023/12/2024-ford-mustang-ecoboost-coupe-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2023/12/2024-ford-mustang-ecoboost-coupe-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2023/12/2024-ford-mustang-ecoboost-coupe-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2023/12/2024-ford-mustang-ecoboost-coupe-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2023/12/2024-ford-mustang-ecoboost-coupe-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2023/12/2024-ford-mustang-ecoboost-coupe-front-view.png?fit=around%7C875:492',
//     address: {city: 'Jerusalem', street: 'rashi 17'},
//     coordinates: { lat: 31.787380, lng: 35.215202 }
//   },
//   {
//     id: 16,
//     category: 'SUV',
//     brand: 'Tesla',
//     model: 'Model Y',
//     seats: 5,
//     year: 2022,
//     pricePerHour: 40,
//     pricePerDay: 450,
//     unlockFee: 6,
//     kmPrice: 2.5,
//     fuelType: 'Electric',
//     fuel: 'NaN',
//     battery: '90%',
//     image:  'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-front-view.png?fit=around%7C875:492',
//     address: {city: 'TelAviv', street: 'kaplan 7'},
//     coordinates: { lat: 32.074503, lng: 34.792577 }
//   },
//   {
//     id: 17,
//     category: 'SUV',
//     brand: 'Tesla',
//     model: 'Model Y',
//     seats: 5,
//     year: 2022,
//     pricePerHour: 10,
//     pricePerDay: 100,
//     unlockFee: 6,
//     kmPrice: 2.5,
//     fuelType: 'Electric',
//     fuel: 'NaN',
//     battery: '90%',
//     image:  'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-angular-front.png?fit=around%7C875:492',
//     image1: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-side-view.png?fit=around%7C875:492',
//     image2: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-doors.png?fit=around%7C875:492',
//     image3: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-rear-view.png?fit=around%7C875:492',
//     image4: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-trunk.png?fit=around%7C875:492',
//     image5: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-front-view.png?fit=around%7C875:492',
//     address: {city: 'Rishon LeZion', street: 'HaHistadrut 7'},
//     coordinates: { lat: 31.9592, lng: 34.8089 }
//   },
//   {
// id: 18,
// category: 'SUV',
// brand: 'Tesla',
// model: 'Model Y',
// seats: 5,
// year: 2022,
// pricePerHour: 10,
// pricePerDay: 100,
// unlockFee: 6,
// kmPrice: 2.5,
// fuelType: 'Electric',
// fuel: 'NaN',
// battery: '90%',
// image:  'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-angular-front.png?fit=around%7C875:492',
// image1: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-side-view.png?fit=around%7C875:492',
// image2: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-doors.png?fit=around%7C875:492',
// image3: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-rear-view.png?fit=around%7C875:492',
// image4: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-trunk.png?fit=around%7C875:492',
// image5: 'https://www.motortrend.com/uploads/sites/10/2022/01/2022-tesla-model-y-long-range-4wd-suv-front-view.png?fit=around%7C875:492',
// address: {city: 'Rishon LeZion', street: 'HaHistadrut 7'},
// coordinates: { lat: 32.0590, lng: 34.8409 }
//   }
// ];

// export default cars;