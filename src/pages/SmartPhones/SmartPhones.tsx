import React, { useState } from 'react'
import { SmartPhonesFilter } from './components/SmartPhonesFilter/SmartPhonesFilter'
import { SmartPhonesProducts } from './components/SmartPhonesProducts/SmartPhonesProducts'
import './SmartPhones.scss'


export const SmartPhones = () => {

   const [filterBrand, setFilterBrand] = useState([]);
   const [filterMinPrice, setFilterMinPrice] = useState<number>(0);
   const [filterMaxPrice, setFilterMaxPrice] = useState<number>(0);
   const [filterMemorySize, setFilterMemorySize] = useState([]);
   const [filterScreenSize, setFilterScreenSize] = useState([]);

   const products = [
      // iphone 12 64 gb
      {  
         id: 'product--smart-phones-apple-iphone-12-64-gb',
         brand: 'apple',
         memorySizeRange: '64',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 12 64 GB',
         memorySize: 64,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-p/wc1000/6547610389.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-p/wc1000/6547610389.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-l/wc1000/6547610385.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-m/wc1000/6547610386.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-n/wc1000/6547610387.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-i/wc1000/6547610382.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-h/wc1000/6547610381.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 12 64 GB',
            description: `iPhone 12 Pro Max. New cameras. Unrealistic possibilities.

            iPhone 13 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 12 128 gb
      {  
         id: 'product--smart-phones-apple-iphone-12-128-gb',
         brand: 'apple',
         memorySizeRange: '128',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 12 128 GB',
         memorySize: 128,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6556472063.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-b/wc1000/6556472063.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-1/wc1000/6556472089.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-l/wc1000/6556472073.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 12 128 GB',
            description: `iPhone 13 Pro Max. New cameras. Unrealistic possibilities.

            iPhone 13 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 12 256 gb
      {  
         id: 'product--smart-phones-apple-iphone-12-256-gb',
         brand: 'apple',
         memorySizeRange: '256',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 12 256 GB',
         memorySize: 256,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6025763881.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-d/wc1000/6025763881.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-7/wc1000/6025763947.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-c/wc1000/6025763952.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-b/wc1000/6025763951.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 12 256 GB',
            description: `iPhone 13 Pro Max. New cameras. Unrealistic possibilities.

            iPhone 13 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 12 pro 128 gb
      {  
         id: 'product--smart-phones-apple-iphone-12-pro-128-gb',
         brand: 'apple',
         memorySizeRange: '128',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 12 128 Pro GB',
         memorySize: 128,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-i/wc1000/6025766406.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-i/wc1000/6025766406.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-s/wc1000/6025766560.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-u/wc1000/6025766562.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-v/wc1000/6025766563.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 12 Pro 128 GB',
            description: `iPhone 13 Pro Max. New cameras. Unrealistic possibilities.

            iPhone 13 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 12 pro 256 gb
      {  
         id: 'product--smart-phones-apple-iphone-12-pro-256-gb',
         brand: 'apple',
         memorySizeRange: '256',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 12 256 Pro GB',
         memorySize: 256,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-e/wc1000/6470370362.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-e/wc1000/6470370362.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-z/wc1000/6470370347.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-b/wc1000/6470370359.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-g/wc1000/6470370364.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 12 Pro 256 GB',
            description: `iPhone 13 Pro Max. New cameras. Unrealistic possibilities.

            iPhone 13 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 13 128 gb
      {  
         id: 'product--smart-phones-apple-iphone-13-128-gb',
         brand: 'apple',
         memorySizeRange: '128',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 13 128 GB',
         memorySize: 128,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-i/wc1000/6108777546.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-i/wc1000/6108777546.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-n/wc1000/6103353863.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-v/wc1000/6103353871.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-0/wc1000/6103353876.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-3/wc1000/6103353879.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-g/wc1000/6103350220.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 13 128 GB',
            description: `iPhone 13 Pro Max. New cameras. Unrealistic possibilities.

            iPhone 13 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 13 256 gb
      {  
         id: 'product--smart-phones-apple-iphone-13-256-gb',
         brand: 'apple',
         memorySizeRange: '256',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 13 256 GB',
         memorySize: 256,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-j/wc1000/6324162775.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-j/wc1000/6324162775.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-m/wc1000/6324162778.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-i/wc1000/6324162774.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-n/wc1000/6324162779.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-l/wc1000/6324162777.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 13 256 GB',
            description: `iPhone 13. New cameras. Unrealistic possibilities.

            iPhone 13 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 13 pro 128 gb
      {  
         id: 'product--smart-phones-apple-iphone-13-pro-128-gb',
         brand: 'apple',
         memorySizeRange: '128',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 13 Pro 128 GB',
         memorySize: 128,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6324540686.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-2/wc1000/6324540686.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-4/wc1000/6324540688.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-6/wc1000/6324540690.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-c/wc1000/6324540696.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 13 Pro 128 GB',
            description: `iPhone 13. New cameras. Unrealistic possibilities.

            iPhone 13 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 13 pro 256 gb
      {  
         id: 'product--smart-phones-apple-iphone-13-pro-256-gb',
         brand: 'apple',
         memorySizeRange: '256',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 13 Pro 256 GB',
         memorySize: 256,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6299860751.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-b/wc1000/6299860751.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-n/wc1000/6329095931.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-m/wc1000/6329095930.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-l/wc1000/6329095929.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 13 Pro 256 GB',
            description: `iPhone 13. New cameras. Unrealistic possibilities.

            iPhone 13 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 13 pro 512 gb
      {  
         id: 'product--smart-phones-apple-iphone-13-pro-512-gb',
         brand: 'apple',
         memorySizeRange: '512',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 13 Pro 512 GB',
         memorySize: 512,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-u/wc1000/6103986570.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-u/wc1000/6103986570.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-5/wc1000/6103986581.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-m/wc1000/6103986598.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-v/wc1000/6103986607.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-4/wc1000/6103986616.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 13 Pro 512 GB',
            description: `iPhone 13. New cameras. Unrealistic possibilities.

            iPhone 13 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 14 128 gb
      {  
         id: 'product--smart-phones-apple-iphone-14-128-gb',
         brand: 'apple',
         memorySizeRange: '128',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 14 128 GB',
         memorySize: 128,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-w/wc1000/6324320324.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-w/wc1000/6324320324.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-m/wc1000/6418481086.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-l/wc1000/6418481085.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-z/wc1000/6324320327.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-t/wc1000/6324320321.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 14 128 GB',
            description: `iPhone 14. New cameras. Unrealistic possibilities.

            iPhone 14 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 14 256 gb
      {  
         id: 'product--smart-phones-apple-iphone-14-256-gb',
         brand: 'apple',
         memorySizeRange: '256',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 14 256 GB',
         memorySize: 256,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6404606974.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-m/wc1000/6404606974.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-b/wc1000/6404606999.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-j/wc1000/6404607007.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 14 256 GB',
            description: `iPhone 14. New cameras. Unrealistic possibilities.

            iPhone 14 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 14 512 gb
      {  
         id: 'product--smart-phones-apple-iphone-14-512-gb',
         brand: 'apple',
         memorySizeRange: '512',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 14 512 GB',
         memorySize: 512,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-r/wc1000/6421322355.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-r/wc1000/6421322355.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-s/wc1000/6421322356.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-t/wc1000/6421322357.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 14 512 GB',
            description: `iPhone 14. New cameras. Unrealistic possibilities.

            iPhone 14 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 14 Pro 128 gb
      {  
         id: 'product--smart-phones-apple-iphone-14-pro-128-gb',
         brand: 'apple',
         memorySizeRange: '128',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 14 128 GB',
         memorySize: 128,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-1/wc1000/6404606989.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-1/wc1000/6404606989.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-x/wc1000/6404607021.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-2/wc1000/6404607026.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 14 Pro 128 GB',
            description: `iPhone 14. New cameras. Unrealistic possibilities.

            iPhone 14 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 14 Pro 256 gb
      {  
         id: 'product--smart-phones-apple-iphone-14-pro-256-gb',
         brand: 'apple',
         memorySizeRange: '256',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 14 256 GB',
         memorySize: 256,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6410286190.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-m/wc1000/6410286190.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-q/wc1000/6410286230.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-9/wc1000/6410286177.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-t/wc1000/6410286161.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-n/wc1000/6409926407.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 14 Pro 256 GB',
            description: `iPhone 14. New cameras. Unrealistic possibilities.

            iPhone 14 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // iphone 14 Pro 256 gb
      {  
         id: 'product--smart-phones-apple-iphone-14-pro-512-gb',
         brand: 'apple',
         memorySizeRange: '512',
         screenSizeRange: '6.0" - 6.4"',

         name: 'iPhone 14 512 GB',
         memorySize: 512,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-u/wc1000/6410644074.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-u/wc1000/6410644074.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-t/wc1000/6410644073.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-x/wc1000/6410644077.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-o/wc1000/6410644068.jpg`,
            },
         ],

         information: {
            
            name: 'Apple iPhone 14 Pro 512 GB',
            description: `iPhone 14. New cameras. Unrealistic possibilities.

            iPhone 14 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // samsung galaxy s22 128 gb
      {  
         id: 'product--smart-phones-samsung-galaxy-s22-128-gb',
         brand: 'samsung',
         memorySizeRange: '128',
         screenSizeRange: '6.0" - 6.4"',

         name: 'Samsung Galaxy S22 128 GB',
         memorySize: 128,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-k/wc1000/6399161180.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-k/wc1000/6399161180.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-7/wc1000/6399161203.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-6/wc1000/6399161202.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-5/wc1000/6399161201.jpg`,
            },
         ],

         information: {
            
            name: 'Samsung Galaxy S22 128 GB',
            description: `iPhone 14. New cameras. Unrealistic possibilities.

            iPhone 14 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // samsung galaxy s22 256 gb
      {  
         id: 'product--smart-phones-samsung-galaxy-s22-256-gb',
         brand: 'samsung',
         memorySizeRange: '256',
         screenSizeRange: '6.0" - 6.4"',

         name: 'Samsung Galaxy S22 256 GB',
         memorySize: 256,
         screenSize: '6.1',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-i/wc1000/6407791710.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-i/wc1000/6407791710.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-m/wc1000/6407791966.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-p/wc1000/6407791969.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-k/wc1000/6407791964.jpg`,
            },
         ],

         information: {
            
            name: 'Samsung Galaxy S22 256 GB',
            description: `iPhone 14. New cameras. Unrealistic possibilities.

            iPhone 14 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // samsung galaxy s22 ultra 128 gb
      {  
         id: 'product--smart-phones-samsung-galaxy-s22-ultra-128-gb',
         brand: 'samsung',
         memorySizeRange: '128',
         screenSizeRange: 'more 6.5"',

         name: 'Samsung Galaxy S22 Ultra 128 GB',
         memorySize: 128,
         screenSize: '6.8',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-k/wc1000/6366713804.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-k/wc1000/6366713804.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-q/wc1000/6366713810.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-p/wc1000/6366713737.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-x/wc1000/6366713745.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-3/wc1000/6366713751.jpg`,
            },
         ],

         information: {
            
            name: 'Samsung Galaxy S22 Ultra 128 GB',
            description: `iPhone 14. New cameras. Unrealistic possibilities.

            iPhone 14 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
      // samsung galaxy s22 ultra 256 gb
      {  
         id: 'product--smart-phones-samsung-galaxy-s22-ultra-256-gb',
         brand: 'samsung',
         memorySizeRange: '256',
         screenSizeRange: 'more 6.5"',

         name: 'Samsung Galaxy S22 Ultra 256 GB',
         memorySize: 256,
         screenSize: '6.8',
         price: 599,
         imageSrc: 'https://ir.ozone.ru/s3/multimedia-k/wc1000/6385484852.jpg',
         processor: 'Apple A16 Bionic',
         ram: '6',
         battery: '3200 mah',
         screenResolution: '2556x1179',
         protection: 'IP68',
         weight: '206 g.',

         array_of_images: [
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-k/wc1000/6385484852.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-h/wc1000/6385484849.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-l/wc1000/6385484853.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-m/wc1000/6385484854.jpg`,
            },
            {
               imageSrc: `https://ir.ozone.ru/s3/multimedia-j/wc1000/6385484851.jpg`,
            },
         ],

         information: {
            
            name: 'Samsung Galaxy S22 Ultra 256 GB',
            description: `iPhone 14. New cameras. Unrealistic possibilities.

            iPhone 14 Pro Max. Massive Pro Camera Upgrade. The Cinema Effect mode turns the video into a real movie. Super Retina XDR display with ProMotion technology for faster and smoother interactions. A15 Bionic is the fastest chip for the iPhone.
            Rugged design and the longest battery life of an iPhone.
               
            Main characteristics
            • 6.7" Super Retina XDR display with ProMotion technology for faster and smoother interaction
            • Cinema Effect mode automatically shifts the focus between objects when shooting video and creates a beautiful blur effect`,
            
         },

         characteristics: [
            {
               parameter: 'RAM',
               value: '6 GB'
            },
            {
               parameter: 'Screen',
               value: '6.1"/2532x1170 px'
            },
            {
               parameter: 'Screen technology',
               value: 'OLED'
            },
            {
               parameter: 'Built-in memory (ROM)',
               value: '64'
            },
            {
               parameter: 'Main camera MPix',
               value: '12/12'
            },
            {
               parameter: 'Movie resolution',
               value: '3840x2160 px (4K)'
            },
            {
               parameter: 'Optical stabilization',
               value: 'yes'
            },
         ],

         comments: [
            {
               username: 'David Kusher',
               date: '6th April 2022',
               mark: 4.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 31,
               count_of_dislikes: 4,
            },
            {
               username: 'Alisa Kromova',
               date: '6th April 2022',
               mark: 5.0,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 11,
               count_of_dislikes: 5,
            },
            {
               username: 'Arthur Clark',
               date: '6th April 2022',
               mark: 4.5,
               pros: 'Great lkdajkfjadjfjdaljfa',
               cons: 'Have to be rich to buy it',
               experience: 'Three months of using this devise, so awesome',
               count_of_likes: 14,
               count_of_dislikes: 3,
            },
         ]
      },
   ]

   return (
      <main className="main">
         <div className="smart-phones__container container">
            <div className="smart-phones__inner">
               <SmartPhonesFilter 
                  filterBrand={filterBrand}
                  setFilterBrand={setFilterBrand}

                  filterMinPrice={filterMinPrice}
                  setFilterMinPrice={setFilterMinPrice}

                  filterMaxPrice={filterMaxPrice}
                  setFilterMaxPrice={setFilterMaxPrice}

                  filterMemorySize={filterMemorySize}
                  setFilterMemorySize={setFilterMemorySize}

                  filterScreenSize={filterScreenSize}
                  setFilterScreenSize={setFilterScreenSize}
               />
               <SmartPhonesProducts 
                  products={products} 
                  filterBrand={filterBrand}
                  filterMinPrice={filterMinPrice}
                  filterMaxPrice={filterMaxPrice}
                  filterMemorySize={filterMemorySize}
                  filterScreenSize={filterScreenSize}
                  />
            </div>
         </div>
      </main>
   )
}
