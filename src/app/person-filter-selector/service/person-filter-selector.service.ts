import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IIdName } from '../model/id-name.model';
import { ISchoolConfiguration } from '../model/school-configuration.model';
import { IFilterOptions } from '../model/filter-options.model';

@Injectable({
  providedIn: 'root'
})
export class PersonFilterSelectorService {

  private endpointMap: any = {
    'schoolList' : 'assets/data/school-list.json',
    'filterTypeList' : 'assets/data/filter-type.json',
    'filterOptionsList' : 'assets/data/filter-options.json',
    'filterSubOptionsList' : 'assets/data/filter-sub-options.json'
  };

  constructor(private _httpClient: HttpClient) { }

  public getSchoolList(): Observable<ISchoolConfiguration[]> {
    let schoolList: Observable<ISchoolConfiguration[]> = of([]);
    if (this.endpointMap?.schoolList) {
      schoolList = this._httpClient.get<ISchoolConfiguration[]>(this.endpointMap.schoolList);
    }
    return schoolList;
  }

  public getFilterTypeList(): Observable<IIdName[]> {
    let filterTypeList: Observable<IIdName[]> = of([]);
    if (this.endpointMap?.filterTypeList) {
      filterTypeList = this._httpClient.get<IIdName[]>(this.endpointMap.filterTypeList);
    }
    return filterTypeList;
  }

  public getFilterOptionList(): Observable<IIdName[]> {
    let filterOptionsList: Observable<IIdName[]> = of([]);
    if (this.endpointMap?.filterOptionsList) {
      filterOptionsList = this._httpClient.get<IIdName[]>(this.endpointMap.filterOptionsList);
    }
    return filterOptionsList;
  }

  public getFilterSubOptionList(): Observable<IFilterOptions[]> {
    let filterSubOptionsList: Observable<IFilterOptions[]> = of([]);
    if (this.endpointMap?.filterSubOptionsList) {
      filterSubOptionsList = this._httpClient.get<IFilterOptions[]>(this.endpointMap.filterSubOptionsList);
    }
    return filterSubOptionsList;
  }
}

