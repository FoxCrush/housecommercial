const galleryImageArray = [{
    src: "https://previews.dropbox.com/p/thumb/ABRC3LIy2A_LCUYHWrnvKxgRejNf_5K7pUYQLFWbTEsPFe99v_weihu7v9_PH9BiwVL7shzG-2qNYyFduRBQ2mTmSWj2M2hbBQpwNSrrTb1JChXddRhkhwc_XRDZbgBhcQgsIWeFL0qQVPLSfhg4Xaqh-lSbRZ5TV1K2a0K9daTwdIQr-wvOk_cKfmERDyqFXZ9zKRR2juBkxM2JO-nnQIRGQJjR_DlJpaOUgK6p6ztX61WFP640AQUETCFH81bH4fL8AhdfudjPj6ewmnx_wWHHmVizdRwd909GgpB_d4G1glo-PF7KPye54z2b9wAyFGjdThWksj7cuhMGCi22RDZvepkgsm36pWpH-7QCD6dcuw/p.jpeg?fv_content=true&size_mode=5",
    alt: "Just random pictures of estate #1"
},
{
    src: "https://previews.dropbox.com/p/thumb/ABQBQscczRU4xsjVUeTjsFR6LHO2TDL7E0UsuZkohahKpdszO0NE4wrsAjaBRyPDlOkylZZJalWN-jQu1DDbc-Naky3oXKHGUoMyE8rFRl-BJNJRM7OrqJTkj8nYMcDDphSer5Rax6Y-QY9X-3hsUf7g4naOJQJ2tVko-UUKh2TQtRSFxE-2XV0T7mhJAhbWOAuyq-Fh4aqkn3XNW22XhX-O_aoP7BYqh6k1bWmyIrX93hL1p2mKCq1H0AEe16_WgW_-5mpzkjqjG8OFog4n4DKUcgqSgz8Z0FUmYuG_12D5zdNZIL5iCJznonru52LeU8QGQj80RobVcf8QjyKH6G4R51aJ_Q4qraMfbkRAeoolZQ/p.jpeg?fv_content=true&size_mode=5",
    alt: "Just random pictures of estate #2"
},
{
    src: "https://previews.dropbox.com/p/thumb/ABQLXZHZfIRpjj78N2B1WL5cugYrY0-uWvtf88cmEtE3QPo6MOXhRbF4A8y73zyLj3eFqrW-iHESZTfUFlB404pYITLnq5QxE9Kf0uzUYHmx79YX9cc0WN2dq0VzIg0E4p1SWvL7l1xTUDhOwvsFvSaDl9zngAJ-HQotX3y5U9OrOlnsPHP9WFxzOO-0ZdXTE1gazIV3xgtmvlZktYWrboNkQKPbnnODNCFt-fj_-N5aM7jpkCWIKKPvx_-kxb6t36zn0P4puptesOrYq_DAwc0TVNr9-McxJloSZn4jA-L-YaVgAkoprKkxfYPXVQaoLyJvNXWJ4tncdsnbGhvqoxEg1PDj5YGYtDHYVbNaPFnA1w/p.jpeg?fv_content=true&size_mode=5",
    alt: "Just random pictures of estate #3"
},
{
    src: "https://previews.dropbox.com/p/thumb/ABTr_-EabM0iC0Y0lU2dkbLk_wifffJKFxhc6gQRjkkDNAfDR2iAClPbQ6IRAHb_VbokmyTeJhIig0IXcwllsFJNJ34QjMMJKe5uPKb9UwMn_8MuGUH0eJYxkzEaxXA_jM9ORxWPqFPwbKSIOILmkRhhX8xNPB2R2BKsA_LoWcLXSW4FlQYOVux8zGt5SnvfXYJnAjxxlDCE5wqQj5wYSh_HHO3VcpKqYGdkFOwTW6-trjqMqFZhBQjOVTxfqaySTtKFocBdlae6v-esZT9oa6e2bDi7EFlaQc7BbZPy8mUC8Kr3PMiuGZaeTBb_8vC6mK-sxCvFXLAc96-NEH-dRGDTkU8A_g3AOm64Byoy1eNRAA/p.jpeg?fv_content=true&size_mode=5",
    alt: "Just random pictures of estate #4"
}];
const refs = {
    galleryListSectionEl: document.querySelector(".gallery-list"),
};
function makeGalleryItem({ src, alt }, i) {
    const galleryItem = document.createElement('li');
    const galleryImage = document.createElement('img');

    galleryImage.classList.add('gallery-img');
    galleryImage.src = src;
    galleryImage.alt = alt;
    galleryImage.dataset.imageId = i + 1;

    galleryItem.append(galleryImage);
    // console.log("~ galleryItem", galleryItem);

    return galleryItem;
}

const galleryElements = galleryImageArray.map(makeGalleryItem);
refs.galleryListSectionEl.append(...galleryElements);
