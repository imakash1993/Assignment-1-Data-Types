/// <summary>
/// Single line var declaration
/// </summary>
var trackTitle = "Demo Song";
var artistName = "Demo Artist";
var trackDurationSeconds = 328;
var trackId = 1;
var albumName = "Demo Song";
var liveness = "0.176192386";
var albumYear = 1968;
var songInEnglish = true;
var instrumental = false;
var has_lyrics = true;
var has_subtitles = true;
var album_id = 569858;
var albumName = "Demo Song";

console.log("*************************Single line var declaration Start****************************");
console.log(trackTitle + '\n', artistName + '\n', trackDurationSeconds + '\n', album_id + '\n', albumName + '\n', liveness + '\n', albumYear + '\n', songInEnglish + '\n', instrumental + '\n', has_lyrics + '\n', has_subtitles + '\n', trackId + '\n', albumName + '\n');
console.log("*************************Single line var declaration End****************************" + '\n' + '\n' + '\n' + '\n');


/// <summary>
///Properties insde  Objects
/// </summary>
var song = { ///primary object
    trackTitle: "Demo Song",
    artistName: "Demo Artist",
    trackDurationSeconds: 328,
    songInEnglish: true,
    instrumental: false,
    has_lyrics: true,
    has_subtitles: true,
    album: { ///nested object
        album_id: 1,
        albumName: "Demo Song",
        liveness: "0.176192386",
        albumYear: 1968,
        album_id: 569858,
        albumName: "Demo Song"
    }
}

console.log("*************************Properties insde  Objects Start****************************");
console.log(song.trackTitle + '\n', song.artistName + '\n', song.trackDurationSeconds + '\n', song.album.albumName + '\n', song.album);
console.log("*************************Properties insde  Objects End****************************" + '\n' + '\n' + '\n' + '\n');


/// <summary>
///Properties insde  Objects with functions
/// </summary>
var song = { ///primary object
    trackTitle: "Demo Song",
    artistName: "Demo Artist",
    trackDurationSeconds: 328,
    songInEnglish: true,
    instrumental: false,
    has_lyrics: true,
    rating: 95,
    getRating: function () { /// method for returning the song rating based on popularity
        return this.rating / 10;
    },
    has_subtitles: true,
    album: { ///nested object
        album_id: 1,
        albumName: "Demo Song",
        liveness: "0.176192386",
        albumYear: 1968,
        album_id: 569858,
    }
}

console.log("*************************Properties insde  Objects with functions Start****************************");
console.log(song.trackTitle + '\n', song.artistName + '\n', song.trackDurationSeconds + '\n', song.getRating() + '\n', song.album);
console.log("*************************Properties insde  Objects with functions End****************************" + '\n' + '\n' + '\n' + '\n');

/// <summary>
///constructor for creaking song objects
/// </summary>
var songCreator = function (songName, albumName, albumId, duration, ratings) {
    return {
        trackTitle: songName,
        trackDurationSeconds: parseInt(duration),
        rating: ratings,
        getRating: function () {
            return this.rating / 10;
        },
        has_subtitles: true,
        album: { ///nested object
            album_id: albumId,
            albumName: albumName,
        }

    }
};

console.log("*************************constructor for creaking song objects Start****************************");
console.log(songCreator("constSong", "constAlbum", 2, 260, 83));
console.log("*************************constructor for creaking song objects End****************************" + '\n' + '\n' + '\n' + '\n');

/// <summary>
///creaking bulk data for arrays using constructor
/// </summary>
var songsArray = [];
for (let i = 0; i <= 15; i += 1) {
    songsArray.push(songCreator("dummySong " + i, "dummyAlbum " + i, i, Math.floor(Math.random() * 600) + 60, Math.floor(Math.random() * 100) + 1));
}

console.log("*************************creaking bulk data for arrays using constructor Start****************************");
console.log(songsArray);
console.log("*************************creaking bulk data for arrays using constructor End****************************");
