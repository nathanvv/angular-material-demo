import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonFilterSelectorService } from '../service/person-filter-selector.service';
import { Observable } from 'rxjs';
import { IIdName } from '../model/id-name.model';
import { ISchoolConfiguration } from '../model/school-configuration.model';
import { IFilterOptions } from '../model/filter-options.model';

@Component({
  selector: 'app-person-filter-selector',
  templateUrl: './person-filter-selector.component.html',
  styleUrls: ['./person-filter-selector.component.scss']
})

export class PersonFilterSelectorComponent implements OnInit {

  private defaultFilterEntity: any = {
    configSchoolId: 6,
    filterTypeId: 0,
    filterOption: { id: 1 },
    filterSubOption: null
  }

  public personFilterForm: FormGroup = null;
  public schoolList$: Observable<ISchoolConfiguration[]> = null;
  public filterTypeList$: Observable<IIdName[]> = null;
  public filterOptionsList$: Observable<IIdName[]> = null;
  public filterSubOptionsList$: Observable<IFilterOptions[]> = null;

  public configSchoolId: FormControl = new FormControl(this.defaultFilterEntity?.configSchoolId ?? '', Validators.required);
  public filterTypeId: FormControl = new FormControl(this.defaultFilterEntity?.filterTypeId ?? '', Validators.required);
  public filterOption: FormControl = new FormControl(this.defaultFilterEntity?.filterOption ?? '', Validators.required);
  public filterSubOption: FormControl = new FormControl(this.defaultFilterEntity?.filterSubOption ?? '', Validators.required);

  constructor(
    private personFilterSelectorService: PersonFilterSelectorService,
    public personFilterFormBuilder: FormBuilder
  ) {
    this.personFilterForm = this.personFilterFormBuilder.group({
      school: this.configSchoolId,
      filterTypeId: this.filterTypeId,
      filterOption: this.filterOption,
      filterSubOption: this.filterSubOption
    });
  }

  private resetFilterSubOption(option: IIdName): void {
    this.personFilterForm.patchValue({filterSubOption : null});
    this.personFilterForm.controls.filterSubOption.markAsUntouched();
  }

  private setFilters(): void {
    this.schoolList$ = this.personFilterSelectorService.getSchoolList();
    this.filterTypeList$ = this.personFilterSelectorService.getFilterTypeList();
    this.filterOptionsList$ = this.personFilterSelectorService.getFilterOptionList();
    this.filterSubOptionsList$ = this.personFilterSelectorService.getFilterSubOptionList();
  }

  private setValueChangeEvent(): void {
    this.personFilterForm.get('filterTypeId').valueChanges.subscribe(value => {
      console.log(value);
      this.filterOptionsList$ = this.personFilterSelectorService.getFilterOptionList();
    });
    this.personFilterForm.get('filterOption').valueChanges.subscribe(value => {
      console.log(value);
      this.filterSubOptionsList$ = this.personFilterSelectorService.getFilterSubOptionList();
      this.resetFilterSubOption(value);
      console.log(this.personFilterForm);
    });
    this.personFilterForm.get('filterSubOption').valueChanges.subscribe(value => {
      console.log(value);
      // Todo : make call to get student list
    })
  }

  public ngOnInit(): void {
    this.setFilters();
    this.setValueChangeEvent();
  }

  public compareId(val1: (IIdName | IFilterOptions), val2: (IIdName | IFilterOptions)): boolean {
    return val1?.id === val2?.id;
  }

}
