// const api = "https://localhost:7281/api"

function ajaxCall(method, api, data, successCB, errorCB) {
  $.ajax({
    type: method, // Get/Post/Put/Delete/Patch
    url: api, // routing to the server
    data: data, // the data we pass in the body (if any…)
    cache: false, // allow caching
    contentType: "application/json", // the data format we expect back
    dataType: "json", // the data format that we send
    success: successCB, // the success callback function
    error: errorCB, // the error callback function
  });
}
function GetArtistInfo(callback, artist) {
  ajaxCall(
    "Get",
    `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=458ecbf52daa3d11632dfc7fd9cb1d3f&format=json`,
    "",
    function (data) {
      //swal.fire("Update Sucsessfully!", "", "success");
      callback(data);
    },
    (data) => {
      console.log("error");
    }
  );
  return false;
}
function getSongByName(callback, name) {
  ajaxCall(
    "GET",
    `${api}/SongMusics/GetSongByName/name/${name}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function getSongsByText(callback, text) {
  ajaxCall(
    "GET",
    `${api}/SongMusics/GetSongByText/text/${text}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function getArtistByName(callback, name) {
  ajaxCall(
    "GET",
    `${api}/ArtistMusics/GetArtistByName/name/${name}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function GetSongsForArtis(callback, artistName) {
  ajaxCall(
    "GET",
    `${api}/SongMusics/GetByArtistName/artistName/${artistName}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function GetAllSongs(callback) {
  ajaxCall(
    "GET",
    `${api}/SongMusics`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function GetTop10GlobalSongs(callback) {
  ajaxCall(
    "GET",
    `${api}/SongMusics/GetTop10GlobalSongs`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function GetNumberOfListenersToMusic(callback, SongId) {
  ajaxCall(
    "GET",
    `${api}/SongMusics/GetTheNumberPlayedForGivenSong/SongId/${SongId}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}

function GetTheNumberOfAppearanceInUserByGivenSong(callback, SongId) {
  ajaxCall(
    "GET",
    `${api}/SongMusics/GetTheNumberOfAppearanceInUserByGivenSong/SongId/${SongId}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function GetTheNumberOfAppearanceInUserByGivenArtist(callback, ArtistName) {
  ajaxCall(
    "GET",
    `${api}/ArtistMusics/GetTheNumberOfAppearanceInUserByGivenArtist/ArtistName/${ArtistName}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function GetNumberOfPlayedForGivenArtist(callback, ArtistName) {
  ajaxCall(
    "GET",
    `${api}/ArtistMusics/GetNumberOfPlayedForGivenArtist/ArtistName/${ArtistName}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function UpdateUserDetails(callback, first, last, email, id) {
  let User = {
    id: id,
    first: first,
    last: last,
    email: email,
    password: "string",
    imgUrl: "string", // need to check how to chenge it
    registrationDate: "2023-07-12T08:22:14.348Z", // random date
  };
  ajaxCall(
    "POST",
    `${api}/UserMusics`,
    JSON.stringify(User),
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function ChangePassowrdForUser(id, OldPassowrd, NewPassword) {
  ajaxCall(
    "PUT",
    `${api}/UserMusics/Put?id=${id}&password=${OldPassowrd}&passwordToChange=${NewPassword}`,
    "",
    function (data) {
      setTimeout(() => {
        window.location.reload();
      }, 1600);
      swal.fire("Password Changed", "Secessfuly", "success");
    },
    () => {
      swal.fire("Password Changed", "failed", "error");
    }
  );
  return false;
}
function GetFavoriteSongByUserId(callback, UserId) {
  ajaxCall(
    "GET",
    `${api}/SongMusics/GetFavoriteSongByUserId/UserId/${UserId}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function PutFavoriteSongToUser(callback, UserId, SongId) {
  ajaxCall(
    "PUT",
    `${api}/SongMusics/Put?UserId=${UserId}&SongId=${SongId}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function DeleteFavoriteSongToUser(callback, UserId, SongId) {
  ajaxCall(
    "DELETE",
    `${api}/SongMusics/Delete?UserId=${UserId}&SongId=${SongId}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function GetFavoriteArtistByUserId(callback, UserId) {
  ajaxCall(
    "GET",
    `${api}/ArtistMusics/GetFavoriteArtistByUserId/UserId/${UserId}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function GetAllArtists(callback) {
  ajaxCall(
    "GET",
    `${api}/ArtistMusics`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function AddPlayedForSongByGivenUserId(callback, SongId, UserId) {
  ajaxCall(
    "PUT",
    `${api}/SongMusics/CreateOrUpdateNumberOfPlayed?SongId=${SongId}&UserId=${UserId}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function GetAllFavoriteSongForGivenUserId(callback, UserId) {
  ajaxCall(
    "GET",
    `${api}/SongMusics/GetFavoriteSongByUserId/UserId/${UserId}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function ChangeUrlByGivenSongId(callback, SongId, Url) {
  ajaxCall(
    "PUT",
    `${api}/SongMusics/ChangeSongUrl?SongId=${SongId}&Url=${Url}`,
    "",
    function (data) {
      callback(data);
    },
    () => {
      console.log("failed to change url");
    }
  );
  return false;
}
function ChnageYoutubeId(callback, SongId, YoutubeId) {
  ajaxCall(
    "PUT",
    `${api}/SongMusics/ChangeYoutubeIdSong?SongId=${SongId}&YoutubeId=${YoutubeId}`,
    "",
    function (data) {
      callback(data);
    },
    () => {
      console.log("failed to change youtubeId");
    }
  );
  return false;
}
function GetNumberOfUsers(callback) {
  ajaxCall(
    "GET",
    `${api}/UserMusics/GetNumberOfUsers`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function GetNumberOfSongs(callback) {
  ajaxCall(
    "GET",
    `${api}/SongMusics/GetNumberOfSongs`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function PutFavoriteArtistToUser(callback, UserId, Artist) {
  ajaxCall(
    "PUT",
    `${api}/ArtistMusics/Put?UserId=${UserId}&ArtistName=${Artist}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function DeleteFavoriteArtistToUser(callback, UserId, Artist) {
  ajaxCall(
    "DELETE",
    `${api}/ArtistMusics/Delete?UserId=${UserId}&ArtistName=${Artist}`,
    "",
    function (data) {
      callback(data);
    },
    NotFound
  );
  return false;
}
function NotFound(error) {
  console.log("Not found");
  console.log(error.responseText);
}
