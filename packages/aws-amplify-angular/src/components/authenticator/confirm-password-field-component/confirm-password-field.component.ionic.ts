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

import { Component, Inject } from '@angular/core';
import { ConfirmPasswordFieldComponent } from './confirm-password-field.component.core';
import { AmplifyService } from '../../../providers/amplify.service';
import { auth } from '../../../assets/data-test-attributes';

const template = `
<ion-item lines="none">
        <ion-label class="amplify-input-label amplify-input-label-ionic" for="usernameField" position="stacked">{{ this.amplifyService.i18n().get(this._label) }} *</ion-label>
        <ion-input
        #confirmPasswordField
        class="amplify-form-input-ionic"
        name="local_confirm_password"
        type="password"
        (ionChange)="setLocalConfirmPassword($event.target.value)"
        data-test="${auth.genericAttrs.confirmPasswordInput}"
        ></ion-input>
</ion-item>`;

@Component({
	selector: 'amplify-auth-confirm-password-field-ionic',
	template,
})
export class ConfirmPasswordFieldComponentIonic extends ConfirmPasswordFieldComponent {
	constructor(@Inject(AmplifyService) public amplifyService: AmplifyService) {
		super(amplifyService);
	}
}
