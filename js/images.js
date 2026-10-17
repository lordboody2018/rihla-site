/* =========================================================
   Rihla — Media map
   Real photos & optional short videos per tour.
   Photos: Wikimedia Commons (CC) + Unsplash (free license).
   Videos: Mixkit (free license, mp4) + Pexels (free license,
   mp4). Videos are an enhancement only — every trip keeps a
   photo + animated SVG fallback so the UI never breaks.
   ========================================================= */

var ET_IMAGES = {
  /* One real photo per tour (plus an optional short video) */
  trips: {
    'ras-mohammed-snorkeling': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/A_swimmer_and_coral_reefs_of_the_Red_Sea.jpg/960px-A_swimmer_and_coral_reefs_of_the_Red_Sea.jpg',
      video: 'https://assets.mixkit.co/videos/1582/1582-720.mp4'
    },
    'padi-open-water-diving': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Coral_oreja_de_elefante_%28Amplexidiscus_fenestrafer%29%2C_Nosy_Kalakajoro%2C_Madagascar%2C_2025-09-14%2C_DD_90.jpg/960px-Coral_oreja_de_elefante_%28Amplexidiscus_fenestrafer%29%2C_Nosy_Kalakajoro%2C_Madagascar%2C_2025-09-14%2C_DD_90.jpg',
      video: 'https://videos.pexels.com/video-files/6430502/6430502-hd_1280_720_25fps.mp4'
    },
    'sharm-quad-safari': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Desert_Bikes.jpg/960px-Desert_Bikes.jpg',
      video: 'https://videos.pexels.com/video-files/18762626/18762626-sd_640_360_30fps.mp4'
    },
    'mount-sinai-trek': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lever_de_soleil_Mont_Sina%C3%AF_Egypte_-_Sunrise_Mount_Sinai_Egypt_-_Photo_image_picture_%2812859772904%29.jpg/960px-Lever_de_soleil_Mont_Sina%C3%AF_Egypte_-_Sunrise_Mount_Sinai_Egypt_-_Photo_image_picture_%2812859772904%29.jpg',
      video: 'https://videos.pexels.com/video-files/9424567/9424567-hd_1280_720_30fps.mp4'
    },
    'sharm-glass-boat': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Boat_in_the_Red_Sea.jpg/960px-Boat_in_the_Red_Sea.jpg',
      video: 'https://assets.mixkit.co/videos/44868/44868-720.mp4'
    },
    'tiran-island-boat': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/01_Power_Play_luxury_superyacht_of_millionaire_Jan_Koum%2C_built_by_Damen_Yachting.jpg/960px-01_Power_Play_luxury_superyacht_of_millionaire_Jan_Koum%2C_built_by_Damen_Yachting.jpg',
      video: 'https://assets.mixkit.co/videos/40078/40078-720.mp4'
    },
    'sharm-aqua-park': {
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=70&auto=format&fit=crop',
      video: 'https://assets.mixkit.co/videos/17269/17269-720.mp4'
    },
    'giftun-island-boat': {
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=70&auto=format&fit=crop',
      video: 'https://videos.pexels.com/video-files/11719472/11719472-hd_1280_720_30fps.mp4'
    },
    'hurghada-diving-dolphins': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/010_Atlantic_bottlenose_dolphin_jumping_at_Pelican_point_Photo_by_Giles_Laurent.jpg/960px-010_Atlantic_bottlenose_dolphin_jumping_at_Pelican_point_Photo_by_Giles_Laurent.jpg',
      video: 'https://videos.pexels.com/video-files/5607988/5607988-hd_1280_720_30fps.mp4'
    },
    'hurghada-quad-safari': {
      image: 'https://images.unsplash.com/photo-1547235001-d703406d3f17?w=900&q=70&auto=format&fit=crop',
      video: 'https://videos.pexels.com/video-files/5977030/5977030-hd_1920_1080_25fps.mp4'
    },
    'orange-bay-island': {
      image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=70&auto=format&fit=crop',
      video: 'https://assets.mixkit.co/videos/6830/6830-720.mp4'
    },
    'hurghada-bedouin-bbq': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Minimize_Campfire_Impacts_Day_6_-_The_Seven_Days_of_Leave_No_Trace_%2811558251555%29.jpg/960px-Minimize_Campfire_Impacts_Day_6_-_The_Seven_Days_of_Leave_No_Trace_%2811558251555%29.jpg',
      video: 'https://assets.mixkit.co/videos/45481/45481-720.mp4'
    },
    'hurghada-fishing': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/DFC_0336_A_lone_fishing_boat_glides_across_a_sun-sparkled_sea_under_a_pale_cloud-streaked_sky.jpg/960px-DFC_0336_A_lone_fishing_boat_glides_across_a_sun-sparkled_sea_under_a_pale_cloud-streaked_sky.jpg',
      video: 'https://assets.mixkit.co/videos/45365/45365-720.mp4'
    },
    'hurghada-dolphin-watching': {
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=70&auto=format&fit=crop',
      video: 'https://assets.mixkit.co/videos/33559/33559-720.mp4'
    },
    'el-gouna-city-tour': {
      image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=900&q=70&auto=format&fit=crop',
      video: 'https://assets.mixkit.co/videos/9822/9822-720.mp4'
    },
    'giza-pyramids-tour': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Giza_pyramid_complex_-_360.jpg/960px-Giza_pyramid_complex_-_360.jpg',
      video: 'https://videos.pexels.com/video-files/10717893/10717893-hd_1920_1080_24fps.mp4'
    },
    'cairo-museum-citadel': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/By_ovedc_-_Egyptian_Museum_%28Cairo%29_-_139_-%28cropped%29.jpg/960px-By_ovedc_-_Egyptian_Museum_%28Cairo%29_-_139_-%28cropped%29.jpg',
      video: 'https://videos.pexels.com/video-files/4174555/4174555-hd_1280_720_30fps.mp4'
    },
    'cairo-nile-cruise': {
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=70&auto=format&fit=crop',
      video: 'https://assets.mixkit.co/videos/45393/45393-720.mp4'
    },
    'alexandria-day-trip': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Egypt%2C_Alexandria%2C_The_Corniche_of_Alexandria%2C_Mediterranean_Sea.jpg/960px-Egypt%2C_Alexandria%2C_The_Corniche_of_Alexandria%2C_Mediterranean_Sea.jpg',
      video: 'https://videos.pexels.com/video-files/19416654/19416654-hd_1920_1080_24fps.mp4'
    },
    'luxor-east-west-bank': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Templo_de_Karnak%2C_Luxor%2C_Egipto%2C_2022-04-03%2C_DD_148.jpg/960px-Templo_de_Karnak%2C_Luxor%2C_Egipto%2C_2022-04-03%2C_DD_148.jpg',
      video: 'https://assets.mixkit.co/videos/47381/47381-720.mp4'
    },
    'luxor-hot-air-balloon': {
      image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=900&q=70&auto=format&fit=crop',
      video: 'https://assets.mixkit.co/videos/9746/9746-720.mp4'
    },
    'aswan-philae-felucca': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Philae_Temple_R01.jpg/960px-Philae_Temple_R01.jpg',
      video: 'https://assets.mixkit.co/videos/9600/9600-720.mp4'
    },
    'abu-simbel-temple': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Templo_de_Rams%C3%A9s_II%2C_Abu_Simbel%2C_Egipto%2C_2022-04-02%2C_DD_26-28_HDR.jpg/960px-Templo_de_Rams%C3%A9s_II%2C_Abu_Simbel%2C_Egipto%2C_2022-04-02%2C_DD_26-28_HDR.jpg',
      video: 'https://assets.mixkit.co/videos/45401/45401-720.mp4'
    },
    'marsa-alam-dolphin-house': {
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=70&auto=format&fit=crop',
      video: 'https://assets.mixkit.co/videos/11058/11058-720.mp4'
    },
    'wadi-el-gemal-safari': {
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=70&auto=format&fit=crop',
      video: 'https://assets.mixkit.co/videos/12759/12759-720.mp4'
    },
    'alexandria-city-tour': {
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=900&q=70&auto=format&fit=crop',
      video: 'https://videos.pexels.com/video-files/7579787/7579787-hd_1920_1080_24fps.mp4'
    },
    'dahab-blue-hole': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Dahab_-_The_blue_hole_-_panoramio.jpg/960px-Dahab_-_The_blue_hole_-_panoramio.jpg',
      video: 'https://assets.mixkit.co/videos/4092/4092-720.mp4'
    }
  },

  /* Real photo backgrounds for city cards */
  cities: {
    'sharm-el-sheikh': 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=1200&q=70&auto=format&fit=crop',
    'hurghada': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=70&auto=format&fit=crop',
    'cairo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Giza_pyramid_complex_-_360.jpg/960px-Giza_pyramid_complex_-_360.jpg',
    'luxor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Templo_de_Karnak%2C_Luxor%2C_Egipto%2C_2022-04-03%2C_DD_148.jpg/960px-Templo_de_Karnak%2C_Luxor%2C_Egipto%2C_2022-04-03%2C_DD_148.jpg',
    'aswan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Philae_Temple_R01.jpg/960px-Philae_Temple_R01.jpg',
    'marsa-alam': 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=70&auto=format&fit=crop',
    'alexandria': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Egypt%2C_Alexandria%2C_The_Corniche_of_Alexandria%2C_Mediterranean_Sea.jpg/960px-Egypt%2C_Alexandria%2C_The_Corniche_of_Alexandria%2C_Mediterranean_Sea.jpg',
    'dahab': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Dahab_-_The_blue_hole_-_panoramio.jpg/960px-Dahab_-_The_blue_hole_-_panoramio.jpg'
  },

  /* Category-based fallbacks (used for trips added later) */
  byCategory: {
    snorkeling: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/A_swimmer_and_coral_reefs_of_the_Red_Sea.jpg/960px-A_swimmer_and_coral_reefs_of_the_Red_Sea.jpg',
    diving: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Coral_oreja_de_elefante_%28Amplexidiscus_fenestrafer%29%2C_Nosy_Kalakajoro%2C_Madagascar%2C_2025-09-14%2C_DD_90.jpg/960px-Coral_oreja_de_elefante_%28Amplexidiscus_fenestrafer%29%2C_Nosy_Kalakajoro%2C_Madagascar%2C_2025-09-14%2C_DD_90.jpg',
    sea: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Boat_in_the_Red_Sea.jpg/960px-Boat_in_the_Red_Sea.jpg',
    desert: 'https://images.unsplash.com/photo-1547235001-d703406d3f17?w=900&q=70&auto=format&fit=crop',
    historical: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Giza_pyramid_complex_-_360.jpg/960px-Giza_pyramid_complex_-_360.jpg',
    family: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=70&auto=format&fit=crop',
    watersports: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=70&auto=format&fit=crop',
    quad: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Desert_Bikes.jpg/960px-Desert_Bikes.jpg',
    fishing: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/DFC_0336_A_lone_fishing_boat_glides_across_a_sun-sparkled_sea_under_a_pale_cloud-streaked_sky.jpg/960px-DFC_0336_A_lone_fishing_boat_glides_across_a_sun-sparkled_sea_under_a_pale_cloud-streaked_sky.jpg',
    nightlife: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=70&auto=format&fit=crop',
    wellness: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=900&q=70&auto=format&fit=crop',
    food: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=70&auto=format&fit=crop'
  },

  /* Full-length YouTube videos (embedded) for select tours.
     `start` (seconds) jumps the embed to the matching chapter. */
  fullVideo: {
    'ras-mohammed-snorkeling': { id: 'JxZ-qMLSXTQ' },
    'padi-open-water-diving': { id: 'q0VHnPLlvzg' },
    'sharm-quad-safari': { id: 'TCWhN7VPXrY' },
    'mount-sinai-trek': { id: 'LX3TTs1imPc' },
    'sharm-glass-boat': { id: 'mx1ScqwVu04' },
    'tiran-island-boat': { id: 'I7u2Y48lw_A' },
    'giftun-island-boat': { id: 'v2saS41WZC4', start: 922 },
    'hurghada-diving-dolphins': { id: 'TcSkJXZq_-M' },
    'hurghada-quad-safari': { id: 'Kbmw2E7ycYY' },
    'hurghada-bedouin-bbq': { id: 'v2saS41WZC4', start: 2439 },
    'orange-bay-island': { id: 'uQIwUi7E8V8' },
    'hurghada-dolphin-watching': { id: 'TcSkJXZq_-M' },
    'el-gouna-city-tour': { id: 'BiuypsGWuSw' },
    'luxor-east-west-bank': { id: 'KJRCyOekcd8' },
    'luxor-hot-air-balloon': { id: 'aqTaWgsYc1g' }
  }
};

