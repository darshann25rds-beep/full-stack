const imageUrls = [
    "https://picsum.photos/300/150?random=1",
    "https://picsum.photos/300/150?random=2",
    "https://picsum.photos/300/150?random=3"
];

function getImagePromise(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;

        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Failed to load image"));
    });
}

async function loadImages() {
    const boxes = document.querySelectorAll(".image-box");

    try {
        const images = await Promise.all(
            imageUrls.map(url => getImagePromise(url))
        );

        images.forEach((img, index) => {
            boxes[index].textContent = "";
            boxes[index].appendChild(img);
        });

    } catch (err) {
        console.error(err);
    }
}

document
    .getElementById("upload-btn")
    .addEventListener("click", loadImages);