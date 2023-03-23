const content = null || document.getElementById("content");

const API =
  "https://youtube138.p.rapidapi.com/channel/videos/?id=UCLvKYB8zy1N485JYWRopirw&filter=videos_latest&hl=en&gl=US";

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
    const videos = await conseguirDatos(API);
    let view = `
    ${videos.contents
      .map(
        (video) => `
<div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
            >
              <img src="${video.contents.videos.thumbnails.url}" alt="" class="w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                title
              </h3>
            </div>
          </div>`
      )
      .slice(0, 4)
      .join("")}
          `;
    content.innerHTML = view;
  } catch (err) {
    console.log(err);
  }
})();
