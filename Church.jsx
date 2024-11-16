import React from 'react';

function Church() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold">TBC</div>
        <div className="space-x-4">
          <a href="#" className="hover:bg-red-400 transition-colors">Home</a>
          <a href="#" className="hover:bg-red-400">About</a>
          <a href="#" className="hover:bg-red-400">Contact</a>
        </div>
      </nav>
<body>
  <img src="" alt="" />
  

      <header className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">WELCOME TO THE TEMIDIRE BAPTIST CHURCH</h1>
        <div className="flex justify-center space-x-8">
          <div className="text-2xl">Sanctuary of Truth</div>
        </div>
        <button className="mt-8 bg-white text-blue-500 font-bold py-2 px-4 rounded">Learn More</button>
      </header>

    
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">News Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md">
            <img src="src\img\310631100_494671662672428_7284101418478650877_n.jpg" alt="News 1" className="w-full h-[500px] object-cover mb-4"/>
            <h3 className="text-xl font-bold mb-2">Arise and Shine</h3>
            <p>2022 Watchword:
               Arise shine for your light has come and the Glory of the Lord has risen upon you.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <img src="src\img\250300145_263346892471574_157092279216765000_n.jpg" alt="News 2" className="w-full h-[500px] object-cover mb-4"/>
            <h3 className="text-xl font-bold mb-2">Joshua</h3>
            <p>Reverend first son</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <img src="src\img\banner.jpg" alt="News 3" className="w-full h-[500px] object-cover mb-4"/>
            <h3 className="text-xl font-bold mb-2">8 weeks convenant Sunday</h3>
            <p>Come and be blessed in our 8 weeks yearly conveant Sunday</p>
          </div>
        </div>
      </section>
      </body>
    
      <section className="bg-gray-200 p-8">
        <h2 className="text-2xl font-bold mb-4">About Temidire Baptist Church</h2>
        <p>Established in 2002, the Temidire Baptist Church has been an sanctuary  of truth.</p>
      </section>

      
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-900 text-white p-4 rounded">
          <h3 className="text-xl font-bold mb-2">Royal Ambassador</h3>
          <p>We are member of the Nigeria Baptist Royal Ambassador.</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded">
          <h3 className="text-xl font-bold mb-2">Girls Auxillary</h3>
          <p>We are proudly part of the Nigeria baptist G.A .</p>
        </div>
        <div className="bg-purple-900 text-white p-4 rounded">
          <h3 className="text-xl font-bold mb-2">NBC Women's Missionary Union</h3>
          <p>Our women are proudly part of  NBC Women's Missionary Union and they support the Girls Auxillary, Lydia and Sunbeam .</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded">
          <h3 className="text-xl font-bold mb-2">NBC Youth Fellowship</h3>
          <p>We also have responsible youth that join the NBC Youth Fellowship.</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded">
          <h3 className="text-xl font-bold mb-2">NBC Baptist Student Fellowship</h3>
          <p>Our student have join the NBC Baptist Student Fellowship.</p>
        </div>
        <div className="bg-black text-white p-4 rounded">
          <h3 className="text-xl font-bold mb-2">NBC Youth Fellowship</h3>
          <p>Information about NBC Youth Fellowship.</p>
        </div>
      </section>

    
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="src\img\church1.jpg" alt="Gallery 1" className="w-full h-[300px] object-cover"/>
          <img src="src\img\church2.jpg" alt="Gallery 2" className="w-full h-[300px] object-cover"/>
          <img src="src\img\church3.jpg" alt="Gallery 3" className="w-full h-[300px] object-cover"/>
          <img src="src\img\church5.jpg" alt="Gallery 3" className="w-full h-[300px] object-cover"/>
          <img src="src\img\church6.jpg" alt="Gallery 3" className="w-full h-[300px] object-cover"/>
          <img src="src\img\church7.jpg" alt="Gallery 3" className="w-full h-[300px] object-cover"/>
        </div>
      </section>

      
      <p>Want to join our church <a href="src\Signinpage">sign in</a> </p>
      <p>Already a member <a href="src\Login.jsx">Log in</a> </p>
    </div>
  );
};
export default Church;
