<template>
     <div>
      
        <NavBar  class="flex top-0 left-0 right-0 z-50"/>
       
        
    <!-- property images section -->
    <div class="relativ grid grid-rows-2 gap-3 mt-16 md:grid-cols-2 lg:grid-cols-3 aspect-[16/7]">
    <!-- Dynamic Images from API -->
    <div v-for="(room, roomId) in properties?.rooms" :key="roomId" class="relative col-span-2 row-span-2" >
      
      <img
        v-if="room.photos && room.photos.length > 0"
        :src="room.photos[0].url_640x200"
        :alt="'Property ' + roomId"
        class="absolute inset-0 w-full h-full object-cover rounded-md pr-8"
      />
    
</div>
    <!-- Fallback Images -->
    <div v-for="(room, roomId) in properties?.rooms" :key="roomId" class="relative ">
      <img
      v-if="room.photos && room.photos.length > 0"
        :src="room.photos[1].url_640x200"
        :alt="'Property ' + roomId"
        class="absolute inset-0 w-full h-full object-cover rounded-md pr-8"
      />
    </div>

    <div v-for="(room, roomId) in properties?.rooms" :key="roomId" class="relative">
      <img
        v-if="room.photos && room.photos.length > 0"
        :src="room.photos[2].url_640x200"
        :alt="'Property ' + roomId"
        class="absolute inset-0 w-full h-full object-cover rounded-md pr-8"
      />
    </div>
  </div>
  
  


    <div class="bg-white pt-10 px-8 ">
        <p class="text-xl "><span class="px-8">Overview</span>Room</p>
        
        </div>
        <div v-if="properties !== null && properties !== undefined">
      <p>Hotel Name: {{ properties.hotel_name }}</p>
      <p>Address: {{ properties.address }}</p>
      <!-- Add more properties as needed -->
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <div v-if="propertyDescription !== null && propertyDescription !== undefined">
      <p>propertyDescription: {{ propertyDescription[0].description }}</p>
      <!-- <p>Address: {{ description.address }}</p> -->
      <!-- Add more properties as needed -->
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <div v-if="properties !== null && properties !== undefined" class="py-10 px-14 bg-gray-100 grid grid-rows-2 gap-8 lg:flex " >
       <!-- right section  -->
      <div class="lg:w-3/4">
          <div class="flex flex-col ">
            <h1 class="text-2xl font-semibold">{{ properties.hotel_name }}</h1>
            <div class="flex items-center pt-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <p class="text-gray-500  text-sm ml-1">
              4.96(76 reviews)
            </p>
          </div>
<!-- location  -->
          <div class="pt-2 pb-10 flex ">
             <!-- Location Icon SVG -->
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
            <p>{{ properties.address }}</p>
          </div>
          <!-- overview section  -->
          <div class="flex-col bg-white border  text-gray-700 text-sm border-white rounded-md py-3  p-2 ">
            <div class="flex flex-col justify-center">
            <h3 class=" font-semibold text-black">Overview</h3>
            <br>
            <p>{{ propertyDescription[0].description }}</p>
            
            <!-- <p class="whitespace-nowrap">Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes</p>
<p class="whitespace-pre-line">Entrance, 19 mi from Bairnsdale. Free private parking is available on site.</p>

<br>
  <p class="whitespace-nowrap">Each room at this motel is air conditioned and comes with a flat-screen TV. You will find a kettle, toaster <br>
    and a microwave in the room. Each room is fitted with a private bathroom. Guests have access to barbecue <br>
    facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is<br>
    14 mi from the property.</p>
    <br>

  <p>Couples in particular like the location - they rated it 9.2 for a two-person trip.</p> -->
