class Gallery {
  images = [];
  imgElem;
  currentImage = -1;
  interval;

  constructor(elemId, ...imageUrls) {
    this.images = imageUrls;

    const galleryElem = document.getElementById(elemId);
    galleryElem.classList.add("gallery");

 
    const right = document.createElement("div");
    right.classList.add("arrow", "right");
    right.addEventListener("click", () => this.prevImage());
    galleryElem.appendChild(right);

  
    const left = document.createElement("div");
    left.classList.add("arrow", "left");
    left.addEventListener("click", () => this.nextImage());
    galleryElem.appendChild(left);

 
    this.imgElem = document.createElement("img");


    galleryElem.addEventListener("mouseover", () => this.stopAuto());
    galleryElem.addEventListener("mouseout", () => this.startAuto());


    galleryElem.appendChild(this.imgElem);

    this.nextImage();
    this.startAuto();
  }

  nextImage() {
    this.currentImage++;

    if (this.currentImage >= this.images.length) {
      this.currentImage = 0;
    }

    this.imgElem.src = this.images[this.currentImage];
  }

  prevImage() {
    this.currentImage--;

    if (this.currentImage < 0) {
      this.currentImage = this.images.length - 1;
    }

    this.imgElem.src = this.images[this.currentImage];
  }

  startAuto() {
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.nextImage();
    }, 3 * 1000);
  }

  stopAuto() {
    clearInterval(this.interval);
  }
}

const gallery1 = new Gallery(
  "gallery1",
  "./images/img1.JPG",
  "./images/img2.JPG",
  "./images/img3.JPG",
);
const gallery2 = new Gallery(
  "gallery2",
  "./images/img4.JPG",
  "./images/img5.JPG",
  "./images/img6.JPG",
);
const gallery3 = new Gallery(
  "gallery3",
  "./images/img7.JPG",
  "./images/img8.JPG",
  "./images/img9.JPG",
);
