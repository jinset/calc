import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.PRUEBA.toLocaleLowerCase().includes(searchText);
    });
  }
}



// export class FilterPipe implements PipeTransform {
//   transform(list: any[], filterText: string | number,): any {

//     return !filterText
//       ? list
//       : list.filter(
//           (item) =>
//             item.CODIGO.toLowerCase().includes(filterText) ||
//             item.PRUEBA.toLowerCase().includes(filterText)
//         );
//   }
// }