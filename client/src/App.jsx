import React, { useState, useEffect, useRef } from 'react';

// Data remains the same, with unique song IDs from the previous fix.
const albumsData = [
    {
        id: 'album1',
        title: 'Devara',
        artist: 'Thaman S',
        coverUrl: '/images/de.jpg',
        songs: [
            { id: 'song1_dev', title: 'Ayudha Pooja', artist: 'Anirudh Ravichander', duration: 210, url: '/songs/Ayudha Pooja.mp3' },
            { id: 'song2_dev', title: 'Daavudi', artist: 'Anirudh Ravichander', duration: 195, url: '/songs/Daavudi.mp3' },
            { id: 'song3_dev', title: 'Fear', artist: 'Anirudh Ravichander', duration: 180, url: '/songs/Fear.mp3' },
            { id: 'song7_dev', title: 'Red Sea', artist: 'Anirudh Ravichander', duration: 215, url: '/songs/Red Sea.mp3' },
            { id: 'song8_dev', title: 'All Hail The Tiger', artist: 'Anirudh Ravichander', duration: 205, url: '/songs/All Hail The Tiger.mp3' },
            { id: 'song9_dev', title: 'Chuttamalle', artist: 'Anirudh Ravichander', duration: 190, url: '/songs/Chuttamalle.mp3' }
        ]
    },
    {
        id: 'album2',
        title: 'hi-NANNA',
        artist: 'Hashim',
        coverUrl: '/images/hi.jpg',
        songs: [
            { id: 'song4_hin', title: 'Odiyamma', artist: 'Hashim', duration: 225, url: '/songs/Odiyamma.mp3' },
            { id: 'song5_hin', title: 'Samayama', artist: 'Hashim', duration: 198, url: '/songs/Samayama.mp3' },
            { id: 'song6_hin', title: 'Gaaju Bomma', artist: 'Hashim', duration: 187, url: '/songs/Gaaju Bomma.mp3' }
        ]
    },
      {
          id: 'album3',
          title: 'Bramhastra',
          artist: 'Arjith singh',
          coverUrl: 'images/bram.jpg',
          songs: [
              { id: 'song1_bra', title: 'Kumkumala', artist: 'Arjith singh', duration: 210, url: 'songs/bramhastram/Kumkumala.mp3' },
              { id: 'song2_bra', title: 'Deva Deva', artist: 'Arjith singh', duration: 195, url: 'songs/bramhastram/Deva Deva.mp3' },
              { id: 'song3_bra', title: 'Allari Motha', artist: 'Arjith singh', duration: 180, url: 'songs/bramhastram/Allari Motha.mp3' }
          ]
      },
      {
          id: 'album4',
          title: 'Return of Dragon',
          artist: 'Sarath Santhosh',
          coverUrl: 'images/drag.jpg',
          songs: [
              { id: 'song1_rod', title: 'Madhuvaramae', artist: 'Sarath Santhosh', duration: 210, url: 'songs/dragon/madhu.mp3' },
              { id: 'song2_rod', title: 'Rise of Dragon', artist: 'Sarath Santhosh', duration: 195, url: 'songs/dragon/rise of.mp3' },
              { id: 'song3_rod', title: 'Yendhukae', artist: 'Sarath Santhosh', duration: 180, url: 'songs/dragon/yendhuke.mp3' }
          ]
      },
      {
          id: 'album5',
          title: 'Vikram-Hitlist',
          artist: 'Anirudh Ravichandran',
          coverUrl: 'images/vik.jpg',
          songs: [
              { id: 'song1_vik', title: 'Vikram title song', artist: 'Anirudh Ravichander', duration: 210, url: 'songs/vikram/title.mp3' },
              { id: 'song2_vik', title: 'once upon a time', artist: 'Anirudh Ravichander', duration: 195, url: 'songs/vikram/once.mp3' },
              { id: 'song3_vik', title: 'Porata Simham', artist: 'Anirudh Ravichander', duration: 180, url: 'songs/vikram/porata.mp3' }
          ]
      },
    {
        id: 'album6',
        title: 'Orange',
        artist: 'Harris Jayaraj',
        coverUrl: 'images/orange.jpg',
        songs: [
            { id: 'song1_org', title: 'Rooba Rooba', artist: 'Karthik', duration: 240, url: 'songs/orange/rooba.mp3' },
            { id: 'song2_org', title: 'Nenu Nuvvantu', artist: 'Chinmayi', duration: 210, url: 'songs/orange/ola.mp3' },
            { id: 'song3_org', title: 'Hello Rammante', artist: 'Karunya', duration: 200, url: 'songs/orange/hello.mp3' }
        ]
    },
    {
        id: 'album7',
        title: 'Ambajipetta',
        artist: 'Keeravani',
        coverUrl: 'images/ambaji.jpg',
        songs: [
            { id: 'song1_amb', title: 'Bhajan', artist: 'SP Balasubrahmanyam', duration: 220, url: 'songs/gumma.mp3' },
        ]
    },
    {
        id: 'album8',
        title: 'Arya',
        artist: 'Devi Sri Prasad',
        coverUrl: 'images/arya.jpg',
        songs: [
            { id: 'song1_ary', title: 'Feel My Love', artist: 'Karthik', duration: 230, url: 'songs/arya/feel my.mp3' },
        ]
    },
    {
        id: 'album9',
        title: 'Bommarillu',
        artist: 'Mickey J Meyer',
        coverUrl: 'images/bomma.jpg',
        songs: [
            { id: 'song1_bom', title: 'Bomma Bomma', artist: 'Armaan Malik', duration: 240, url: 'songs/bomma/appudo.mp3' },
        ]
    },
    {
        id: 'album10',
        title: 'Geetha Govindham',
        artist: 'Gopi Sundar',
        coverUrl: 'images/geetha.jpg',
        songs: [
            { id: 'song1_gg', title: 'Inkem Inkem', artist: 'Sid Sriram', duration: 250, url: 'songs/geetha/inkem.mp3' },
            { id: 'song2_gg', title: 'Vachindamma', artist: 'Saketh', duration: 230, url: 'songs/geetha/vachindhamma.mp3' },
            { id: 'song3_gg', title: 'Yenti Yenti', artist: 'Chinmayi', duration: 240, url: 'songs/geetha/yenti_yenti.mp3' }
        ]
    },
    {
        id: 'album11',
        title: 'Guntur',
        artist: 'S. Thaman',
        coverUrl: 'images/guntur.jpg',
        songs: [
            { id: 'song1_gun', title: 'dummasala biryani', artist: 'Kailash Kher', duration: 260, url: 'songs/guntur/dum.mp3' },
            { id: 'song2_gun', title: 'kurchini', artist: 'Anurag Kulkarni', duration: 240, url: 'songs/guntur/kurchi.mp3' },
            { id: 'song3_gun', title: 'Nee Kanti', artist: 'Sid Sriram', duration: 250, url: 'songs/guntur/nee_kanti.mp3' }
        ]
    },
    {
        id: 'album12',
        title: 'Krishnarjunayudham',
        artist: 'Chakri',
        coverUrl: 'images/krishna.jpg',
        songs: [
            { id: 'song1_kri', title: 'FLY ', artist: 'Vijay Yesudas', duration: 240, url: 'songs/krishna/fly.mp3' },
            { id: 'song2_kri', title: 'MNASE', artist: 'Karthik', duration: 230, url: 'songs/krishna/manase.mp3' },
        ]
    },
    {
        id: 'album13',
        title: 'Master',
        artist: 'Anirudh Ravichander',
        coverUrl: 'images/master.jpg',
        songs: [
            { id: 'song1_mas', title: 'Vaathi Coming', artist: 'Anirudh Ravichander', duration: 210, url: 'songs/master/vaathi_coming.mp3' },
            { id: 'song2_mas', title: 'Kutti Story', artist: 'Vijay', duration: 200, url: 'songs/master/chitti.mp3' }
        ]
    },
    {
        id: 'album14',
        title: 'Mirchi',
        artist: 'Devi Sri Prasad',
        coverUrl: 'images/mirchi.jpg',
        songs: [
            { id: 'song1_mir', title: 'Mirchi Title Song', artist: 'Chinmayi', duration: 220, url: 'songs/mirchi/mirchi.mp3' },
            { id: 'song2_mir', title: 'Idhedho Bagundhe', artist: 'Vijay Prakash', duration: 230, url: 'songs/mirchi/idhedho_bagundhe.mp3' }
        ]
    },
    {
        id: 'album15',
        title: 'Nani Gang',
        artist: 'Gopi Sundar',
        coverUrl: 'images/nanigang.jpg',
        songs: [
            { id: 'song1_nan', title: 'Gang Leader Title Song', artist: 'Anirudh Ravichander', duration: 240, url: 'songs/nanigang/title_song.mp3' },
            { id: 'song2_nan', title: 'Hoyna Hoyna', artist: 'Inno Genga', duration: 220, url: 'songs/nanigang/hoyna_hoyna.mp3' }
        ]
    },
    {
        id: 'album16',
        title: 'Nannaku Prematho',
        artist: 'Devi Sri Prasad',
        coverUrl: 'images/nannaku.jpg',
        songs: [
            { id: 'song1_np', title: 'Follow Follow', artist: 'Jr. NTR', duration: 210, url: 'songs/nannaku/follow_follow.mp3' },
            { id: 'song2_np', title: 'Love Dhebba', artist: 'Sooraj Santhosh', duration: 230, url: 'songs/nannaku/love_dhebba.mp3' }
        ]
    },
    {
        id: 'album17',
        title: 'Ori',
        artist: 'Thaman S',
        coverUrl: 'images/ori.jpg',
        songs: [
            { id: 'song1_ori', title: 'Ori Devuda', artist: 'Sid Sriram', duration: 250, url: 'songs/ori/ori_devuda.mp3' },
            { id: 'song2_ori', title: 'Avunanavaa', artist: 'Haricharan', duration: 240, url: 'songs/ori/avunanavaa.mp3' }
        ]
    },
    {
        id: 'album18',
        title: 'RRR',
        artist: 'M. M. Keeravani',
        coverUrl: 'images/rrr.jpg',
        songs: [
            { id: 'song1_rrr', title: 'Naatu Naatu', artist: 'Rahul Sipligunj', duration: 260, url: 'songs/rrr/naatu_naatu.mp3' },
            { id: 'song2_rrr', title: 'Dosti', artist: 'Amit Trivedi', duration: 240, url: 'songs/rrr/dosti.mp3' }
        ]
    },
    {
        id: 'album19',
        title: 'Taxi',
        artist: 'Gopi Sundar',
        coverUrl: 'images/taxi.jpg',
        songs: [
            { id: 'song1_tax', title: 'Taxi Title Song', artist: 'Armaan Malik', duration: 220, url: 'songs/taxi/title_song.mp3' },
            { id: 'song2_tax', title: 'Neeve Neeve', artist: 'Sid Sriram', duration: 230, url: 'songs/taxi/neeve_neeve.mp3' }
        ]
    },
    {
        id: 'album20',
        title: 'V',
        artist: 'Amit Trivedi',
        coverUrl: 'images/v.jpg',
        songs: [
            { id: 'song1_v', title: 'Manasu Maree', artist: 'Shashaa Tirupati', duration: 240, url: 'songs/v/manasu_maree.mp3' },
            { id: 'song2_v', title: 'Vishwaroopam', artist: 'Anirudh Ravichander', duration: 250, url: 'songs/v/vishwaroopam.mp3' }
        ]
    }
];

