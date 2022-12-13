import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

// Create: - We create the validation object model
// Connect: We connect the validation to the UI
// Check: IsValid, IsDirty

export class Customer {
  customerCode: string = '';
  customerName: string = '';
  customerAmount: number = 0;

  formCustomerGroup: FormGroup; // Create object of FormGroup

  constructor() {
    var _builder = new FormBuilder();
    this.formCustomerGroup = _builder.group({}); // Use the builder to reate
    // control --> validation
    this.formCustomerGroup.addControl(
      'CustomerNameControl',
      new FormControl('', Validators.required)
    );
    // Customer code control -->
    // Required, 4 letter numeric.
    var validationCollection = [];
    validationCollection.push(Validators.required);
    validationCollection.push(Validators.pattern('^[0-9]{4,4}$'));

    this.formCustomerGroup.addControl(
      'CustomerCodeControl',
      new FormControl('', Validators.compose(validationCollection))
    );
  }
}
