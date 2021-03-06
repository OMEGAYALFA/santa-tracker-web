/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

goog.provide('app.Models');

/**
 * List of scenes and the associated data the press might need.
 */

var Cards = [
  {
    'key': 'traditions',
    'title': 'Holiday Traditions',
    'opens': '1',
    'ordinal': 'st',
    'type': 'Learn',
    'education': true,
    'description': 'From wearing a toque in Canada to sporting swim trunks in Australia, click the map pins to learn about holiday traditions around the globe',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-tradtions.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC1-traditions-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'codelab',
    'title': 'Code Lab',
    'opens': '1',
    'ordinal': 'st',
    'type': 'Learn',
    'education': true,
    'description': 'Use coding fundamentals to navigate the elf through the forest to find dropped presents.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-codelab.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC1-codelab-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'airport',
    'title': 'North Pole Airport',
    'opens': '1',
    'ordinal': 'st',
    'type': 'Play',
    'description': 'It\'s arrival time! Elves land at the North Pole Airport (ELV) - check out the conveyor belt for surprises.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-airport.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC1-airport-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'seasonofgiving',
    'title': 'Season of Giving',
    'opens': '1',
    'ordinal': 'st',
    'type': 'Learn',
    'education': true,
    'description': 'Google\'s Santa Tracker partnered with Google.org to connect kids of all ages with charities around the world. Decorate an ornament to print out and hang on your tree to show your support for SolarAid, the Jane Goodall Foundation, WWF, and many more.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-season-of-giving.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC1-seasonofgiving-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'santasback',
    'title': 'Santa\'s Back',
    'opens': '2',
    'ordinal': 'nd',
    'type': 'Watch',
    'new': true,
    'description': 'Rudolph\'s ready and the elves are hard at work. One problem - where\'s Santa? ',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-santa-is-back.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC2-santasback-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'santaselfie',
    'title': 'Santa Selfie',
    'opens': '3',
    'ordinal': 'rd',
    'type': 'Play',
    'description': 'Give Santa a makeover by trimming, coloring, and decorating Santa\'s beard. Don\'t forget to take a selfie and share with friends when you\'re done!',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-santa-selfie.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC3-santaselfie-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'translations',
    'title': 'Translations',
    'opens': '4',
    'ordinal': 'th',
    'type': 'Learn',
    'education': true,
    'description': 'From Happy New Year in Elvish to Дед Мороз, learn the Santa lingo from around the world.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-translations.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC4-translation-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'callfromsanta',
    'title': 'Call from Santa',
    'opens': '5',
    'ordinal': 'th',
    'type': 'Play',
    'description': 'Santa\'s spreading the holiday cheer - pick from a variety of options to send a call to a friend from Santa.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-call-from-santa_US-only.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'briefing',
    'title': 'Mrs. Claus\' Briefing',
    'opens': '5',
    'ordinal': 'th',
    'type': 'Play',
    'description': 'Mrs. Claus briefs Santa and the team as they prepare for the big day.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-briefing.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC5-brief-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'presentdrop',
    'title': 'Present Drop',
    'opens': '6',
    'ordinal': 'th',
    'type': 'Play',
    'description': 'It\'s target practice time! Position the elf to hit presents so they make it down the chimney.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-present-drop.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC6-presentdrop-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'santasearch',
    'title': 'Santa Search',
    'opens': '7',
    'ordinal': 'th',
    'type': 'Play',
    'new': true,
    'description': 'Santa\'s wandering about, but the elves need him back in the North Pole. Can you help find him?',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-santa-search.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC7-santasearch-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'windtunnel',
    'title': 'Windtunnel',
    'opens': '8',
    'ordinal': 'th',
    'type': 'Play',
    'description': 'You never know what the weather conditions will be. Rudolph and the elves simulate what the team will face on the big day.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-windtunnel.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC8-windtunnel-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'racer',
    'title': 'Rudolph Racer',
    'opens': '9',
    'ordinal': 'th',
    'type': 'Play',
    'description': 'On your marks, get set, go! Race with Rudolph through the forest to collect presents the elves have dropped.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-racer.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC9-racer-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'jamband',
    'title': 'Elf Jamband',
    'opens': '10',
    'ordinal': 'th',
    'type': 'Play',
    'description': 'Drag and drop musical elfs on stage to create your own unique holiday jam.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-elf-jamband.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC10-elfjamband-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'gumball',
    'title': 'Gumball Tilt',
    'opens': '11',
    'ordinal': 'th',
    'type': 'Play',
    'description': 'Need your holidays to be a bit sweeter? Tilt the candycanes to make the gumballs fall into the machine.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-gumball-tilt.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC11-gumballtilt-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'postcard',
    'title': 'Santa Cards',
    'opens': '12',
    'ordinal': 'th',
    'type': 'Play',
    'description': 'Nothing says "Happy Holidays" like Rudolph on the beach. Create your own holiday card by selecting one of many backgrounds and characters to send to friends.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-santa-cards.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC12-santacards-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'jetpack',
    'title': 'Elf Jetpack',
    'opens': '13',
    'ordinal': 'th',
    'type': 'PLay',
    'description': 'Fly the elf through the air to collect fallling presents - who knows, it might be yours.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-elf-jetpack.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC13-elfjetpack-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'boatload',
    'title': 'Gift Slingshot',
    'opens': '14',
    'ordinal': 'th',
    'type': 'Play',
    'description': 'Slingshot presents into boats as the elves transport the gifts through the North Pole.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-gift-slingshot.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC14-gifslingshot-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'codeboogie',
    'title': 'Code Boogie',
    'opens': '15',
    'ordinal': 'th',
    'type': 'Play',
    'new': true,
    'education': true,
    'description': 'The elves are back to coding practice, but mixing in their dancing skills. Use code to choreograph the elves dances - but watch out, as you get better, the dances get harder!',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-code-boogie.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC17-codeboogie-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'presentbounce',
    'title': 'Present Bounce',
    'opens': '16',
    'ordinal': 'th',
    'type': 'Play',
    'new': true,
    'description': 'Get presents from A to B using springs, conveyer belts, and the laws of motion and energy.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-present-bounce.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC16-presentbounce-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'mercator',
    'title': 'Map Quiz',
    'opens': '17',
    'ordinal': 'th',
    'type': 'Learn',
    'education': true,
    'description': 'Santa\'s got a lot of places to go. Match the outline of a country to the map in this geography game.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-map-quiz.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC15-mapquiz-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'carpool',
    'title': 'Elf Car',
    'opens': '18',
    'ordinal': 'th',
    'type': 'Watch',
    'description': 'A small car zooms through the village, arriving at the factory. One elf gets out, then another, then another...',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-elf-car.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DECX-carpool-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'citylights',
    'title': 'City Lights',
    'opens': '19',
    'ordinal': 'th',
    'type': 'Learn',
    'education': true,
    'description': 'Cycle through Street View from around the world to witness how other cities celebrate the holidays.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-city-lights.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC19-citylights-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'commandcentre',
    'title': 'Mission Control',
    'opens': '20',
    'ordinal': 'th',
    'type': 'Play',
    'description': 'It\'s almost go time. The elves are hard at work preparing the every team is ready for the big day.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-mission-control.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC20-missioncontrol-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'seasonofcaring',
    'title': 'Season of Caring',
    'opens': '21',
    'ordinal': 'st',
    'type': 'Play',
    'new': true,
    'education': true,
    'description': 'This holiday season, we partnered with Google.org to showcase how certain organizations are helping kids with special needs.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-season-of-caring.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC21-seasonofcaring-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'matching',
    'title': 'Memory Match',
    'opens': '22',
    'ordinal': 'nd',
    'type': 'Play',
    'description': 'Where\'d that tree go? Test your memory skills in this holiday game.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-memory-match.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC22-memorymatch-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  },
  {
    'key': 'liftoff',
    'title': 'Santa\'s Takeoff',
    'opens': '23',
    'ordinal': 'rd',
    'type': 'Watch',
    'new': true,
    'description': 'It\'s almost C-day! Santa and team make the final preparations for the big night - but something always goes wrong at the last minute.',
    'resources': [
      {
        'title': 'Still Screenshot',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/santa-tracker-santas-takeoff.png',
        'type': 'PNG file',
        'class': 'press-card-dl'
      },
      {
        'title': 'Animation',
        'url': 'https://storage.googleapis.com/mapsdevsite/santa-2015/DEC23-takeoff-full.gif',
        'type': 'GIF file',
        'class': 'press-card-dl'
      }
    ]
  }
];