var ET_MEDIA = (function () {

  /* Best available photo for a trip */
  function image(trip) {
    if (!trip) return '';
    if (trip.image) return trip.image;
    var m = ET_IMAGES.trips[trip.id];
    if (m && m.image) return m.image;
    var byCat = ET_IMAGES.byCategory[trip.category];
    if (byCat) return byCat;
    return '';
  }

  /* Optional short video for a trip.
     The curated map always wins, so site updates show fresh
     videos even when older trip snapshots are still stored. */
  function video(trip) {
    if (!trip) return '';
    var m = ET_IMAGES.trips[trip.id];
    if (m && m.video) return m.video;
    if (trip.video) return trip.video;
    return '';
  }

  /* Optional full-length YouTube video for a trip.
     Returns { id, start? } or null. */
  function fullVideo(trip) {
    if (!trip) return null;
    var m = ET_IMAGES.fullVideo && ET_IMAGES.fullVideo[trip.id];
    if (m && m.id) return m;
    return null;
  }

  function cityImage(cityId) {
    return ET_IMAGES.cities[cityId] || '';
  }

  /* Called from <img onerror> when a photo fails to load:
     swap it for an animated SVG scene so cards never look broken. */
  function fallback(img) {
    try {
      var parent = img.parentNode;
      var cat = img.getAttribute('data-cat') || '';
      var scene = '';
      if (typeof ET_SCENES !== 'undefined' && ET_SCENES.scene) {
        scene = ET_SCENES.scene(cat);
      }
      img.removeAttribute('onerror');
      if (scene) {
        var holder = document.createElement('div');
        holder.className = 'scene-holder';
        holder.innerHTML = scene;
        parent.insertBefore(holder, img);
      }
    } catch (e) {}
    img.remove();
  }

  return { image: image, video: video, fullVideo: fullVideo, cityImage: cityImage, fallback: fallback };
})();
