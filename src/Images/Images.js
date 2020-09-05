let Images = [
    "https://randomuser.me/api/portraits/men/94.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/18.jpg",
    "https://randomuser.me/api/portraits/men/90.jpg",
    "https://randomuser.me/api/portraits/men/88.jpg",
    "https://randomuser.me/api/portraits/women/94.jpg",
    "https://randomuser.me/api/portraits/women/50.jpg",
    "https://randomuser.me/api/portraits/women/57.jpg",
    "https://randomuser.me/api/portraits/women/93.jpg",
    "https://randomuser.me/api/portraits/women/60.jpg",
    "https://randomuser.me/api/portraits/women/66.jpg",
    "https://randomuser.me/api/portraits/women/34.jpg",
    "https://randomuser.me/api/portraits/women/13.jpg",
    "https://randomuser.me/api/portraits/women/67.jpg"
];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(Images);

export default Images;