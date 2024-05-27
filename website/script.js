// Script.js

// Function to fetch featured releases and populate the releases section
function getFeaturedReleases() {
    // Fetch data from an API or use sample data
    const sampleReleases = [
      {
        imageUrl: 'album-cover-1.jpg',
        title: 'LOST IN',
        artist: 'THABANG BALOYI'
      },
      {
        imageUrl: 'album-cover-2.jpg',
        title: 'We Just Friends',
        artist: 'THABANG BALOYI,AQUADEEP,VEESOUL'
      },
      {
        imageUrl: 'album-cover-3.jpg',
        title: 'DONT GET CAUGHT',
        artist: 'THABANG BALOYI'
      },
     {
        imageUrl: 'album-cover-4.jpg',
        title: 'Separation',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-5.jpg',
        title: 'Atmosphere',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-6.jpg',
        title: 'Unoverse',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-7.jpg',
        title: 'I LOVE LIFE',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-8.jpg',
        title: 'BRAND NEW DAY',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-9.jpg',
        title: 'SAVE ME',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-10.jpg',
        title: 'November 06',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-11.jpg',
        title: 'Diversion',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-12.jpg',
        title: 'Sunday Morning',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-13.jpg',
        title: 'March 2nd',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-14.jpg',
        title: 'Snatch Off',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-15.jpg',
        title: 'No Ceiling',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-16.jpg',
        title: 'Throwing Stones',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-17.jpg',
        title: 'OH!',
        artist: 'THABANG BALOYI,Thabang Phaleng'
      }, {
        imageUrl: 'album-cover-18.jpg',
        title: 'Sundays Of December',
        artist: 'THABANG BALOYI'
      }, {
        imageUrl: 'album-cover-19.jpg',
        title: 'Getrennt',
        artist: 'THABANG BALOYI'},
    ];
  
    const releasesContainer = document.querySelector('.releases');
  
    sampleReleases.forEach(release => {
      const releaseElement = document.createElement('div');
      releaseElement.classList.add('release');
  
      releaseElement.innerHTML = `
        <img src="${release.imageUrl}" alt="Album Cover">
        <h3>${release.title}</h3>
        <p>${release.artist}</p>
        <a href="#" class="buy-btn">Buy Now</a>
      `;
  
      releasesContainer.appendChild(releaseElement);
    });
  }
  
  // Function to fetch top charts and populate the chart container
  function getTopCharts() {
    // Fetch data from an API or use sample data
    const sampleCharts = [
      {
        rank: 2,
        imageUrl: 'album-cover-1.jpg',
        title: 'LOST IN',
        artist: 'THABANG BALOYI'
      },
      {
        rank: 3,
        imageUrl: 'album-cover-2.jpg',
        title: 'We Just Friends',
        artist: 'THABANG BALOYI,AQUADEEP,VEESOUL'
      },
      {
        rank: 4,
        imageUrl: 'album-cover-3.jpg',
        title: 'DONT GET CAUGHT',
        artist: 'THABANG BALOYI'
      },
      { rank: 5,
        imageUrl: 'album-cover-4.jpg',
        title: 'SAVE ME',
        artist: 'THABANG BALOYI'
    }, // Add more sample chart items
    ];
  
    const chartContainer = document.querySelector('.chart-container');
  
    sampleCharts.forEach(chart => {
      const chartItem = document.createElement('div');
      chartItem.classList.add('chart-item');
  
      chartItem.innerHTML = `
        <span class="rank">${chart.rank}</span>
        <img src="${chart.imageUrl}" alt="Album Cover">
        <div class="info">
          <h3>${chart.title}</h3>
          <p>${chart.artist}</p>
        </div>
        <a href="#" class="buy-btn">Buy Now</a>
      `;
  
      chartContainer.appendChild(chartItem);
    });
  }
  
  // Call the functions to populate the page
  getFeaturedReleases();
  getTopCharts();