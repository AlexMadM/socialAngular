import { Component, forwardRef, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

export type Callback<D = void, R = void> = (data?: D) => R;
type ControlValue = string | null;
type InputValue = Extract<ControlValue, string>;

@Component({
  selector: 'tt-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tt-input.component.html',
  styleUrl: './tt-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TtInputComponent),
    },
  ],
})
export class TtInputComponent implements ControlValueAccessor {
  type = input<'text' | 'password'>('text');
  placeholder = input<string>();
  private onChange?: Callback<InputValue>;
  private onTouched?: Callback;
  disabled = signal<boolean>(false);

  value: string | null = null;

  writeValue(val: string | null) {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onModelChange(val: string | null): void {
    // @ts-ignore
    this.onChange(val);
  }
}