<br>
<br>
  <hr>
  
  <!-- top facility  -->

  <div>
    <h3 class="font-semibold text-black pt-3">Top facilities</h3>
    <br>
   
    <div v-if="properties !== null && properties !== undefined">
    <div class="grid grid-cols-2 w-full">
      <!-- Left side icon and name -->
      <div v-if="properties !== null && properties !== undefined">
    <div class="grid grid-cols-2 w-full">
      <!-- Left side icon and name -->
      <div v-if="hasFacility('wifi')" class="flex items-center col-span-1">
        <svg class="facilities" height="1em" viewBox="0 0 512 512">
          <!-- Use the appropriate icon path -->
          <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
          <!-- Add paths for other icons as needed -->
        </svg>
        <p class="ml-2">{{ getFacilityName('wifi') }}</p>
      </div>

      <!-- Right side icon and name -->
      <div v-if="hasFacility('parking_sign')" class="flex items-center col-span-1">
        <svg class="facilities" height="1em" viewBox="0 0 512 512">
          <!-- Use the appropriate icon path -->
          <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
          <!-- Add paths for other icons as needed -->
        </svg>
        <p class="mr-2">{{ getFacilityName('parking_sign') }}</p>
      </div>

      


      <div v-if="hasFacility('pool')" class="flex items-center col-span-1">
        <svg class="facilities" height="1em" viewBox="0 0 512 512">
          <!-- Use the appropriate icon path -->
          <path d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/>
          <!-- Add paths for other icons as needed -->
        </svg>
        <p class="mr-2">{{ getFacilityName('pool') }}</p>
      </div>


      <div v-if="hasFacility('nosmoking')" class="flex items-center col-span-1">
        <svg class="facilities" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Use the appropriate icon path -->
         
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
  <path d="M9 12l2 2 4-4"></path>


          <!-- Add paths for other icons as needed -->
        </svg>
        <p class="ml-2">{{ getFacilityName('nosmoking') }}</p>
      </div>

    </div>
  </div>
  </div>
</div>
</div>
    </div>

  
  

   

</div>
</div>

      <!-- <div v-if="properties !== null && properties !== undefined">
        <div v-for="facility in properties.facilities_block.facilities" :key="facility.icon" class="flex items-center">

            <svg v-if="facility.icon === 'fitness'" xmlns="http://www.w3.org/2000/svg" class="facilities" height="1em" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>

            <p>{{ facility.name }}</p>
          </div>
          </div> -->
          <!-- <div v-if="properties !== null && properties !== undefined">
            <div v-for="facility in properties.facilities_block.facilities" :key="facility.icon" class="flex items-center">
            <svg  v-if="facility.icon === 'food_and_drink'"  xmlns="http://www.w3.org/2000/svg" class="facilities" height="1em" viewBox="0 0 512 512"><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.1s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/></svg>
            <p>{{ facility.name }}</p>
          </div>
          </div> -->
          
        </div>
      
      
    


          <!-- left section  -->
          <div class="lg:w-1/4">
        <div class=" justify-end">
          <div class="w-96 h-72 rounded-md p-4">
  
  <!-- Embedded Map -->
  <div class="aspect-w-10 aspect-h-8 overflow-hidden">
  <iframe
    style="width: 400px;
height: 240px;
top: 656px;
left: 940px;
right: 100px;
border-radius: 6px;
"
    :src="`https://maps.google.com/maps?q=${properties.latitude},${properties.longitude}&z=15&output=embed`"
    allowfullscreen=""
    loading="lazy"
  ></iframe>
</div>

</div>


<div>
  <h3 class=" font-semibold text-black text-2xl pt-3">Explore the area</h3>
  <br> 
  <div class="flex items-center justify-between">
        <div class="grid lg:grid-cols-2  gap-y-4">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="plane" height="1em" viewBox="0 0 576 512"><path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"/></svg>
            <p class="whitespace-nowrap text-sm">Hotel Penselvenyia</p>
          </div>
          <p class="flex items-center justify-end ">2 min drive</p>
          <div class="flex items-center">
    <!-- Location Icon SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-500 align-middle">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </svg>
    <p class="whitespace-nowrap text-sm">Travis Bakery store house</p>
</div>
          <p class="flex items-center justify-end">10 min drive</p>
          <div class="flex items-center">
             <!-- Location Icon SVG -->
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
            <p class="whitespace-nowrap text-sm">Olivia Johnson Garden</p>
          </div>
          <p class="flex items-center justify-end">15 min drive</p>
          <div class="flex items-center">
            <!-- Location Icon SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
            <p class="whitespace-nowrap text-sm">Norman Opera Circus</p>
          </div>
          <p class="flex items-center justify-end">18 min drive</p>
          <div class="flex items-center">
            <!-- Checkmark SVG -->
             <!-- Location Icon SVG -->
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
            <p class="whitespace-nowrap text-sm">PRockdeset hotel</p>
          </div>
          <p class="flex items-center justify-end">32 min drive</p>
          
        </div>
      </div>
