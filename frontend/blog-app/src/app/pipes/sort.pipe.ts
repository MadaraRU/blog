import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(blogs: any[], sortOption: string): any[] {
        if (!sortOption) {
            return blogs;
        }

        switch (sortOption) {
            case 'new':
                return blogs?.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
            case 'old':
                return blogs?.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
            default:
                return blogs;
        }
    }

}
