// tslint:disable
/*
 * Copyright 2017-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
// tslint:enable

import {
	Component,
	Input,
	OnInit,
	EventEmitter,
	Inject,
	Output,
} from '@angular/core';
import { AmplifyService } from '../../../providers/amplify.service';
import { auth } from '../../../assets/data-test-attributes';

const template = `
<div>
    <label class="amplify-input-label" for="confirmPasswordField">
        {{ this.amplifyService.i18n().get(this._label) }}
        <span *ngIf="_required">*</span>
    </label>
    <div class="amplify-input-group">
        <div class="amplify-input-group-item">
            <input
                #confirmPasswordField
                class="amplify-form-input"
                name="local_confirm_password"
                type="password"
                (keyup)="setLocalConfirmPassword($event.target.value)"
                data-test="${auth.genericAttrs.confirmPasswordInput}"
            />
        </div>
    </div>
</div>
`;

@Component({
	selector: 'amplify-auth-confirm-password-field-core',
	template,
})
export class ConfirmPasswordFieldComponent {
	_label: string = 'Confirm Password';
	_required: boolean = true;
	_local_value: string = '';

	constructor(@Inject(AmplifyService) public amplifyService: AmplifyService) {}

	@Input()
	set data(data: any) {
		this._label = data.label || this._label;
	}

	@Input()
	set label(label: string) {
		this._label = label;
	}

	@Output()
	confirmPasswordChanged: EventEmitter<string> = new EventEmitter<string>();

	setLocalConfirmPassword(value: string) {
		this.confirmPasswordChanged.emit(value);
	}
}