<!-- <img src="../assets/images/card1.png" alt=""> -->



</div>

</div>

        </div> 
      </div>

      <div v-if="properties !== null && properties !== undefined" class="bg-gray-100">
        <h3 class="font-semibold text-xl px-16">Available rooms</h3>
        <div class="grid gap-8 mt-6 md:grid-cols-3">
          
          <div class="px-10">
            <img src="../assets/images/cardad.png" style="width: 400px; height: 340px; border-radius: 6px;" alt="image">
          </div>
          <div class="w-100 bg-white shadow rounded">
 
  <div v-if="properties !== null && properties !== undefined">
  <div v-for="(room, roomId) in properties?.rooms" :key="roomId" class="bg-gray-200 flex flex-col justify-between  bg-cover bg-center " >
    <img
      v-if="room.photos  && room.photos[1]?.url_640x200"
      :src="room.photos[1]?.url_640x200"
      :alt="'Property ' + roomId"
      style="width: 450px;
height: 200px;
top: 1396px;
left: 520px;
border-radius: 6px, 6px, 0px, 0px;
"
    />   
  </div>
</div>
    <div>
    </div>
  <div class="p-4 flex flex-col ">
    <p class="text-gray-400 font-light text-xs">
      Standard twin ben, Multiple beds
    </p>

    <div v-if="properties !== null && properties !== undefined">
    
      <!-- Left side icon and name -->
      <div v-if="hasFacility('wifi')" class="flex items-center col-span-1">
        <svg class="facilities" height="1em" viewBox="0 0 512 512">
          <!-- Use the appropriate icon path -->
          <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
          <!-- Add paths for other icons as needed -->
        </svg>
        <p class="ml-2">{{ getFacilityName('wifi') }}</p>
      </div>

      <!-- Right side icon and name -->
      <div v-if="hasFacility('parking_sign')" class="flex items-center col-span-1">
        <svg class="facilities" height="1em" viewBox="0 0 512 512">
          <!-- Use the appropriate icon path -->
          <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
          <!-- Add paths for other icons as needed -->
        </svg>
        <p class="mr-2">{{ getFacilityName('parking_sign') }}</p>
      </div>

      


      <div v-if="hasFacility('pool')" class="flex items-center col-span-1">
        <svg class="facilities" height="1em" viewBox="0 0 512 512">
          <!-- Use the appropriate icon path -->
          <path d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/>
          <!-- Add paths for other icons as needed -->
        </svg>
        <p class="mr-2">{{ getFacilityName('pool') }}</p>
      </div>

</div>

    <!-- <p class="text-gray-600  mt-1">300 sq ft</p>
    <p class=" text-gray-600 mt-1">Sleeps 3</p>
    <p class=" text-gray-600 mt-1">1 double bed and 1 twin bed</p> -->
    <router-link :to="{ name: 'PaymentDetails' }">
    <button
      class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
    >
      Reserve suite
    </button>
  </router-link>


  </div>
</div>

<!-- second card  -->
<div class="bg-white shadow rounded">
 
  <div v-if="properties !== null && properties !== undefined">
  <div v-for="(room, roomId) in properties?.rooms" :key="roomId" class="bg-gray-200 flex flex-col justify-between bg-cover bg-center " >
    <img
      v-if="room.photos  && room.photos[2]?.url_640x200"
      :src="room.photos[2]?.url_640x200"
      :alt="'Property ' + roomId"
      style="width: 450px;
height: 200px;
top: 1396px;
left: 520px;
border-radius: 6px, 6px, 0px, 0px;
"
    />
  </div>
