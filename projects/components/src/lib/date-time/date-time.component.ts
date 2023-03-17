import { ChangeDetectorRef, Component, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { TimeValue } from './time-value';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'mz-datetime',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimeComponent),
      multi: true,
    },
  ],
})
export class DateTimeComponent implements ControlValueAccessor {
  date: Date | undefined | null;
  time: string | undefined | null;
  private tempDate: string | undefined | null = null;
  private tempTime: string | undefined | null = null;

  private lz = (n: number) => ('0' + n).slice(-2);
  private formatDate = (dt: Date) => `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`;
  private formatTime = (t: Date) => `${this.lz(t.getHours())}:${this.lz(t.getMinutes())}`;
  private formatDateTime = (dt: Date, t: string) => `${this.formatDate(dt)} ${t}`
  private limitDate = (dt: Date) => {
    if (this.min) {
      dt = new Date(Math.max(dt.getTime(), this.min.getTime()));
    }

    if (this.max) {
      dt = new Date(Math.min(dt.getTime(), this.max.getTime()));
    }

    return dt;
  };

  type = 'outline';
  @ViewChild('datePicker') datepicker!: MatDatepicker<Date>;

  @Input()
  min?: Date | undefined;

  @Input()
  max?: Date | undefined;

  @Input()
  disabled = false;

  constructor(private _cd: ChangeDetectorRef) { }

  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(value: Date) {
    if (value) {
      const dt = this.limitDate(new Date(value));

      this.date = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
      this.time = this.formatTime(value);

      this.tempTime = this.time;
      this.tempDate = this.formatDate(this.date);
    }
    else {
      this.date = null;
      this.time = null;

      this.tempTime = null;
      this.tempDate = null;
    }

    this._cd.markForCheck();
  }

  registerOnChange(fn: (value: any) => any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateDate(val: any): void {
    const dt = this.limitDate(new Date(val.target.value));

    this.date = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());

    this.tempDate = this.formatDate(this.date);

    this.propagateModelChange();
    this._cd.markForCheck();
  }

  updateTime(val: string): void {
    if (!this.date) {
      const dt = this.limitDate(this.min ?? new Date());

      this.date = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());

      this.tempDate = this.formatDate(this.date);
    }
    this.time = val;

    this.tempTime = val;

    this.propagateModelChange();
  }

  updateDateEvent(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      const dt = this.limitDate(new Date(event.value));

      this.date = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());

      this.tempDate = this.formatDate(this.date);

      if (this.time === null) {
        this.time = this.formatTime(this.min ?? new Date());

        this.tempTime = this.time;
      }
    }
    else {
      this.date = null;
      this.tempDate = null;
      this.time = null;
      this.tempTime = null;
    }

    this.propagateModelChange();
    this._cd.markForCheck();
  }

  focusOnDateInput() {
    this.datepicker.open();
  }

  private propagateModelChange(): void {
    if (this.time && this.date) {
      const dateString = this.formatDateTime(this.date, this.time);
      this.onChange(new Date(dateString));
    } else {
      this.onChange(null);
    }
  }
}

export interface ScheduleInputModel {
  time: TimeValue;
}