const topChartsData = [
    { title: 'Daavudi', artist: 'Ed Sheeran', album: 'Devara', url: '/songs/Daavudi.mp3', coverUrl: '/images/de.jpg' },
    { title: 'Samayama', artist: 'chakri', album: 'After Hours', url: '/songs/Samayama.mp3', coverUrl: '/images/hi.jpg' },
    { title: 'inkem', artist: 'chakri', album: 'Future Nostalgia', url: '/songs/inkem.mp3', coverUrl: '/images/geetha.jpg' },
    { title: 'Taxiwala', artist: 'Silpa', album: 'Stay', url: '/songs/maate.mp3', coverUrl: '/images/taxi.jpg' },
    { title: 'RRR', artist: 'DSP', album: 'RRR', url: '/songs/natu.mp3', coverUrl: '/images/rrr.jpg' },
];

function App() {
    const [currentView, setCurrentView] = useState('home');
    const [currentAlbum, setCurrentAlbum] = useState(albumsData[0]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState({ songs: [], albums: [] });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // --- NEW: Playlist State ---
    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
    const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);
    const [songToAdd, setSongToAdd] = useState(null);


    const audioRef = useRef(null);
    const currentSong = currentAlbum.songs[currentSongIndex];

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const setAudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        }
        const setAudioTime = () => setCurrentTime(audio.currentTime);
        audio.addEventListener('loadeddata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);
        audio.addEventListener('ended', playNext);
        return () => {
            audio.removeEventListener('loadeddata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
            audio.removeEventListener('ended', playNext);
        }
    }, [currentSong]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(e => console.error("Playback error:", e));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentSong]);


    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.length >= 2) {
            const lowerCaseQuery = query.toLowerCase();
            const matchingSongs = [];
            const matchingAlbums = [];
            albumsData.forEach(album => {
                if (album.title.toLowerCase().includes(lowerCaseQuery) || album.artist.toLowerCase().includes(lowerCaseQuery)) {
                    matchingAlbums.push(album);
                }
                album.songs.forEach(song => {
                    if (song.title.toLowerCase().includes(lowerCaseQuery) || song.artist.toLowerCase().includes(lowerCaseQuery)) {
                        matchingSongs.push({ ...song, albumTitle: album.title, albumId: album.id, coverUrl: album.coverUrl });
                    }
                });
            });
            setSearchResults({ songs: matchingSongs, albums: matchingAlbums });
            setCurrentView('search-results');
        } else {
             setSearchResults({ songs: [], albums: [] });
        }
    }


    const loadSong = (album, songIndex) => {
        setCurrentAlbum(album);
        setCurrentSongIndex(songIndex);
        addToRecentlyPlayed(album.songs[songIndex], album);
    }

    const playSong = (album, songIndex) => {
        loadSong(album, songIndex);
        setIsPlaying(true);
    }
    
    const playTopChartSong = (song) => {
        const tempAlbum = {
            id: 'top-charts',
            title: song.album,
            artist: 'Various Artists',
            coverUrl: song.coverUrl,
            songs: [song]
        };
        playSong(tempAlbum, 0);
    };


    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    const playNext = () => {
        if (currentAlbum.songs.length === 0) return;
        const nextIndex = (currentSongIndex + 1) % currentAlbum.songs.length;
        loadSong(currentAlbum, nextIndex);
        setIsPlaying(true);
    }

    const playPrev = () => {
        if (currentAlbum.songs.length === 0) return;
        const prevIndex = (currentSongIndex - 1 + currentAlbum.songs.length) % currentAlbum.songs.length;
        loadSong(currentAlbum, prevIndex);
        setIsPlaying(true);
    }

    const toggleFavorite = (songId) => {
        setFavorites(prev =>
            prev.includes(songId) ? prev.filter(id => id !== songId) : [...prev, songId]
        );
    }
    
    const isFavorite = (songId) => favorites.includes(songId);

    const addToRecentlyPlayed = (song, album) => {
        const songData = { ...song, albumTitle: album.title, albumId: album.id, coverUrl: album.coverUrl, };
        setRecentlyPlayed(prev => {
            const filtered = prev.filter(item => item.id !== song.id);
            const updated = [songData, ...filtered];
            return updated.length > 10 ? updated.slice(0, 10) : updated;
        });
    }
    
    const formatTime = (seconds) => {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    const handleProgressClick = (e) => {
        const progressBar = e.currentTarget;
        const clickPosition = e.nativeEvent.offsetX;
        const width = progressBar.offsetWidth;
        const duration = audioRef.current.duration;
        audioRef.current.currentTime = (clickPosition / width) * duration;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const usernameInput = e.target.username.value;
        if (usernameInput && e.target.password.value) {
            setIsLoggedIn(true);
            setUsername(usernameInput);
            setIsLoginModalOpen(false);
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setFavorites([]);
    }

    // --- NEW: Playlist Management Functions ---
    const handleCreatePlaylist = (name) => {
        if (name && name.trim() !== '') {
            const newPlaylist = { id: `pl-${Date.now()}`, name: name.trim(), songs: [] };
            setPlaylists(prev => [...prev, newPlaylist]);
        }
    };

    const handleDeletePlaylist = (playlistId) => {
        setPlaylists(prev => prev.filter(p => p.id !== playlistId));
        if (selectedPlaylistId === playlistId) {
            setCurrentView('playlists');
            setSelectedPlaylistId(null);
        }
    };

    const openPlaylistModal = (song) => {
        setSongToAdd(song);
        setIsPlaylistModalOpen(true);
    };

    const handleAddSongToPlaylist = (playlistId) => {
        setPlaylists(prev => prev.map(playlist => {
            if (playlist.id === playlistId) {
                if (playlist.songs.some(s => s.id === songToAdd.id)) {
                    alert('Song is already in this playlist.');
                    return playlist; // Song already exists
                }
                return { ...playlist, songs: [...playlist.songs, songToAdd] };
            }
            return playlist;
        }));
        setIsPlaylistModalOpen(false);
    };

    const handleRemoveSongFromPlaylist = (playlistId, songId) => {
        setPlaylists(prev => prev.map(playlist => {
            if (playlist.id === playlistId) {
                return { ...playlist, songs: playlist.songs.filter(s => s.id !== songId) };
            }
            return playlist;
        }));
    };

    const playPlaylistSong = (playlist, songIndex) => {
        const playlistAsAlbum = {
            id: playlist.id,
            title: playlist.name,
            artist: "Playlist",
            coverUrl: playlist.songs[songIndex]?.coverUrl || '/images/de.jpg',
            songs: playlist.songs
        };
        playSong(playlistAsAlbum, songIndex);
        setCurrentView('home');
    };


    return (
        <div className="app-container">
            <Sidebar 
                currentView={currentView} 
                setCurrentView={setCurrentView}
                onSearch={handleSearch}
                isLoggedIn={isLoggedIn}
                username={username}
                onLogout={handleLogout}
                onLoginClick={() => setIsLoginModalOpen(true)}
            />
            <MainContent
                currentView={currentView} setCurrentView={setCurrentView} currentAlbum={currentAlbum}
                currentSong={currentSong} currentSongIndex={currentSongIndex} isPlaying={isPlaying}
                togglePlayPause={togglePlayPause} playNext={playNext} playPrev={playPrev}
                toggleFavorite={toggleFavorite} isFavorite={isFavorite} playSong={playSong}
                albums={albumsData} favorites={favorites} recentlyPlayed={recentlyPlayed}
                searchResults={searchResults} topCharts={topChartsData} playTopChartSong={playTopChartSong}
                formatTime={formatTime} currentTime={currentTime} duration={duration}
                handleProgressClick={handleProgressClick} 
                // --- NEW: Playlist Props ---
                playlists={playlists} handleCreatePlaylist={handleCreatePlaylist}
                handleDeletePlaylist={handleDeletePlaylist} openPlaylistModal={openPlaylistModal}
                selectedPlaylistId={selectedPlaylistId} setSelectedPlaylistId={setSelectedPlaylistId}
                handleRemoveSongFromPlaylist={handleRemoveSongFromPlaylist}
                playPlaylistSong={playPlaylistSong}
            />
            {isLoginModalOpen && ( <LoginModal onLogin={handleLogin} onClose={() => setIsLoginModalOpen(false)} /> )}
            {isPlaylistModalOpen && (
                <AddToPlaylistModal
                    playlists={playlists}
                    onClose={() => setIsPlaylistModalOpen(false)}
                    onSelectPlaylist={handleAddSongToPlaylist}
                />
            )}
            <audio ref={audioRef} src={currentSong?.url}></audio>
        </div>
    );
}

const Sidebar = ({ currentView, setCurrentView, onSearch, isLoggedIn, username, onLogout, onLoginClick }) => {
    
    const handleSearchChange = (e) => {
        onSearch(e.target.value);
    };
    
    return (
        <div className="sidebar">
            <div className="logo">
                <i className="fas fa-music"></i>
                <h2>Music Player</h2>
            </div>
             <div className="search-container">
                <input type="text" id="search-input" placeholder="🔍 Search songs or albums..." onChange={handleSearchChange} />
                <i className="fas fa-search search-icon"></i>
            </div>
            <nav>
                <ul>
                    <li className={currentView === 'home' ? 'active' : ''} onClick={() => setCurrentView('home')}><i className="fas fa-home"></i> 🏠 Home</li>
                    <li className={currentView === 'albums' ? 'active' : ''} onClick={() => setCurrentView('albums')}><i className="fas fa-compact-disc"></i> 💿 Albums</li>
                    <li className={currentView === 'favorites' ? 'active' : ''} onClick={() => setCurrentView('favorites')}><i className="fas fa-heart"></i> ❤️ Favorites</li>
                    {/* --- NEW: Playlists Link --- */}
                    <li className={currentView === 'playlists' || currentView === 'playlist-detail' ? 'active' : ''} onClick={() => setCurrentView('playlists')}><i className="fas fa-stream"></i> 🎼 Playlists</li>
                    <li className={currentView === 'recently-played' ? 'active' : ''} onClick={() => setCurrentView('recently-played')}><i className="fas fa-history"></i> 🕒 Recently Played</li>
                    <li className={currentView === 'top-charts' ? 'active' : ''} onClick={() => setCurrentView('top-charts')}><i className="fas fa-chart-line"></i> 📈 Top Charts</li>
                </ul>
            </nav>
            <div className="user-section">
                <div className="user-icon" onClick={!isLoggedIn ? onLoginClick : null}>
                    <i className="fas fa-user"></i>
                </div>
                <div className="login-status" id="login-status">
                      <span>{isLoggedIn ? `Welcome, ${username}`: '👤 Not logged in'}</span>
                </div>
                {isLoggedIn && (
                     <button id="logout-btn" className="logout-btn" onClick={onLogout}>
                         <i className="fas fa-sign-out-alt"></i> 🚪
                    </button>
                )}
            </div>
        </div>
    );
};

const MainContent = (props) => {
    return (
        <div className="main-content">
            {props.currentView === 'home' && <HomeView {...props} />}
            {props.currentView === 'albums' && <AlbumsView {...props} />}
            {props.currentView === 'favorites' && <FavoritesView {...props} />}
            {props.currentView === 'search-results' && <SearchResultsView {...props} />}
            {props.currentView === 'recently-played' && <RecentlyPlayedView {...props} />}
            {props.currentView === 'top-charts' && <TopChartsView {...props} />}
            {/* --- NEW: Playlist Views --- */}
            {props.currentView === 'playlists' && <PlaylistsView {...props} />}
            {props.currentView === 'playlist-detail' && <PlaylistDetailView {...props} />}
        </div>
    );
};

const HomeView = ({ currentAlbum, currentSong, currentSongIndex, isPlaying, togglePlayPause, playNext, playPrev, toggleFavorite, isFavorite, playSong, formatTime, currentTime, duration, handleProgressClick, openPlaylistModal }) => (
    <div className="view" id="home-view">
        <h1>🎧 Now Playing</h1>
        <div className="now-playing">
            <div className="album-cover">
                <img id="current-album-cover" src={currentAlbum.coverUrl} alt="Album Cover" />
            </div>
            <div className="song-details">
                <h2 id="current-song-title">{currentSong.title}</h2>
                <p id="current-song-artist">🎤 {currentSong.artist}</p>
                <p id="current-album-title">💿 {currentAlbum.title}</p>
            </div>
        </div>
        <PlayerControls
              isPlaying={isPlaying} togglePlayPause={togglePlayPause} playNext={playNext} playPrev={playPrev}
             toggleFavorite={() => toggleFavorite(currentSong.id)} isFavorite={isFavorite(currentSong.id)}
             currentTime={currentTime} duration={duration} formatTime={formatTime} onProgressClick={handleProgressClick}
        />
        <div className="current-playlist">
            <h3>📜 Current Playlist</h3>
            <ul id="current-playlist">
                {currentAlbum.songs.map((song, index) => (
                    <li key={song.id} className={index === currentSongIndex ? 'active' : ''} onClick={() => playSong(currentAlbum, index)}>
                        <div className="song-info">
                            <span className="song-number">{index + 1}</span>
                            <div className="song-title-artist">
                                <h4>{song.title}</h4>
                                <p>{song.artist}</p>
                            </div>
                        </div>
                        <div className="song-actions">
                             {/* --- NEW: Add to Playlist Button --- */}
                            <button className="add-to-playlist" onClick={(e) => { e.stopPropagation(); openPlaylistModal({ ...song, albumTitle: currentAlbum.title, albumId: currentAlbum.id, coverUrl: currentAlbum.coverUrl }); }}>
                                <i className="fas fa-plus"></i> ➕
                            </button>
                            <button className={`favorite-song ${isFavorite(song.id) ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); toggleFavorite(song.id); }}>
                                <i className={`${isFavorite(song.id) ? 'fas' : 'far'} fa-heart`}></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const PlayerControls = ({ isPlaying, togglePlayPause, playNext, playPrev, toggleFavorite, isFavorite, currentTime, duration, formatTime, onProgressClick }) => (
    <div className="player-controls">
        <div className="progress-container">
            <div className="progress-bar" onClick={onProgressClick}>
                <div className="progress" id="progress" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
            </div>
            <div className="time">
                <span id="current-time">⏱️ {formatTime(currentTime)}</span>
                <span id="duration">⏱️ {formatTime(duration)}</span>
            </div>
        </div>
        <div className="controls">
            <button id="prev-btn" onClick={playPrev}><i className="fas fa-backward"></i></button>
            <button id="play-btn" onClick={togglePlayPause} className={isPlaying ? 'playing' : ''}>
                <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
            <button id="next-btn" onClick={playNext}><i className="fas fa-forward"></i></button>
            <button id="favorite-btn" onClick={toggleFavorite} className={isFavorite ? 'active' : ''}>
                <i className={`fas fa-heart`}></i> 
            </button>
        </div>
    </div>
);

const AlbumsView = ({ albums, playSong, setCurrentView }) => (
    <div className="view" id="albums-view">
        <h1>💿 Albums</h1>
        <div className="albums-grid">
            {albums.map(album => (
                <div key={album.id} className="album-card" onClick={() => { playSong(album, 0); setCurrentView('home'); }}>
                    <img src={album.coverUrl} alt={album.title} />
                    <div className="play-overlay"><i className="fas fa-play"></i></div>
                    <div className="album-info">
                        <h3>{album.title}</h3>
                        <p>{album.artist}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const FavoritesView = ({ albums, favorites, playSong, toggleFavorite, setCurrentView, openPlaylistModal }) => {
    const favoriteSongs = albums.flatMap(album =>
        album.songs.filter(song => favorites.includes(song.id)).map(song => ({
            ...song,
            albumTitle: album.title,
            albumId: album.id,
            coverUrl: album.coverUrl
        }))
    );

    return (
        <div className="view" id="favorites-view">
            <h1>❤️ Favorites</h1>
            <ul id="favorites-list" className="favorites-list">
                {favoriteSongs.length > 0 ? favoriteSongs.map((song, index) => (
                    <li key={song.id}>
                         <div className="song-info">
                            <span className="song-number">{index + 1}</span>
                            <div className="song-title-artist">
                                <h4>{song.title}</h4>
                                <p>{song.artist} • {song.albumTitle}</p>
                            </div>
                        </div>
                        <div className="song-actions">
                            <button className="add-to-playlist" onClick={() => openPlaylistModal(song)}>
                                <i className="fas fa-plus"></i> ➕
                            </button>
                            <button className="play-favorite" onClick={() => {
                                const album = albums.find(a => a.id === song.albumId);
                                const songIndex = album.songs.findIndex(s => s.id === song.id);
                                playSong(album, songIndex);
                                setCurrentView('home');
                            }}>
                                <i className="fas fa-play"></i>
                            </button>
                            <button className="remove-favorite" onClick={() => toggleFavorite(song.id)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </li>
                )) : <p className="text-center p-4">No favorites yet.</p>}
            </ul>
        </div>
    );
};


const SearchResultsView = ({ searchResults, playSong, toggleFavorite, isFavorite, setCurrentView, openPlaylistModal }) => (
    <div className="view" id="search-results-view">
        <h1>🔍 Search Results</h1>
        <div className="search-results-container">
            <div className="search-section">
                <h2>🎧 Songs</h2>
                <ul id="song-results" className="search-results-list">
                   {searchResults.songs.length > 0 ? searchResults.songs.map((song, index) => (
                       <li key={song.id}>
                            <div className="song-info">
                                <span className="song-number">{index + 1}</span>
                                <div className="song-title-artist">
                                    <h4>{song.title}</h4>
                                    <p>{song.artist} • {song.albumTitle}</p>
                                </div>
                            </div>
                            <div className="song-actions">
                                <button className="add-to-playlist" onClick={() => openPlaylistModal(song)}>
                                    <i className="fas fa-plus"></i> ➕
                                </button>
                                <button className="play-search-result" onClick={() => {
                                    const album = albumsData.find(a => a.id === song.albumId);
                                    const songIndex = album.songs.findIndex(s => s.id === song.id);
                                    playSong(album, songIndex);
                                    setCurrentView('home');
                                }}>
                                    <i className="fas fa-play"></i>
                                </button>
                                <button className={`favorite-song ${isFavorite(song.id) ? 'active' : ''}`} onClick={() => toggleFavorite(song.id)}>
                                    <i className={`${isFavorite(song.id) ? 'fas' : 'far'} fa-heart`}></i>
                                </button>
                            </div>
                       </li>
                   )) : <p className="no-results">No songs found</p>}
                </ul>
            </div>
            <div className="search-section">
                <h2>💿 Albums</h2>
                <div id="album-results" className="albums-grid">
                    {searchResults.albums.length > 0 ? searchResults.albums.map(album => (
                        <div key={album.id} className="album-card" onClick={() => { playSong(album, 0); setCurrentView('home'); }}>
                            <img src={album.coverUrl} alt={album.title} />
                             <div className="play-overlay"><i className="fas fa-play"></i></div>
                            <div className="album-info">
                                <h3>{album.title}</h3>
                                <p>{album.artist}</p>
                            </div>
                        </div>
                    )) : <p className="no-results">No albums found</p>}
                </div>
            </div>
        </div>
    </div>
);


const RecentlyPlayedView = ({ recentlyPlayed, playSong, setCurrentView }) => (
    <div className="view" id="recently-played-view">
        <h1>🕒 Recently Played</h1>
        <ul id="recently-played-list" className="recently-played-list">
             {recentlyPlayed.length > 0 ? recentlyPlayed.map((song, index) => (
                <li key={`${song.id}-${index}`} onClick={() => {
                        const album = albumsData.find(a => a.id === song.albumId);
                        const songIndex = album.songs.findIndex(s => s.id === song.id);
                        playSong(album, songIndex);
                        setCurrentView('home');
                }}>
                    <div className="song-info">
                        <span className="song-number">{index + 1}</span>
                        <div className="song-title-artist">
                            <h4>{song.title}</h4>
                            <p>{song.artist} • {song.albumTitle}</p>
                        </div>
                    </div>
                </li>
             )) : <p className="text-center p-4">No songs played recently.</p>}
        </ul>
    </div>
);

const TopChartsView = ({ topCharts, playTopChartSong }) => (
    <div className="view" id="top-charts-view">
        <h1>📈 Top Charts</h1>
        <ul id="top-charts-list" className="top-charts-list">
            {topCharts.map((song, index) => (
                <li key={index} onClick={() => playTopChartSong(song)}>
                    <div className="song-info">
                        <img src={song.coverUrl} alt={song.title} className="song-cover"/>
                        <div className="song-title-artist">
                            <h4>{song.title}</h4>
                            <p>{song.artist} • {song.album}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const LoginModal = ({ onLogin, onClose }) => (
    <div className="login-modal active">
        <div className="login-form">
            <span className="close-modal" onClick={onClose}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={onLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    </div>
);

// --- NEW: Playlist Components ---

const AddToPlaylistModal = ({ playlists, onClose, onSelectPlaylist }) => (
    <div className="login-modal active">
        <div className="login-form playlist-modal">
            <span className="close-modal" onClick={onClose}>&times;</span>
            <h2>Add to Playlist</h2>
            {playlists.length > 0 ? (
                <ul className="playlist-modal-list">
                    {playlists.map(playlist => (
                        <li key={playlist.id} onClick={() => onSelectPlaylist(playlist.id)}>
                            {playlist.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No playlists created yet. Go to the Playlists section to create one.</p>
            )}
        </div>
    </div>
);

const PlaylistsView = ({ playlists, handleCreatePlaylist, handleDeletePlaylist, setCurrentView, setSelectedPlaylistId }) => {
    const [newPlaylistName, setNewPlaylistName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreatePlaylist(newPlaylistName);
        setNewPlaylistName('');
    };

    return (
        <div className="view" id="playlists-view">
            <h1>🎼 My Playlists</h1>
            <div className="create-playlist-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={newPlaylistName}
                        onChange={(e) => setNewPlaylistName(e.target.value)}
                        placeholder="New playlist name..."
                        required
                    />
                    <button type="submit">Create Playlist</button>
                </form>
            </div>
            <div className="albums-grid">
                {playlists.length > 0 ? playlists.map(playlist => (
                    <div key={playlist.id} className="album-card playlist-card">
                        <div className="playlist-card-content" onClick={() => { setSelectedPlaylistId(playlist.id); setCurrentView('playlist-detail'); }}>
                             <i className="fas fa-stream default-playlist-icon"></i>
                             <div className="play-overlay"><i className="fas fa-play"></i></div>
                             <div className="album-info">
                                 <h3>{playlist.name}</h3>
                                 <p>{playlist.songs.length} songs</p>
                             </div>
                        </div>
                         <button className="delete-playlist-btn" onClick={() => handleDeletePlaylist(playlist.id)}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                )) : <p>You haven't created any playlists yet.</p>}
            </div>
        </div>
    );
};

const PlaylistDetailView = ({ playlists, selectedPlaylistId, handleRemoveSongFromPlaylist, playPlaylistSong, setCurrentView, openPlaylistModal }) => {
    const playlist = playlists.find(p => p.id === selectedPlaylistId);

    if (!playlist) {
        return (
            <div className="view" id="playlist-detail-view">
                <h1>Playlist not found</h1>
                <button onClick={() => setCurrentView('playlists')}>Back to Playlists</button>
            </div>
        );
    }

    return (
        <div className="view" id="playlist-detail-view">
            <button className="back-button" onClick={() => setCurrentView('playlists')}>← Back to Playlists</button>
            <h1>{playlist.name}</h1>
            <ul className="favorites-list">
                {playlist.songs.length > 0 ? playlist.songs.map((song, index) => (
                    <li key={song.id}>
                        <div className="song-info" onClick={() => playPlaylistSong(playlist, index)}>
                            <span className="song-number">{index + 1}</span>
                            <div className="song-title-artist">
                                <h4>{song.title}</h4>
                                <p>{song.artist} • {song.albumTitle}</p>
                            </div>
                        </div>
                        <div className="song-actions">
                            <button className="remove-favorite" onClick={() => handleRemoveSongFromPlaylist(playlist.id, song.id)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </li>
                )) : <p>This playlist is empty. Add some songs!</p>}
            </ul>
        </div>
    );
};


export default App;