</div>


    <div>
    </div>
  <div class="p-4 flex flex-col ">
    <p class="text-gray-400 font-light text-xs">
      Standard twin ben, Multiple beds
    </p>
    <div v-if="properties !== null && properties !== undefined">
    
    <!-- Left side icon and name -->
    <div v-if="hasFacility('wifi')" class="flex items-center col-span-1">
      <svg class="facilities" height="1em" viewBox="0 0 512 512">
        <!-- Use the appropriate icon path -->
        <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
        <!-- Add paths for other icons as needed -->
      </svg>
      <p class="ml-2">{{ getFacilityName('wifi') }}</p>
    </div>

    <!-- Right side icon and name -->
    <div v-if="hasFacility('parking_sign')" class="flex items-center col-span-1">
      <svg class="facilities" height="1em" viewBox="0 0 512 512">
        <!-- Use the appropriate icon path -->
        <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
        <!-- Add paths for other icons as needed -->
      </svg>
      <p class="mr-2">{{ getFacilityName('parking_sign') }}</p>
    </div>

    


    <div v-if="hasFacility('pool')" class="flex items-center col-span-1">
      <svg class="facilities" height="1em" viewBox="0 0 512 512">
        <!-- Use the appropriate icon path -->
        <path d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/>
        <!-- Add paths for other icons as needed -->
      </svg>
      <p class="mr-2">{{ getFacilityName('pool') }}</p>
    </div>

</div>


    <router-link :to="{ name: 'PaymentDetails' }">
    <button
      class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
    >
      Reserve suite
    </button>
  </router-link>

  </div>
</div>
        </div>
      
<CovidAlert class="p-16" />
<FooterBar />

      
      </div>
     
      </div>



      
    
</template>

<script setup>
import CovidAlert from '../components/CovidAlert.vue';
import FooterBar from '../components/FooterBar.vue';
import NavBar from '../components/NavBar.vue';
import axios from 'axios';
// import { useAuthStore } from "@/assets/store";

import {ref, onMounted} from 'vue';
// import { useAuthStore } from "@/assets/store";
import { MY_API_KEY } from '@/config';

// const searchResults = ref(authStore.searchResults);



const hasFacility = (icon) => {
  return properties.value.facilities_block.facilities.some((facility) => facility.icon === icon);
};

const getFacilityName = (icon) => {
  const facility = properties.value.facilities_block.facilities.find((facility) => facility.icon === icon);
  return facility ? facility.name : '';
};
// const uniqueIcons = computed(() => {
//   const seen = new Set();
//   return properties.value.facilities_block.facilities.filter((facility) => {
//     if (!seen.has(facility.icon)) {
//       seen.add(facility.icon);
//       return true;
//     }
//     return false;
//   });
// });

// const getIconClasses = (icon) => {
//   switch (icon) {
//     case 'wifi':
//       return '...'; // Add classes for WiFi icon
//     case 'parking_sign':
//       return '...'; 
//     case 'nosmoking':
//       return '...'; 
      
//       case 'Swimming pool':
//       return '...'; 
//       case 'Fitness centre':
//       return '...'; 
//       case 'food_and_drink':
//       return '...'; 
//     default:
//       return ''; // Default classes if the icon is not recognized
//   }
// };
const hotelId = localStorage.getItem('hotelId');
const options = {
  method: 'GET',
  url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails',
  params: {
    hotel_id: hotelId,
        arrival_date: localStorage.getItem('arrivalDate'),
        departure_date: localStorage.getItem('departureDate'),
  },
  headers: {
    'X-RapidAPI-Key': MY_API_KEY,
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
};

let properties = ref(null);

// Define an asynchronous function to fetch data
async function fetchData() {
  try {
    // Make the API request using Axios
    const response = await axios.request(options);
    properties.value = response.data.data;
    // Log the response data to the console
    console.log('Response Data:', response.data);
    console.log('Response Data:', response.data.data.address);
  } catch (error) {
    // Log any errors that occur during the request
    console.error(error);
  }
}

// Call the function to fetch data
onMounted(fetchData);


const apiParams = {
  method: 'GET',
  url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getDescriptionAndInfo',
  params: {
    hotel_id: hotelId,
    
  },
  headers: {
    'X-RapidAPI-Key': MY_API_KEY,
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
};

let propertyDescription = ref(null);

// Define an asynchronous function to fetch data
async function fetchDescData() {
  try {
    // Make the API request using Axios
    const response = await axios.request(apiParams);
    propertyDescription.value = response.data.data;
    // Log the response data to the console
    console.log('propertyDescription:', response.data);
    console.log('propertyDescription Data:', response.data.data.description);
  } catch (error) {
    // Log any errors that occur during the request
    console.error(error);
  }
}

// Call the function to fetch data
onMounted(fetchDescData);


</script>

<style  scoped>

svg.facilities{fill:#2e59dc}
svg.plane{fill:#757d8a}

</style>