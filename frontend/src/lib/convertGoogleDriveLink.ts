// lib/convertGoogleDriveLink.ts
// export const convertGoogleDriveLink = (viewLink: string) => {
//   if (typeof viewLink !== "string" || !viewLink) return "";
//   const match = viewLink.match(/\/d\/(.+?)\/|id=(.+?)(&|$)/);
//   const fileId = match ? match[1] || match[2] : "";

//   if (fileId) {
//     // sz=w1500 ensures the preview is high quality for the big display
//     return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1500`;
//   }
//   return viewLink;
// };

// export const convertGoogleDriveLink = (
//   viewLink: string,
//   type: "thumbnail" | "video" = "thumbnail",
// ) => {
//   if (typeof viewLink !== "string" || !viewLink) return "";

//   const match = viewLink.match(/\/d\/(.+?)\/|id=(.+?)(&|$)/);
//   const fileId = match ? match[1] || match[2] : "";

//   if (fileId) {
//     if (type === "video") {
//       // Direct stream link for <video> tags
//       return `https://drive.google.com/uc?export=download&id=${fileId}`;
//     }
//     // High-quality thumbnail for <img> tags
//     return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1500`;
//   }
//   return viewLink;
// };

export const convertGoogleDriveLink = (
  viewLink: string,
  type: "thumbnail" | "video" | "embed" = "thumbnail",
) => {
  if (typeof viewLink !== "string" || !viewLink) return "";

  const match = viewLink.match(/\/d\/(.+?)\/|id=(.+?)(&|$)/);
  const fileId = match ? match[1] || match[2] : "";

  if (fileId) {
    if (type === "embed") {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    if (type === "video") {
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1500`;
  }
  return viewLink;
};
