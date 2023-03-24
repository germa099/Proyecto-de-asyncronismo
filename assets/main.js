const content = null || document.querySelector("#content");

const API =
  "https://youtube138.p.rapidapi.com/channel/videos/?id=UCtwslQPB_xJfaFuZv0OETNw&filter=videos_latest&hl=en&gl=US";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "37fba3ebbcmsha09f5cd5b2c6badp1c5b1djsn290ba06c9e02",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

async function conseguirDatos(url) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const datos = await conseguirDatos(API);
    let view = `${datos.contents
      .map(
        (i) => `         
    <div class="group relative">
      <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <a href="https://www.youtube.com/watch?v=${i.video.videoId}&ab_channel=KingsLeagueInfoJobs" target="_blank">
            <img src="${i.video.thumbnails[3].url}" alt="${i.video.title}" class="w-full">
            </a>
          </div>
          <div class="mt-4 flex justify-between">
            <a href="https://www.youtube.com/watch?v=${i.video.videoId}&ab_channel=KingsLeagueInfoJobs" target="_blank"
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${i.video.title}
            </h3>
            </a>
      </div>
    </div>`
      )
      .join("")}`;
    content.innerHTML = view;
  } catch (er) {
    console.log(er);
  }
})();
