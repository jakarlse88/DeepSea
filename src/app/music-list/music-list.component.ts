import { Component } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent {
  genreArray: IGenre[];

  constructor() {
    this.genreArray = [
      {
        name: "Metal"
        , caption: "Scream-free!"
        , songArray: [
          {
            artist: "Wind Rose"
            , songTitle: "Diggy Diggy Hole"
            , uri: "https://www.youtube.com/watch?v=34CZjsEI1yU"
          }
          , {
            artist: "Unleash the Arcers"
            , songTitle: "Northwest Passage"
            , uri: "https://www.youtube.com/watch?v=XRD3vrSLPaw"
          }
          , {
            artist: "Beast in Black"
            , songTitle: "Blind and Frozen"
            , uri: "https://www.youtube.com/watch?v=2N4tXf3Ensw"
          }
          , {
            artist: "Sabaton"
            , songTitle: "En Livstid i Krig"
            , uri: "https://www.youtube.com/watch?v=y8jki4i4raQ"
          }
          , {
            artist: "Turisas"
            , songTitle: "End of an Empire"
            , uri: "https://www.youtube.com/watch?v=8yck2NU4tEM"
          }
        ]
      }
      , {
        name: "Soundtrack"
        , caption: ""
        , songArray: [
          {
            artist: "Sawano Hiroyuki"
            , songTitle: "Mobile Suit"
            , uri: "https://www.youtube.com/watch?v=pl5WvASvBic"
          }
          , {
            artist: "Michael Kamen"
            , songTitle: "Band of Brothers (Main Theme)"
            , uri: "https://www.youtube.com/watch?v=7uTAIpU0sa0"
          }
          , {
            artist: "Hans Zimmer"
            , songTitle: "Chevaliers de Sangreal"
            , uri: "https://www.youtube.com/watch?v=u5FyRZbqfeM"
          }
          , {
            artist: "Hans Zimmer & Lisa Gerrard"
            , songTitle: "Now We Are Free"
            , uri: "https://www.youtube.com/watch?v=NBE-uBgtINg"
          }
          , {
            artist: "Greg Edmonson"
            , songTitle: "Uncharted Theme"
            , uri: "https://www.youtube.com/watch?v=-f6LzgQ9Y34"
          }

        ]
      }
      , {
        name: "Rock"
        , caption: ""
        , songArray: [
          {
            artist: "Muse"
            , songTitle: "Knights of Cydonia"
            , uri: "https://www.youtube.com/watch?v=eNV9gv0NmzU"
          }
          , {
            artist: "Dire Straits"
            , songTitle: "Romeo and Juliet"
            , uri: "https://www.youtube.com/watch?v=7pVlwikT2Dc"
          }
          , {
            artist: "Blue Öyster Cult"
            , songTitle: "Then Came the Last Days of May"
            , uri: "https://www.youtube.com/watch?v=jyLMgIR69G4"
          }
          , {
            artist: "Steppenwolf"
            , songTitle: "It's Never Too Late"
            , uri: "https://www.youtube.com/watch?v=2hU3Sc6p0ms"
          }
          , {
            artist: "George Thorogood"
            , songTitle: "One Bourbon, One Scotch, One Beer"
            , uri: "https://www.youtube.com/watch?v=--AvCsh48bk"
          }
        ]
      }
      , {
        name: "Trance"
        , caption: ""
        , songArray: [
          {
            artist: "Ian van Dahl"
            , songTitle: "Will I (Voodoo & Serano Remix)"
            , uri: "https://www.youtube.com/watch?v=N0r6Q5lb8ko"
          }
          , {
            artist: "4 Strings"
            , songTitle: "Take Me Away (Darren Porter Rework)"
            , uri: "https://www.youtube.com/watch?v=1JxEnIiiWeI"
          }
          , {
            artist: "RAM"
            , songTitle: "RAMsterdam (Jorn van Deynhoven Remix)"
            , uri: "https://www.youtube.com/watch?v=Aw3c6rr8-mU"
          }
          , {
            artist: "Easton ft. Roxanne Emery"
            , songTitle: "Healing Rain (Bryan Kearney Remix)"
            , uri: "https://www.youtube.com/watch?v=BJByruvPKk8"
          }
          , {
            artist: "Ferry Corsten"
            , songTitle: "Beautiful"
            , uri: "https://www.youtube.com/watch?v=WdGwqUtJ03o"
          }
        ]
      }
    ];
  }
}

interface IGenre {
  name: string;
  caption: string;
  songArray: ISong[];
}

interface ISong {
  artist: string;
  songTitle: string;
  uri: string;
}