// import { PlayerContext } from '../context/PlayERContext';
// import React, { useContext } from 'react';
// import Navbar from './Navbar';
// import { useParams } from 'react-router-dom';
// import { albumsData, assets, songsData } from '../assets/assets';


// const DisplayAlbum = () => {
//   const { id } = useParams();
//   const albumData = albumsData[id]; // Fixed typo `albumDate`
//   const { playWithId } = useContext(PlayerContext);

//   return (
//     <>
//       <Navbar />
//       <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
//         <img className="w-48 rounded" src={albumData.image} alt="" />
//         <div className="flex flex-col">
//           <p>Playlist</p>
//           <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
//           <h4>{albumData.desc}</h4>
//           <p className="mt-1">
//             <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
//             <b> Spotify</b> • 1,23,444 likes • <b>10 songs</b>, about 2 hr 30 min
//           </p>
//         </div>
//       </div>

//       {/* Track List Header */}
//       <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
//         <p><b className="mr-4">#</b>Title</p>
//         <p>Album</p>
//         <p className="hidden sm:block">Date Added</p>
//         <img className="m-auto w-4" src={assets.clock_icon} alt="" />
//       </div>

//       <hr />

//       {/* Track List */}
//       {songsData.map((item, index) => (
//         <div 
//           key={index} 
//           onClick={() => playWithId(item.id)} // Fixed `onClick`
//           className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-4 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
//         >
//           <p className="text-white flex items-center">
//             <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
//             <img className="w-12 h-12 object-cover rounded mr-4" src={item.image} alt={item.name} />
//             {item.name}
//           </p>
//           <p className="text-[15px]">{albumData.name}</p>
//           <p className="text-[15px] hidden sm:block">5 days ago</p>
//           <p className="text-[15px] text-center">{item.duration}</p>
//         </div>
//       ))}
//     </>
//   );
// };

// export default DisplayAlbum;




import { PlayerContext } from '../context/PlayERContext';
import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData.find(album => album.id === Number(id)); // Fixed album selection
  const { playWithId } = useContext(PlayerContext); // Ensure PlayerContext is working

  if (!albumData) return <p>Album not found.</p>;

  // Filter songs that belong to this album
  const albumSongs = songsData.filter(song => song.albumId === Number(id));

  return (
    <>
      <Navbar />

      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt={albumData.name} />
        <div className="flex flex-col">
          <p className="text-xl text-[#a7a7a7]">Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl text-white">{albumData.name}</h2>
          <h4 className="text-[#a7a7a7]">{albumData.desc}</h4>
          <p className="mt-1 text-[#a7a7a7]">
            <img className="inline-block w-5" src={assets.spotify_logo} alt="Spotify Logo" />
            <b> Spotify</b> • 1,23,444 likes • <b>{albumSongs.length} songs</b>, about 2 hr 30 min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Clock Icon" />
      </div>

      <hr className="border-[#a7a7a7]" />

      {albumSongs.map((item, index) => (
        <div 
          key={index} 
          onClick={() => playWithId(item.id)} 
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-4 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white flex items-center">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="w-12 h-12 object-cover rounded mr-4" src={item.image} alt={item.name} />
            {item.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
