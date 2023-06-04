export const getRandomGridSpanSize = (url) => {
   const regExp = /\/id\/(?<id>\d+)\/(?<xSize>\d+)\/(?<ySize>\d+)/g;
   const { id, xSize, ySize } = url.matchAll(regExp).next().value.groups;
   const random = ((xSize + ySize) / id + "").charAt(1);
   if (random > 5) return xSize < ySize ? 'row-span-2' : 'col-span-2';
   return "";
}