export const getRandomGridSpanSize = (id, xSize, ySize) => {
   // const regExp = /\/id\/(?<id>\d+)\/(?<xSize>\d+)\/(?<ySize>\d+)/g;
   // const { id, xSize, ySize } = url.matchAll(regExp).next().value.groups;
   if (xSize < ySize) {
      return  'row-span-2';
   }
   const random = ((xSize + ySize) / id + "").at(-1);
   return random > 7 ? 'col-span-2' : '';
}